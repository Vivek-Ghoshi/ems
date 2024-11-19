import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  
  return (
    <div id='Tasklist' className='w-full overflow-x-auto flex items-center justify-start gap-5 py-4  h-[49%] mt-10'>
      {data.tasks.map((elem,id)=>{
          if(elem.active){
           return <AcceptTask key={id} data={elem}/> 
          }
          if(elem.newTask){
           return <NewTask key={id} data={elem}/>
          }
          if(elem.completedTask){
           return <CompleteTask key={id} data={elem}/>
          }
          if(elem.failed){
            return <FailedTask key={id} data={elem}/>
          }
      })   }
    </div>
  )
}

export default TaskList
