import { useSelector ,useDispatch} from "react-redux"
import { decrement } from "./actions/countActions"
export default function Showcount(){
    const count=useSelector((state)=>{
        return state.count
    })
    const dispatch=useDispatch();
    return<div>
        <h2>Count-{count}</h2>
        <button onClick={()=>{
            dispatch(decrement())
        }}>-1</button>
    </div>
}