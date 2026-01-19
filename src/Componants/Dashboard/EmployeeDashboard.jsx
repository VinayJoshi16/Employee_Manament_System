import React from 'react'
import Header from '../Other/Header'

import TaskListData from '../TaksList/TaskListData'
import TaskList from '../Other/TaskList'

const EmployeeDashboard = ({data, handleLogout}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data={data} handleLogout={handleLogout}/>
      <TaskList data={data}/>
      <TaskListData data={data}/>
    </div>
  )
}

export default EmployeeDashboard
