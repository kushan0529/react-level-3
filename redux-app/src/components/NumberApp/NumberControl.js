import { addNumber, addTwo,remove_All } from "../../actions/numbersAction";
import { useDispatch } from "react-redux"
export default function NumberControl(){
    const dispatch=useDispatch();
    const numberGenerator=()=>{
        const randomNumber=Math.round(Math.random()*100)
        const add={
            id:Date.now(),
            value:randomNumber
        }
        dispatch(addNumber(add))
    }

    const addingTwo=()=>{
        dispatch(addTwo())
    }
    const removeAll=()=>{
        dispatch(remove_All())
    }

    return <div>
        <button onClick={numberGenerator}>Generate</button>
        <button onClick={addingTwo}>+2</button>
        <button onClick={removeAll}>Remove All</button>
    </div>
}