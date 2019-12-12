import { useState, useEffect } from 'react'

import { url } from '../config'

export default function usePostsApiCall() {
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    const res = await fetch(`${url}/posts`)
    res.json().then(res => setPosts(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return [posts]
}
