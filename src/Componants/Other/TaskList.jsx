import React from 'react'

const TaskList = ({data}) => {
  return (
    <div className='flex justify-between screen mt-10 gap-5 flex-wrap'>
      <div className='bg-gradient-to-br from-red-500 to-red-600 rounded-xl py-6 px-9 w-full sm:w-[45%] text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transition-all duration-200'>
        <h2 className='text-4xl font-bold mb-2'>{data.taskCounts.newTask}</h2>
        <h3 className='text-lg font-medium opacity-90'>New Task</h3>
      </div>
      <div className='bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl py-6 px-9 w-full sm:w-[45%] text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200'>
        <h2 className='text-4xl font-bold mb-2'>{data.taskCounts.completed}</h2>
        <h3 className='text-lg font-medium opacity-90'>Completed Task</h3>
      </div>
      <div className='bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl py-6 px-9 w-full sm:w-[45%] text-white shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 hover:scale-105 transition-all duration-200'>
        <h2 className='text-4xl font-bold mb-2'>{data.taskCounts.active}</h2>
        <h3 className='text-lg font-medium opacity-90'>Active Task</h3>
      </div>
      <div className='bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl py-6 px-9 w-full sm:w-[45%] text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-200'>
        <h2 className='text-4xl font-bold mb-2'>{data.taskCounts.failed}</h2>
        <h3 className='text-lg font-medium opacity-90'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskList
