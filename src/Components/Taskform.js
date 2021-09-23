import React, {useState, useContext} from 'react'
import {GlobalContext} from "../context/Globalcontext";
import {useHistory  } from "react-router-dom";
function Taskform() {
const history = useHistory()

    const [task, setTask] = useState({
        title:"",
        description:""
    })

    const handleChange= (e)=>{
        setTask({...task,[e.target.name]: e.target.value})
    }

    const handleForm= (e)=>{
        e.preventDefault();
        addTask(task);
        history.push("/")
    }
    const {addTask}=useContext(GlobalContext);
    
    return (
        <div className="flex justify-center items-center h-3/4">
            <form className="bg-gray-900 p-10" onSubmit={handleForm}>
            <h2 className="mb-7 text-3x1">A task</h2>
            <div className="mb-5">
                <input type="text" name="title" onChange={handleChange} placeholder="Write a title" className="rounded px-4 py-3 focus:text-gray-100 bg-gray-700 w-full" />
            </div>    
            <div className="mb-5">
                <textarea name="description" rows="2" onChange={handleChange} placeholder="write description" className="rounded px-4 py-3 focus:text-gray-100 bg-gray-700 w-full"/> 
            </div>
            <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5 rounded">Create Task</button>   
            </form>             
        </div>
    )
}

export default Taskform
