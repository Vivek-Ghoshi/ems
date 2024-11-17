import React from 'react'
import Header from '../Others/Header'
import TaskBoxs from '../Others/TaskBoxs'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashbord = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
   <Header/>
   <TaskBoxs/>
   <TaskList/>
   </div>
  )
}

export default EmployeeDashbord
