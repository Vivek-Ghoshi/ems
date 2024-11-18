import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage } from '../utils/LocalStorage';


export const AuthContext = createContext(); 

const Authprovider = ({children}) => {

  const [userData,setUserData] = useState({employees:null, admin:null});

  useEffect( ()=>{
    const {employees,admin} = getlocalStorage()
        setUserData({employees,admin})
  },[])
  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default Authprovider
