import React, { useEffect } from 'react'
import { View } from 'react-native'

import reducers from './reducers'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const App = () => {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  )
}

const Posts = () => {
  const posts = useSelector(state => state.posts)
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch({ type: 'posts/get_posts_request' })
    }, [])

  console.log('component level posts: ', posts)
  return (
    <View></View>
  )
}

export default App
