import { takeEvery, call, fork } from 'redux-saga/effects'
import * as actions from '../actions/users'

import { useUsersApiCall } from './api'

function* getUsers() {
  try {
    const result = yield call(useUsersApiCall)
    console.log(result)
  } catch {

  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

const usersSagas = [
  fork(watchGetUsersRequest)
]

export default usersSagas
