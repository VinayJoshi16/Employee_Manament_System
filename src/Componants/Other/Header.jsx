import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between text-white'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>Vinay 👋</span> </h1>
      <button className='bg-red-600 py-3 px-4 rounded-sm text-lg font-bold'>Log Out</button>
    </div>
  )
}

export default Header
