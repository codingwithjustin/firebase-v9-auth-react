import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect } from 'react'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCKEKpLKAad62VwyRx_J9Qe7_3R7o33JIY',
  authDomain: 'fir-auth-52005.firebaseapp.com',
  projectId: 'fir-auth-52005',
  storageBucket: 'fir-auth-52005.appspot.com',
  messagingSenderId: '986012551982',
  appId: '1:986012551982:web:63631ad43da7711b8408bf',
  measurementId: 'G-2FK5XC92GY'
})

export const useAuthState = () => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])

  const isAuthenticated = user != null

  return { user, error, isAuthenticated }
}
