import { takeEvery, call, fork } from 'redux-saga/effects'
import * as actions from '../actions/users'

import fetchUsers from '../api/users'

function* getUsers() {
  try {
    const result = yield call(fetchUsers)
    console.log('users saga result: ', result)
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
