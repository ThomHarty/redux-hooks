import { url } from './config'

export default fetchPosts = async () => {
  const res = await fetch(`${url}/posts`)
  return res.json()
}
