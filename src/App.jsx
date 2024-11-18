import { useContext, useEffect } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getlocalStorage, setlocalStorage } from "./utils/LocalStorage"
import { useState } from "react"
import { AuthContext } from "./context/Authprovider"

const App = () => {
    
  const[user,setUser] = useState(null);
  const[loggedInUserData,setloggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  
useEffect(()=>{
  setlocalStorage()
},[])

  useEffect(()=>{ 
    if(authData){
      const loggedInUser = localStorage.getItem('loggedInUser');
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  },[authData])
  const handleLogin = (email,password)=>{
    if(email == "admin@me.com" && password == '123'){
      setUser('admin')
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    }
    else if(authData){
      const employee = authData.employees.find((e)=> email == e.email && password == e.password)
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee"}))
      }

    }
    else{
      console.log("invalid credentials")
    }
  }
  
  return (
    <>
    {  !user ? <Login handleLogin={handleLogin}/> : "" }
    {user == 'admin' && <AdminDashboard/> }
    {user == 'employee' &&  <EmployeeDashboard data={loggedInUserData}/> }
    </>
  )
}

export default App
