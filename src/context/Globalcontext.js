import { createContext, useReducer } from "react";
import addreducer from "./Addreducer";
import {v4} from "uuid";

const initialState= {task:[
    {id:"1",
    title:"title one",
    desc: "some desc",
    done: false},
    {id:"2",
    title:"title two",
    desc: "some desc two",
    done: true}
]};
export const GlobalContext= createContext(initialState)

export const ContextProvider=({children})=>{
   const [state, dispatch] = useReducer(addreducer, initialState)
   
    const addTask = (task)=>{
        // console.log(task);
        dispatch({type:"ADD_TASK", payload: {...task, id: v4()}})
    }

    const deleteTask= (task)=>{
        dispatch({type:"DELETE_TASK", payload:""})
    }
    return(
    <GlobalContext.Provider value={{...state, addTask, deleteTask}}>
        {children}
    </GlobalContext.Provider>
    )
}