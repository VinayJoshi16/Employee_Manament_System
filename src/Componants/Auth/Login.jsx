import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
        {/* Animated background elements */}
        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
            <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
        </div>

        <div className='relative z-10 w-full max-w-md px-6'>
            {/* Logo/Brand Section */}
            <div className='text-center mb-8'>
                <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl mb-4 shadow-lg shadow-emerald-500/50'>
                    <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                    </svg>
                </div>
                <h1 className='text-4xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent'>
                    Employee Management
                </h1>
                <p className='text-gray-300 text-sm'>Welcome back! Please sign in to continue</p>
            </div>

            {/* Login Card */}
            <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20'>
                <form 
                    onSubmit={(e)=>{
                        submitHandler(e)
                    }}
                    className='space-y-6'
                >
                    {/* Email Input */}
                    <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                            Email Address
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
                                </svg>
                            </div>
                            <input 
                                value={email}
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                                required 
                                className='w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200' 
                                type="email" 
                                placeholder='you@example.com' 
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                            Password
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                                </svg>
                            </div>
                            <input
                                value={password}
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                                required 
                                className='w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200' 
                                type="password" 
                                placeholder='••••••••' 
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type='submit'
                        className='w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:from-emerald-600 hover:to-emerald-700 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2'
                    >
                        <span>Sign In</span>
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                        </svg>
                    </button>
                </form>

                {/* Footer */}
                <div className='mt-6 text-center'>
                    <p className='text-xs text-gray-400'>
                        Demo: Use <span className='text-emerald-400 font-semibold'>e@e.com</span> / <span className='text-emerald-400 font-semibold'>123</span> or <span className='text-emerald-400 font-semibold'>admin@me.com</span> / <span className='text-emerald-400 font-semibold'>123</span>
                    </p>
                </div>
            </div>
        </div>

        <style>{`
            @keyframes blob {
                0%, 100% { transform: translate(0, 0) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
            }
            .animate-blob {
                animation: blob 7s infinite;
            }
            .animation-delay-2000 {
                animation-delay: 2s;
            }
            .animation-delay-4000 {
                animation-delay: 4s;
            }
        `}</style>
    </div>
  )
}

export default Login