import Login from './Componants/Auth/Login'
import EmployeeDashboard from './Componants/Dashboard/EmployeeDashboard'
import AdminDashboard from './Componants/Dashboard/AdminDashboard'
import {  useContext, useEffect, useState } from 'react';
import Authprovider from './Context/Authprovider';
import { AuthContext } from './Context/AuthContext';


const App = () => {
  const AuthData = useContext(AuthContext)
  useEffect(() => {
  if (AuthData) {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      setUser(loggedInUser.role)
    }
  }
}, [AuthData]);

  const [user, setUser] = useState(null);
  const handleLogin = (email,password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      loggedInUser.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(AuthData && AuthData.employees.find((e)=> email == e.email && password == e.password)){
      setUser('employee')
       loggedInUser.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }else{
      alert('invald')
    }
  }
 
  return (
    <>
    {!user ? <Login handlelogin ={ handleLogin}/> :''} 
    {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App
