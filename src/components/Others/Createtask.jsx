import React from 'react'

const Createtask = () => {
  return (
    <>
    <h2 className="text-2xl font-extrabold text-white  text-center ml-8">Create New Task</h2>
    <div className=" flex items-center justify-center  p-6">
    <form className="bg-zinc-800 p-8 rounded-xl shadow-2xl w-full  space-y-6 border border-zinc-700">
   <div className="flex w-full  ">

  
  
  <div className="space-y-2 mr-4">
    <h3 className="text-sm font-medium text-zinc-300">Task Title</h3>
    <input 
      type="text" 
      placeholder="Task Name..." 
      className="w-full px-6 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-zinc-500"
    />
  </div>
  <div className="space-y-2 mr-4">
    <h3 className="text-sm font-medium text-zinc-300">Date</h3>
    <input 
      type="date" 
      className="w-full px-6 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
    />
  </div>

  <div className="space-y-2 mr-4">
    <h3 className="text-sm font-medium text-zinc-300">Assign To</h3>
    <input 
      type="text" 
      placeholder="Employee Name..." 
      className="w-full px-6 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-zinc-500"
    />
  </div>

  <div className="space-y-2 mr-4">
    <h3 className="text-sm font-medium text-zinc-300">Category</h3>
    <input 
      type="text" 
      placeholder="Design, Dev, Etc." 
      className="w-full px-6 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-zinc-500"
    />
  </div>
  </div>

  <div className="space-y-2 mr-4">
    <h3 className="text-sm font-medium text-zinc-300">Description</h3>
    <textarea 
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