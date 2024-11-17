import { useEffect } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashbord from "./components/Dashboard/EmployeeDashbord"
import { getlocalStorage, setlocalStorage } from "./utils/LocalStorage"

const App = () => {

  useEffect(()=>{
    setlocalStorage();
    getlocalStorage()
  },)
  return (
    <>
    {/* <Login/> */}
    {/* <EmployeeDashbord/> */}
    <AdminDashboard/>
    </>
  )
}

export default App
