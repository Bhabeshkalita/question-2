import React, { useState } from 'react'
import style from './todo.module.scss'

const Todo = () => {
    const  [todoinput , settodoInput] = useState("")
    const [todo , setTodo] = useState([])
    const inputHandler = (event) =>{
        settodoInput(event.target.value)
    }
    const addTodoHandler = (input)=> {
        setTodo((prev)=>[...prev ,input])
    }
   
    return(
        <div>
            <input type='text' placeholder='add notes' onChange={(e)=>inputHandler(e)} />
            <button onClick={()=>addTodoHandler(todoinput)} >add</button>
            <ul>{   
                todo.map((res , idx)=><li key={idx}>{res} <button onClick={()=>setTodo(prev=>prev.filter(note=> note !== res  ) )} >delete</button></li>  )
            }</ul>
        </div>
    )
}
export default Todo ;