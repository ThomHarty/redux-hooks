import React, { useEffect, useState } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'

import { NetworkConsumer } from 'react-native-offline'

import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native'

import { Types as PostTypes } from '../actions/posts'
import { Types as UserTypes } from '../actions/users'

const Posts = ({ navigation }) => {
  const posts = useSelector(state => state.posts.posts)
  const users = useSelector(state => state.users.users)
  const dispatch = useDispatch()

  const fetchData = () => {
    dispatch({ type: PostTypes.GET_POSTS_REQUEST })
    dispatch({ type: UserTypes.GET_USERS_REQUEST })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
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
                  <Text>{post.title}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text>Downloading posts is disabled since you are offline</Text>
            )
          )}
        </NetworkConsumer>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Posts
