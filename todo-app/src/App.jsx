import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { Todo } from "./components/Todo"
import { Todoinput } from "./components/todoinput"
import {useState,useEffect} from 'react'

function App() {
  const [todos,setTodos]=useState([
    {input: 'Hi! Add your task!', complete:true},
    {input: 'Do some exercise!', complete:false},
  ])
  const [selectedtab,setselectedtab]=useState('Open')
  function handleAddtodo(newtodo){
    const newtodolist=[...todos,{input:newtodo,complete:false}]
    setTodos(newtodolist)
    handleSavedata(newtodolist)
  }
  function handleDonetodo(index){
    let newtodolist=[...todos]
    let completetodo=todos[index]
    completetodo['complete']=true
    newtodolist[index]=completetodo
    setTodos(newtodolist)
    handleSavedata(newtodolist)
  }
  function handleDeletetodo(index){
    let newtodolist=todos.filter((val,valIndex)=>{
      return valIndex !==index
    })
    setTodos(newtodolist)
    handleSavedata(newtodolist)
  }
function handleSavedata(currtodos){
  localStorage.setItem('todo-app',JSON.stringify({todos:currtodos}))
}
useEffect(()=>{
  if(!localStorage || !localStorage.getItem('todo-app')){return}
  let db=JSON.parse(localStorage.getItem('todo-app'))
  setTodos(db.todos)
},[])

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedtab={selectedtab}
      setselectedtab={setselectedtab}
      todos={todos}
       />
      <Todo handleDonetodo={handleDonetodo} handleDeletetodo={handleDeletetodo} selectedtab={selectedtab} todos={todos}/>
      <Todoinput handleAddtodo={handleAddtodo}/>
    </>
  )
}

export default App
