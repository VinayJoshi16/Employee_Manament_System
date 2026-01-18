import React, { useState } from 'react'
 
const Login = ({handlelogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const SubmitHandler = (e) =>{
        e.preventDefault()
        handlelogin(email,password)
        setEmail("")
        setPassword("")
    } 
  return (
    <div className='flex  h-screen w-screen justify-center items-center'>
      <div className='border-2 border-emerald-600 p-25 rounded-2xl'>
        <form
        onSubmit={(e) =>{
            SubmitHandler(e);
        }}
        className='flex flex-col justify-center items-center '>
            <input
            required 
            className='border-2 text-white bg-transparent outline-none border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type="email" placeholder='Enter your Email'
            value={email}
            onChange={(e) =>{
                setEmail(e.target.value)
            }}
            />
            <input  
            required className='border-2 text-white bg-transparent outline-none border-emerald-600 rounded-full py-3 px-5 mt-3 text-xl placeholder:text-gray-400' type="password" placeholder='Enter password'
            value={password}
            onChange={(e) =>{
                setPassword(e.target.value)
            }}
            />
            <button className='text-white hover:not-focus:bg-indigo-700 outline-none bg-emerald-600 rounded-full py-3 px-15 mt-5 text-xl placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
