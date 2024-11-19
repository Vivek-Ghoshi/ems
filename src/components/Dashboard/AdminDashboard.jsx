import { useContext } from "react"
import Alltask from "../Others/Alltask"
import Createtask from "../Others/Createtask"
import Header from "../Others/Header"
import { AuthContext } from "../../context/Authprovider"

const AdminDashboard = (props) => {
  const data = useContext(AuthContext)
  return (
    <div className="h-auto w-screen bg-[#1c1c1c] p-10">
      <Header changeUser={props.changeUser}/>
      <Createtask/>
      <Alltask data={data}/>
    </div>
  )
}

export default AdminDashboard
