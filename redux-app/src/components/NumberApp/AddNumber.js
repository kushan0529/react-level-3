import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNumber } from "../../actions/numbersAction";

export default function AddNumber(){
    const[number,setNumber]=useState('')
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const num=Number(number)
        dispatch(addNumber(num))
    }
    return<div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}></input>
        </form>
    </div>
}