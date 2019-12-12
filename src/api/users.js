import { useState, useEffect } from 'react'

import { url } from './config'

export default function useUsersApiCall() {
  const [users, setUsers] = useState([])

  async function fetchUsers() {
    const res = await fetch(`${url}/users`)
    res.json().then(res => setUsers(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return [users]
}
