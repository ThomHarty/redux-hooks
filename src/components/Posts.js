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
      dispatch({ type: UserTypes.GET_USERS_REQUEST })
    }, [])

  console.log('component level users: ', users)
  return (
    <View></View>
  )
}

export default Posts
