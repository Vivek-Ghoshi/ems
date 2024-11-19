import React, { useState } from 'react'

 const Createtask = () => {

   const [task,setTask] = useState({})
  const [taskTitle,setTaskTitle] = useState('')
  const [date,setdate] = useState('')
  const [assignTo,setAssignTo] = useState('')
  const [category,setCategory] = useState('')
  const [description,setDescription] = useState('')
  


  const submitHandler = (e)=>{
      e.preventDefault();
      
      const newTask = {taskTitle,date,category,description,active:true,newTask:true,failed:false,completedTask:false}

      setTask(newTask)

      const data = JSON.parse(localStorage.getItem("employees"))
       
      data.forEach((elem) => {
          if(elem.firstName == assignTo){
            elem.tasks.push(task)
          }
         
      });
      localStorage.setItem('employees',JSON.stringify(data))

      setTaskTitle('')
      setDescription('')
      setAssignTo('')
      setdate('')
      setCategory('')
  }
      
  return (
    <>
    <h2 className="text-2xl font-extrabold text-white  text-center ml-8">Create New Task</h2>
    <div className=" flex items-center justify-center  p-6">
    <form onSubmit={(e) => {submitHandler(e)}} className="bg-zinc-800 p-8 rounded-xl shadow-2xl w-full  space-y-6 border border-zinc-700">
   <div className="flex w-full">
    <div className="space-y-2 mr-4">
    <h3 className="text-sm font-medium text-zinc-300">Task Title</h3>
    <input 
      value={taskTitle}
      onChange={(e)=> setTaskTitle(e.target.value)}
      type="text" 
      placeholder="Task Name..." 
      className="w-full px-6 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-zinc-500"
    />
  </div>
  <div className="space-y-2 mr-4">
    <h3 className="text-sm font-medium text-zinc-300">Date</h3>
    <input 
    value={date}
      onChange={(e)=>setdate(e.target.value)}
      type="date" 
      className="w-full px-6 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
    />
  </div>

  <div className="space-y-2 mr-4">
    <h3 className="text-sm font-medium text-zinc-300">Assign To</h3>
    <input 
      value={assignTo}
      onChange={(e)=>setAssignTo(e.target.value)}
      type="text" 
      placeholder="Employee Name..." 
      className="w-full px-6 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-zinc-500"
    />
  </div>

  <div className="space-y-2 mr-4">
    <h3 className="text-sm font-medium text-zinc-300">Category</h3>
    <input 
      value={category}
      onChange={(e)=>setCategory(e.target.value)}
      type="text" 
      placeholder="Design, Dev, Etc." 
      className="w-full px-6 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-zinc-500"
    />
  </div>
  </div>

  <div className="space-y-2 mr-4">
    <h3 className="text-sm font-medium text-zinc-300">Description</h3>
    <textarea 
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      rows={6} 
      placeholder="Task Description..." 
      className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-zinc-500 resize-none"
    ></textarea>
  </div>

  
<div className="w-full flex justify-end gap-5">

  <button 
    className=" w-24  bg-zinc-900 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
  >
   Clear
  </button>
  <button 
    className=" mr-4 bg-zinc-900 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
  >
   Create Task
  </button>
</div>
</form>
</div>
</>
  )
}

export default Createtask
