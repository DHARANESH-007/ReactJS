export function Todocard(props){
    const {todo,handleDeletetodo,todoindex,handleDonetodo}=props


    return(
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={()=>{
                    handleDonetodo(todoindex)
                }}
                disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button onClick={()=>{
                    handleDeletetodo(todoindex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}