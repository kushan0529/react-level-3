import {  useEffect } from "react"
import {useDispatch,useSelector} from 'react-redux'
import { startUsers } from "../../actions/usersAction"
export default function Users(){
    const dispatch=useDispatch()
    const users=useSelector((state)=>{
        return state.users
    })
    useEffect(()=>{
        dispatch(startUsers())
    },[dispatch])
    return <div> 
        
        <h1>Listing Users-{users.length}</h1>
        </div>
}