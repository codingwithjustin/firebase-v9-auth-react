import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCKEKpLKAad62VwyRx_J9Qe7_3R7o33JIY',
  authDomain: 'fir-auth-52005.firebaseapp.com',
  projectId: 'fir-auth-52005',
  storageBucket: 'fir-auth-52005.appspot.com',
  messagingSenderId: '986012551982',
  appId: '1:986012551982:web:63631ad43da7711b8408bf',
  measurementId: 'G-2FK5XC92GY'
})

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}
