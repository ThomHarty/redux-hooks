import { Types } from '../actions/posts'

const INITIAL_STATE = {
  posts: []
}

export default function posts(state =  INITIAL_STATE, action) {
  switch(action.type) {
    case Types.GET_POSTS_SUCCESS: {
      return {
        posts: action.payload.posts
      }
    }
    default: {
      return state
    }
  }
}
