import React from 'react'

const Alltask = ({data}) => {
  
  return (
    <div className='rounded h-44 mt-3 p-5  h-auto'>
      <div className='text-white mb-2 bg-blue-400 rounded-xl px-4 py-3 flex items-center justify-evenly'>
        <h3 className='w-1/5 text-center  '>Employee Name</h3>
        <h2 className='w-1/5  text-center'>New Task</h2>
        <h5 className='w-1/5 text-center '>Active Task</h5>
        <h5 className='w-1/5 text-center '>Completed Task</h5>
        <h5 className='w-1/5  text-center'>failed</h5>
      </div>
       {data.employees.map((elem,id)=>{

        return  <div key={id} className='text-white mb-2 bg-transparent rounded-xl px-4 py-3 flex items-center justify-evenly'>
        
        <h2 className='w-1/5 text-white text-center '>{elem.firstName}</h2>
        <h5 className='w-1/5 text-yellow-400 text-center'>{elem.taskCounts.new}</h5>
        <h5 className='w-1/5 text-yellow-400 text-center'>{elem.taskCounts.active}</h5>
        <h5 className='w-1/5 text-green-500 text-center'>{elem.taskCounts.completed}</h5>
        <h5 className='w-1/5 text-red-500 text-center'>{elem.taskCounts.failed}</h5>
      </div>
      
       })}
     
    </div>
  )
}

export default Alltask
