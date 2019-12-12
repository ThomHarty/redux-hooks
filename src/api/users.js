import { url } from './config'

export default fetchUsers = async () => {
  const res = await fetch(`${url}/users`)
  return res.json()
}
