import { combineReducers } from 'redux'
import UsersReducer from './users'
import PostsReducer from './posts'

export default combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
})
