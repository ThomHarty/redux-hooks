import React from 'react'
import { View } from 'react-native'

import {
  usePostsApiCall,
  useUsersApiCall,
} from './api/library'

const App = () => {
  const [posts] = usePostsApiCall()
  const [users] = useUsersApiCall()

  console.log('posts: ', posts)
  console.log('users: ', users)

  return (
    <View></View>
  )
}

export default App
