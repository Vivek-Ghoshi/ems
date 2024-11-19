import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-72 px-4 py-3 bg-red-500 rounded-xl'>
    <div className='flex items-center justify-between text-white'>
        <h3 className='bg-red-500 px-2 py-1 text-sm rounded-md'>{data.category}</h3>
        <h3 className='text-sm'>{data.taskDate}</h3>
    </div>
    <h2 className='mt-5 px-2 text-xl text-white font-semibold'>{data.taskTitle}</h2>
    <p className='mt-2 text-sm text-white px-2'>{data.description}</p>

    <div className='flex justify-center mt-2'>
      <button className='w-full bg-red-500 px-2 py-2 text-sm text-white rounded-md'>Failed</button>
      
    </div>
  </div>
  )
}

export default FailedTask
