import { takeEvery, call, fork } from 'redux-saga/effects'
import * as actions from '../actions/posts'

import { usePostsApiCall } from './api'

function* getPosts() {
  try {
    const result = yield call(usePostsApiCall)
    console.log(result)
  } catch {

  }
}

function* watchGetPostsRequest() {
  yield takeEvery(actions.Types.GET_POSTS_REQUEST, getPosts)
}

const postsSagas = [
  fork(watchGetPostsRequest)
]

export default postsSagas
