import React from 'react'

import { SafeAreaView, Text, ScrollView } from 'react-native'
import { Container, Card, Heading, Paragraph, Author } from '../ui'

const Post = ({ navigation }) => {
  const post = navigation.getParam('post')
  const user = navigation.getParam('user')

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Card>
            <Heading text={post.title} />
            <Paragraph text ={post.body} />
            <Author text={`- ${user.name}`} />
          </Card>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Post
