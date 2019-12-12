import React from 'react'
import { View } from 'react-native'

import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

import {
  usePostsApiCall,
  useUsersApiCall,
} from './api'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const App = () => {
  const [posts] = usePostsApiCall()
  const [users] = useUsersApiCall()

  return (
    <Provider store={store}>
      <View></View>
    </Provider>
  )
}

export default App
