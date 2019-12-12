import { takeEvery, call, fork } from 'redux-saga/effects'
import * as actions from '../actions/posts'

import fetchPosts from '../api/posts'

function* getPosts() {
  try {
    const result = yield call(fetchPosts)
    console.log('posts saga result: ', result)
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
