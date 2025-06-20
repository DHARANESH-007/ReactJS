import { Todocard } from "./todocard";

export function Todo(props){
    const {todos,selectedtab}=props

    const filtertodo=selectedtab==='All'?
    todos:
    selectedtab==='Completed'?
    todos.filter(val=>val.complete):
    todos.filter(val=>!val.complete)
    return(
        <>
        {filtertodo.map((todo,todoindex)=>{
            return(
                <Todocard 
                key={todoindex}
                todoindex={todos.findIndex(val=>val.input==todo.input)}
                {...props}
                todo={todo}/>
            )
        })}
        </>
    )
}