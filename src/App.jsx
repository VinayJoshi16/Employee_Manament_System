import React, { useContext, useEffect, useState } from 'react'

import EmployeeDashboard from './Componants/Dashboard/EmployeeDashboard'
import AdminDashboard from './Componants/Dashboard/AdminDashboard'

import { AuthContext } from './Context/AuthContext'
import Login from './Componants/Auth/Login'
import { getLocalStorage } from './Utility/LocalStorage'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }
    
    // Check context data first
    let employees = userData?.employees
    
    // If context data not loaded yet, check localStorage directly
    if (!employees) {
      const { employees: localEmployees } = getLocalStorage()
      employees = localEmployees
    }
    
    if (employees && Array.isArray(employees)) {
      const employee = employees.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        return
      }
    }
    
    alert("Invalid Credentials")
  }

  const handleLogout = () => {
    setUser(null)
    setLoggedInUserData(null)
    localStorage.removeItem('loggedInUser')
  }



  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>
          {user == 'admin' ? (
            <AdminDashboard handleLogout={handleLogout} />
          ) : (
            <EmployeeDashboard handleLogout={handleLogout} data={loggedInUserData} />
          )}
        </>
      )}
    </>
  )
}

export default App