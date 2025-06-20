export function Header(props){
    const{todos}=props
    const todoslength=todos.length
    const isplural=todoslength!=1
    const taskortasks=isplural ?'tasks':'task'
    return(
        <header>
            <h1 className="text-gradient">You have {todoslength} open {taskortasks}</h1>
        </header>
    )
}