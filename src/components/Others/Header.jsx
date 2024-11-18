import React from 'react'

const Header = ({data}) => {
  console.log(data)
  return (
    <div className='flex items-center justify-between text-white'>
      <h1 className='text-2xl font-semibold'>Hey, <br /> <span className='font-extrabold text-3xl'>{data.firstName} 👋</span></h1>
      <button className='bg-red-600 px-3 py-2 text-white font-semibold rounded-xl'>Logout</button>
    </div>
  )
}

export default Header
