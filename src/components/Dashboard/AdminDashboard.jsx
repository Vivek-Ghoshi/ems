import Alltask from "../Others/Alltask"
import Createtask from "../Others/Createtask"
import Header from "../Others/Header"

const AdminDashboard = () => {
  return (
    <div className="h-auto w-screen bg-[#1c1c1c] p-10">
      <Header/>
      <Createtask/>
      <Alltask/>
    </div>
  )
}

export default AdminDashboard
