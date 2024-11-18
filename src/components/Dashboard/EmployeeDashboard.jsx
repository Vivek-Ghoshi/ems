import React from 'react'
import Header from '../Others/Header'
import TaskBoxs from '../Others/TaskBoxs'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
   <Header data={data} />
   <TaskBoxs data={data} />
   <TaskList data={data} />
   </div>
  )
}

export default EmployeeDashboard
