import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const AllTask = () => {

   const [userData,setUserData] = useContext(AuthContext)

   
  return (
    <div>
        <div className='bg-gradient-to-r from-red-500 to-red-600 mb-3 py-3 px-4 flex justify-between rounded-lg shadow-md'>
            <h2 className='text-base font-semibold w-1/5'>Employee Name</h2>
            <h3 className='text-base font-semibold w-1/5'>New Task</h3>
            <h5 className='text-base font-semibold w-1/5'>Active Task</h5>
            <h5 className='text-base font-semibold w-1/5'>Completed</h5>
            <h5 className='text-base font-semibold w-1/5'>Failed</h5>
        </div>
        <div className='space-y-2'>
        {userData?.employees && userData.employees.length > 0 ? (
            userData.employees.map(function(elem,idx){
                return <div 
                    key={idx} 
                    className='border-2 border-emerald-500/50 bg-gray-800/30 mb-2 py-3 px-4 flex justify-between rounded-lg hover:border-emerald-500 hover:bg-gray-800/50 transition-all duration-200 cursor-pointer'
                >
                    <h2 className='text-base font-medium w-1/5 text-white'>{elem.firstName}</h2>
                    <h3 className='text-base font-semibold w-1/5 text-blue-400'>{elem.taskCounts?.newTask || 0}</h3>
                    <h5 className='text-base font-semibold w-1/5 text-yellow-400'>{elem.taskCounts?.active || 0}</h5>
                    <h5 className='text-base font-semibold w-1/5 text-emerald-400'>{elem.taskCounts?.completed || 0}</h5>
                    <h5 className='text-base font-semibold w-1/5 text-red-400'>{elem.taskCounts?.failed || 0}</h5>
                </div>
            })
        ) : (
            <div className='text-center py-8 text-gray-400'>
                <p className='text-lg'>No employees found</p>
            </div>
        )}
        </div>
    </div>
  )
}

export default AllTask
