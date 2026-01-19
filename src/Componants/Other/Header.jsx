import React from 'react'

const Header = ({ data, handleLogout }) => {
  const displayName = data?.firstName || 'Admin'

  return (
    <div className='flex items-end justify-between text-white'>
      <h1 className='text-2xl font-medium'>
        Hello <br /> <span className='text-3xl font-semibold'>{displayName} 👋</span>
      </h1>
      <button 
        onClick={handleLogout}
        className='bg-red-600 py-3 px-4 rounded-sm text-lg font-bold hover:bg-red-700 cursor-pointer'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
