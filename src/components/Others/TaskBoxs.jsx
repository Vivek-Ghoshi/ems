import React from 'react'

const TaskBoxs = () => {
  return (
    <div className='flex gap-5 justify-between mt-10 '>
      <div className='bg-yellow-400 px-6 py-9  w-[25%] rounded-xl'>
        <h2 className='text-3xl text-white font-semibold'>1</h2>
        <h3 className='text-xl text-white font-medium mt-3'>New Task</h3>
      </div>
      <div className='bg-pink-400 px-6 py-9  w-[25%] rounded-xl'>
        <h2 className='text-3xl text-white font-semibold'>3</h2>
        <h3 className='text-xl text-white font-medium mt-3'>Completed Task</h3>
      </div>
      <div className='bg-blue-400 px-6 py-9  w-[25%] rounded-xl'>
        <h2 className='text-3xl text-white font-semibold'>0</h2>
        <h3 className='text-xl text-white font-medium mt-3'>Failed Task</h3>
      </div>
      <div className='bg-emerald-400 px-6 py-9  w-[25%] rounded-xl'>
        <h2 className='text-3xl text-white font-semibold'>5</h2>
        <h3 className='text-xl text-white font-medium mt-3'>Accepted Task</h3>
      </div>
      
    </div>
  )
}

export default TaskBoxs
