import { useState } from "react"

export default function TaskComponent(){
    const [task,setTask]=useState('')
    return <div>
        <form>
            <input type="text" onChange={e=>setTask(e.target.value)} value={task}>
            </input>
        </form>
    </div>
}