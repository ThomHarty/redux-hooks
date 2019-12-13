import React, { useEffect, useState } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'

import { SafeAreaView, ScrollView, Text, Button } from 'react-native'

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
        {posts.map(post => (
          <Text key={post.id}>{post.title}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Posts
