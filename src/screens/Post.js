import React from 'react'

import { SafeAreaView, Text, ScrollView } from 'react-native'

const Post = ({ navigation }) => {
  const post = navigation.getParam('post')
  const user = navigation.getParam('user')

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{post.title}</Text>
        <Text>{post.body}</Text>
        <Text>{user.name}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Post
