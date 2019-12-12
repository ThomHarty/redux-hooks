import React from 'react'
import { View } from 'react-native'

import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import {
  usePostsApiCall,
  useUsersApiCall,
} from './api'

const store = createStore(reducers)

const App = () => {
  const [posts] = usePostsApiCall()
  const [users] = useUsersApiCall()

  console.log('store: ', store)

  return (
    <Provider store={store}>
      <View></View>
    </Provider>
  )
}

export default App
