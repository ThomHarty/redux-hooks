import { all } from 'redux-saga/effects'

import UsersSagas from './users'
import PostsSagas from './posts'

export default function* rootSaga() {
  yield all([
    ...UsersSagas,
    ...PostsSagas,
  ])
}
