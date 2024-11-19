import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-72 px-4 py-3 bg-yellow-500 rounded-xl'>
        <div className='flex items-center justify-between text-white'>
            <h3 className='bg-red-500 px-2 py-1 text-sm rounded-md'>{data.category}</h3>
            <h3 className='text-sm'>{data.taskDate}</h3>
        </div>
        <h2 className='mt-5 px-2 text-xl text-white font-semibold'>{data.taskTitle}</h2>
        <p className='mt-2 text-sm text-white px-2'>{data.description}</p>

        <div className='flex justify-between mt-2'>
          <button className='bg-green-500 px-2 py-2 text-sm text-white rounded-md'>Mark Accept Task</button>
          <button className='bg-red-500 px-2 py-2 text-sm text-white rounded-md'> Mark failed Task</button>
        </div>
      </div>
  )
}

export default NewTask
