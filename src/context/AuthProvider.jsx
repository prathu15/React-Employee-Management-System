import React, { createContext, useState,useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  //localStorage.clear()

const [userData, setuserData] = useState(null)
useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorage() // Fix the destructuring to match the keys in getLocalStorage's return
    setuserData(employees )
}, [])


 

  return (
    <div>
        <AuthContext.Provider value={[userData,setuserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider