import React from 'react'
import Header from '../Other/Header'

import TaskListData from '../TaksList/TaskListData'
import TaskList from '../Other/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header/>
      <TaskList/>
      <TaskListData/>
    </div>
  )
}

export default EmployeeDashboard
