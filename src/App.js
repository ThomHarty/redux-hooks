import React, { useEffect } from 'react'
import { View } from 'react-native'

import Posts from './components/Posts'

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

export default App
