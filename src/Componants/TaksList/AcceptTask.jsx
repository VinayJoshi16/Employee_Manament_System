import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-72 p-5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 transition-all duration-200'> 
        <div className='flex justify-between items-center mb-4'>
            <h3 className='bg-red-600 px-3 py-1.5 text-xs font-semibold rounded-lg shadow-md'>{data.category}</h3>
            <h4 className='text-sm font-medium opacity-90'>{data.taskDate}</h4>
        </div>
        <h2 className='text-xl font-bold mt-4 mb-3 text-gray-900'>{data.taskTitle}</h2>
        <p className='text-sm mt-3 text-gray-800 leading-relaxed line-clamp-3'>
            {data.taskDescription}
        </p>
        <div className='flex justify-between mt-6 gap-2'>
            <button className='bg-green-600 hover:bg-green-700 active:scale-95 py-2.5 px-3 rounded-xl text-xs font-semibold text-white shadow-md transition-all duration-200 flex-1'>
                Complete
            </button>
            <button className='bg-red-600 hover:bg-red-700 active:scale-95 py-2.5 px-3 rounded-xl text-xs font-semibold text-white shadow-md transition-all duration-200 flex-1'>
                Failed
            </button>
        </div>
    </div>
  )
}

export default AcceptTask
