import React, { useEffect, useState } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'

import AsyncStorage from '@react-native-community/async-storage'
import { NetworkConsumer } from 'react-native-offline'

import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Container, Card, Heading } from '../ui'

import { Types as PostTypes } from '../actions/posts'
import { Types as UserTypes } from '../actions/users'

const Posts = ({ navigation }) => {
  const posts = useSelector(state => state.posts.posts)
  const users = useSelector(state => state.users.users)
  const dispatch = useDispatch()
  const [storedPosts, setStoredPosts] = useState([])
  const [storedUsers, setStoredUsers] = useState([])

  fetchLocalData = async () => {
    try {
      const getStoredPosts = await AsyncStorage.getItem('@stored_posts')
      const getStoredUsers = await AsyncStorage.getItem('@stored_users')
      getStoredPosts && setStoredPosts(JSON.parse(getStoredPosts))
      getStoredUsers && setStoredUsers(JSON.parse(getStoredUsers))
    } catch(err) {
      console.log(err)
    }
  }

  const fetchData = () => {
    dispatch({ type: PostTypes.GET_POSTS_REQUEST })
    dispatch({ type: UserTypes.GET_USERS_REQUEST })
    fetchLocalData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <NetworkConsumer>
            {({ isConnected }) => (
              isConnected ? (
                posts.map(post => (
                  <TouchableOpacity
                    key={post.id}
                    onPress={() => navigation.navigate('Post', {
                      post,
                      user: users.find(user => user.id === post.userId)
                    }
                  )}>
                    <Card>
                      <Heading text={post.title} />
                    </Card>
                  </TouchableOpacity>
                ))
              ) : (
                storedPosts && storedUsers ? (
                  storedPosts.map(post => (
                    <TouchableOpacity
                      key={post.id}
                      onPress={() => navigation.navigate('Post', {
                        post,
                        user: storedUsers.find(user => user.id === post.userId)
                      }
                    )}>
                      <Card>
                        <Heading text={post.title} />
                      </Card>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Card>
                    <Paragraph text={`You can use this app offline once you have connected to WiFi once :)`} />
                  </Card>
                )
              )
            )}
          </NetworkConsumer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Posts
