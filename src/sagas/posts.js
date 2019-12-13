import AsyncStorage from '@react-native-community/async-storage'
import { takeEvery, call, fork, put } from 'redux-saga/effects'
import * as actions from '../actions/posts'

import fetchPosts from '../api/posts'

function* getPosts() {
  try {
    const result = yield call(fetchPosts)
    yield put(actions.getPostsSuccess({
      posts: result
    }))
    yield AsyncStorage.setItem('@stored_posts', JSON.stringify(result))
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
