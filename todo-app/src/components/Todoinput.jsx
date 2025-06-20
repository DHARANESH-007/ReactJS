import {useState} from 'react'
export function Todoinput(props){
    const {handleAddtodo}=props
    const [inputvalue,setinputvalue]=useState('')
    return(
        <div className="input-container">
            <input value={inputvalue} 
            onChange={(e)=>{setinputvalue(e.target.value)}}
            placeholder="Add task"/>
            <button onClick={()=>{
                if(!inputvalue){return}
                handleAddtodo(inputvalue)
                setinputvalue('')
            }}>
              <i className="fa-solid fa-plus"></i>  
            </button>
        </div>
    )
}