import React from 'react'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import AcceptTask from './AcceptTask'
import FaildTask from './FaildTask'

const TaskListData = ({data}) => {
  return (
    <div id='tasklist'className='h-[55%] w-full overflow-auto flex items-center justify-start flex-nowrap gap-5 py-5  mt-10'>
      {data.tasks.map((elem ,idx) =>{
      if(elem.newTask){
        return<NewTask key={idx} data ={elem}/>
      }
      if(elem.completed){
        return <CompleteTask key={idx} data ={elem}/>
      }
      if(elem.active){
        return <AcceptTask key={idx} data ={elem}/>
      }
        if(elem.failed){
          return <FaildTask key={idx} data ={elem}/>
        }
      })}
    </div>
  )
}

export default TaskListData
