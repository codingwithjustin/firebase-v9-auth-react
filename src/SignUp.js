import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export const SignUp = () => {
  const history = useHistory()
  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()

      const [email, password] = e.target.elements
      const auth = getAuth()
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        history.push('/')
      } catch (e) {
        alert(e.message)
      }
    },
    [history]
  )

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="email" type="email" />
        <input placeholder="password" type="password" />
        <button>Sign Up</button>
      </form>
    </>
  )
}
