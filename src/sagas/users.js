import AsyncStorage from '@react-native-community/async-storage'
import { takeEvery, call, fork, put } from 'redux-saga/effects'
import * as actions from '../actions/users'

import fetchUsers from '../api/users'

function* getUsers() {
  try {
    const result = yield call(fetchUsers)
    yield put(actions.getUsersSuccess({
      users: result
    }))
    yield AsyncStorage.setItem('@stored_users', JSON.stringify(result))
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
