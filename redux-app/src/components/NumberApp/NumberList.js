import { useSelector,useDispatch } from "react-redux"
import { decrement,deleteOne,increment } from "../../actions/numbersAction";

export default function NumberList(){
    const numbers=useSelector((state)=>{
        return state.numbers
    })
    const dispatch=useDispatch();

    const handleDecrement=(id)=>{
        dispatch(decrement(id))
    }
    const handleIncrement=(id)=>{
        dispatch(increment(id))
    }
    const handleDelete=(id)=>{
        dispatch(deleteOne(id))
    }

    return<div>
        <h2>NumberList</h2>
        <ul>
            {numbers.map((num)=>{
                return <li key={num.id}>{num.value} 
                <button onClick={()=>{
                    handleDecrement(num.id)
                }}>-</button>
                <button onClick={()=>{
                    handleIncrement(num.id)
                }}>+</button>
                <button onClick={()=>{
                    handleDelete(num.id)
                }}>x</button>
                </li>
            })}
        </ul>
    </div>
}