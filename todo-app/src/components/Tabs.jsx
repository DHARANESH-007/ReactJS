export function Tabs(props){
    const {todos,selectedtab,setselectedtab}=props
    const tabs=['All','Open','Completed']
    return(
        <nav className="tab-container">
            {tabs.map((tab,tabIndex)=>{
                const numoftask=tab==='All'?
                todos.length:
                tab==='Open'?
                todos.filter(val=>!val.complete).
                length:
                todos.filter(val=>val.complete).length
                return (
                    <button onClick={()=>{
                       setselectedtab(tab) 
                    }}
                    key={tabIndex} className={"tab-button"
                        +(tab===selectedtab ? 'tab-selected':'')
                    }>
                        <h4>{tab}<span>({numoftask})</span></h4>
                    </button>
                )
            })}
        </nav>
    )
}