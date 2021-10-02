import React, { useState } from 'react'
import style from './addnotes.module.scss'

const Addnotes = () => {
    const  [input , setInput] = useState("")
    const [notes , setNotes] = useState([])
    const inputHandler = (event) =>{
        setInput(event.target.value)
    }
    const addNotesHandler = (input)=> {
        // value = event.target.value
        setNotes((prev)=>[...prev ,input])
    }
   
    return(
        <div className={style.addnote}>
            <input type='text' placeholder='add notes' onChange={(e)=>inputHandler(e)} />
            <button className={style.addnote_delete} onClick={()=>addNotesHandler(input)} >add</button>
            <ul>{   
                notes.map((res , idx)=><li key={idx}>{res} <button onClick={()=>setNotes(prev=>prev.filter(note=> note !== res  ) )} >delete</button></li>  )
            }</ul>
        </div>
    )
}
export default Addnotes ;