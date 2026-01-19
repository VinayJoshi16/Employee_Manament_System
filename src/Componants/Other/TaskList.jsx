import React from 'react'

const TaskList = ({data}) => {
  return (
    <div className='flex justify-between screen mt-10 gap-5'>
      <div className='bg-red-400 rounded-xl py-6 px-9 w-[45%] text-white'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='bg-blue-400 rounded-xl py-6 px-9 w-[45%] text-white'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='bg-pink-400 rounded-xl py-6 px-9 w-[45%] text-white'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='bg-amber-400 rounded-xl py-6 px-9 w-[45%] text-white'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskList
