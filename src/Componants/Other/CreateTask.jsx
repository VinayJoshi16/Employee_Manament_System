import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        const taskToAdd = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }
        setNewTask(taskToAdd)

        if (!userData || !userData.employees) {
            console.error('User data or employees not available')
            return
        }

        const updatedEmployees = userData.employees.map(function (elem) {
            if (asignTo == elem.firstName) {
                const updatedTasks = [...(elem.tasks || []), taskToAdd]
                return {
                    ...elem,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...elem.taskCounts,
                        newTask: (elem.taskCounts?.newTask || 0) + 1
                    }
                }
            }
            return elem
        })

        const updatedData = {
            ...userData,
            employees: updatedEmployees
        }
        
        setUserData(updatedData)
        console.log(updatedData);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between gap-6'
            >
                <div className='w-full md:w-1/2 space-y-4'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2 font-medium'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='w-full text-sm py-2.5 px-4 rounded-lg outline-none bg-gray-800/50 border border-gray-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200 placeholder:text-gray-500' 
                            type="text" 
                            placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2 font-medium'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='w-full text-sm py-2.5 px-4 rounded-lg outline-none bg-gray-800/50 border border-gray-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200' 
                            type="date" 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2 font-medium'>Assign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='w-full text-sm py-2.5 px-4 rounded-lg outline-none bg-gray-800/50 border border-gray-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200 placeholder:text-gray-500' 
                            type="text" 
                            placeholder='Employee name' 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2 font-medium'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='w-full text-sm py-2.5 px-4 rounded-lg outline-none bg-gray-800/50 border border-gray-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200 placeholder:text-gray-500' 
                            type="text" 
                            placeholder='Design, Development, etc.' 
                        />
                    </div>
                </div>

                <div className='w-full md:w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-2 font-medium'>Description</h3>
                    <textarea 
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} 
                        className='w-full h-44 text-sm py-3 px-4 rounded-lg outline-none bg-gray-800/50 border border-gray-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200 resize-none placeholder:text-gray-500' 
                        placeholder='Enter task description...'
                        name="" 
                        id=""
                    ></textarea>
                    <button 
                        type='submit'
                        className='bg-emerald-500 hover:bg-emerald-600 active:scale-95 py-3 px-5 rounded-lg text-sm font-semibold mt-4 w-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-200'
                    >
                        Create Task
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask