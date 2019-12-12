import React, { useEffect } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'

import { View } from 'react-native'

import { Types as PostTypes } from '../actions/posts'
import { Types as UserTypes } from '../actions/users'

const Posts = () => {
  const posts = useSelector(state => state.posts)
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch({ type: PostTypes.GET_POSTS_REQUEST })
    }, [])

  console.log('component level posts: ', posts)
  return (
    <View></View>
  )
}

export default Posts
