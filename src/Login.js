import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const Login = () => {
  const history = useHistory()
  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()

      const [email, password] = e.target.elements
      const auth = getAuth()
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        history.push('/')
      } catch (e) {
        alert(e.message)
      }
    },
    [history]
  )

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="email" type="email" />
        <input placeholder="password" type="password" />
        <button>Login</button>
      </form>
    </>
  )
}
