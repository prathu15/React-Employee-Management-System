import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData,setuserData] = useContext(AuthContext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')

  const [newTask, setnewTask] = useState({})

  const submitHandler = (e)=>{
      e.preventDefault()
      
      setnewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,complete:false})
      const data = userData
      
      data.forEach(function(elem){
        if(assignTo == elem.name){
          elem.tasks.push(newTask)
          elem.taskNumbers.newTask = elem.taskNumbers.newTask+1

          }
      })
      
        setuserData(data)
        console.log(data)
      
   
      settaskTitle('')
      setcategory('')
      setassignTo('')
      settaskDate('')
      settaskDescription('')
     
  }

  return (
    <div className="mt-8 flex flex-col lg:flex-row bg-gray-900 p-6 rounded-lg shadow-md max-w-5xl mx-auto space-y-4 lg:space-y-0 lg:space-x-6">
      {/* Left side form */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-md max-w-md">
        <h2 className="text-xl font-bold text-white mb-4">Create New Task</h2>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} 
        className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Task Title</label>
            <input
            value={taskTitle}
            onChange={(e)=>{
              settaskTitle(e.target.value)
            }}
              type="text"
              placeholder="Make a UI Design"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Date</label>
              <input
              value={taskDate}
              onChange={(e)=>{
                settaskDate(e.target.value)
              }}
                type="date"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium">Assign to</label>
              <input
              value={assignTo}
              onChange={(e)=>{
                setassignTo(e.target.value)
              }}
                type="text"
                placeholder="Employee"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Category</label>
            <input
            value={category}
            onChange={(e)=>{
              setcategory(e.target.value)
            }}
              type="text"
              placeholder="Design, Dev, etc."
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Description</label>
            <textarea
            value={taskDescription}
            onChange={(e)=>{
              settaskDescription(e.target.value)
            }}
              rows="3"
              placeholder="Add details here..."
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Create Task
          </button>
        </form>
      </div>

      {/* Right side text area */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-white mb-4">Additional Notes</h2>
        <textarea
          rows="10"
          placeholder="Add additional notes here..."
          className="w-full h-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
        ></textarea>
      </div>
    </div>
  );
};

export default CreateTask;
