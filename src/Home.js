import { getAuth, signOut } from 'firebase/auth'
import { useCallback } from 'react'
import { useHistory } from 'react-router'
import { useAuthState } from './firebase'

export const Home = () => {
  const { user } = useAuthState()
  const history = useHistory()
  const signUserOut = useCallback(async () => {
    try {
      await signOut(getAuth())
      history.push('/login')
    } catch (e) {
      alert(e.messages)
    }
  }, [history])
  return (
    <>
      <h1>Welcome {user?.email}</h1>
      <button onClick={signUserOut}>Sign out</button>
    </>
  )
}
