import React from 'react'

const TaskBoxs = ({data}) => {
  return (
    <div className='flex gap-5 justify-between mt-10 '>
      <div className='bg-yellow-400 px-6 py-9  w-[25%] rounded-xl'>
        <h2 className='text-3xl text-white font-semibold'>{data.taskCounts.new}</h2>
        <h3 className='text-xl text-white font-medium mt-3'>New Task</h3>
      </div>
      <div className='bg-blue-400 px-6 py-9  w-[25%] rounded-xl'>
        <h2 className='text-3xl text-white font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl text-white font-medium mt-3'>Completed Task</h3>
      </div>
      <div className='bg-red-400 px-6 py-9  w-[25%] rounded-xl'>
        <h2 className='text-3xl text-white font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl text-white font-medium mt-3'>Failed Task</h3>
      </div>
      <div className='bg-emerald-400 px-6 py-9  w-[25%] rounded-xl'>
        <h2 className='text-3xl text-white font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl text-white font-medium mt-3'>Accepted Task</h3>
      </div>
      
    </div>
  )
}

export default TaskBoxs
