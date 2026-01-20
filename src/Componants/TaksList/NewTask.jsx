import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-72 p-5 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all duration-200'> 
        <div className='flex justify-between items-center mb-4'>
            <h3 className='bg-red-600 px-3 py-1.5 text-xs font-semibold rounded-lg shadow-md'>{data.category}</h3>
            <h4 className='text-sm font-medium opacity-90'>{data.taskDate}</h4>
        </div>
        <h2 className='text-xl font-bold mt-4 mb-3 text-white'>{data.taskTitle}</h2>
        <p className='text-sm mt-3 text-white/90 leading-relaxed line-clamp-3'>
            {data.taskDescription}
        </p>
        <div className='mt-6'>
            <button className='bg-emerald-500 hover:bg-emerald-400 active:scale-95 py-2.5 px-4 rounded-xl text-sm font-semibold shadow-md transition-all duration-200'>
                Accept
            </button>
        </div>
    </div>
  )
}

export default NewTask
