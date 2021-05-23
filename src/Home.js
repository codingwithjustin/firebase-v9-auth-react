import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from './firebase'

export const Home = () => {
  const { user } = useAuthState()

  return (
    <>
      <h1>Welcome {user?.email}</h1>
      <button onClick={() => signOut(getAuth())}>Sign out</button>
    </>
  )
}
