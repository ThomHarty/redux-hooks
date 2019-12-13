import React, { useEffect } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Posts from './screens/Posts'
import Post from './screens/Post'

import reducers from './reducers'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const AppNavigator = createStackNavigator(
  {
    Posts: Posts,
    Post: Post,
  },
  {
    initialRouteName: 'Posts',
  }
)

let Navigation = createAppContainer(AppNavigator)

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
