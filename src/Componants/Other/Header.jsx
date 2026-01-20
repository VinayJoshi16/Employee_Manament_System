import React from 'react'

const Header = ({ data, handleLogout }) => {
  const displayName = data?.firstName || 'Admin'
  const userRole = data?.email ? 'Employee' : 'Administrator'

  return (
    <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl mb-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30'>
            <span className='text-2xl font-bold text-white'>
              {displayName.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-white'>
              Welcome back, <span className='bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent'>{displayName}</span> 👋
            </h1>
            <p className='text-sm text-gray-400 mt-1'>{userRole} Dashboard</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className='flex items-center gap-2 bg-red-600/90 hover:bg-red-600 py-2.5 px-5 rounded-xl text-sm font-semibold text-white active:scale-95 cursor-pointer shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-200'
        >
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
          </svg>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Header
