import React, {useContext} from 'react'
import {GlobalContext} from "../context/Globalcontext";



function Tasklist() {
   const context =useContext(GlobalContext);
   console.log(context);
    return (
        <div className="flex justify-center">
            <button onClick={context.deleteTask}>Delete All</button>
            <div className="w-6/12">
            {context.task.map(task=> 
                <div key={task.id} className="bg-gray-900 px-20 py-20 text-white shadow-2x1 mb-4 flex justify-between">
                    <div>
                        <h1>{task.title}</h1>
                        <h6>{task.id}</h6>
                    </div>
                    <div className="flex justify-between">
                       <button className="m-5">Delete</button>
                       <button>Edit</button>
                    </div>    
                </div>)}
            </div>   
        </div>
    )
}

export default Tasklist
