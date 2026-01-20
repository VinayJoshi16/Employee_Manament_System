import React from 'react'
import Header from '../Other/Header'
import TaskListData from '../TaksList/TaskListData'
import TaskList from '../Other/TaskList'

const EmployeeDashboard = ({data, handleLogout}) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900'>
      {/* Background Pattern */}
      <div className='fixed inset-0 opacity-5'>
        <div className='absolute inset-0' style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className='relative z-10 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto'>
        {/* Header */}
        <Header data={data} handleLogout={handleLogout}/>
        
        {/* Stats Cards */}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-white mb-4 flex items-center gap-2'>
            <svg className='w-5 h-5 text-emerald-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
            </svg>
            Task Overview
          </h2>
          <TaskList data={data}/>
        </div>

        {/* Tasks Section */}
        <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-xl font-semibold text-white flex items-center gap-2'>
              <svg className='w-5 h-5 text-emerald-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
              </svg>
              My Tasks
            </h2>
            <span className='text-sm text-gray-400'>
              {data?.tasks?.length || 0} total tasks
            </span>
          </div>
          <TaskListData data={data}/>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
