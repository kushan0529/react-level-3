import NumberControl from './NumberControl'
import NumberList from './NumberList'
import AddNumber from './AddNumber'
import {useSelector}from 'react-redux'
export default function NumberContainer(props){
    const numbers=useSelector((state)=>{
        return state.numbers
    })
    const findsum=()=>{
        let sum=0;
        numbers.forEach((ele)=>{
            sum+=ele.value
        })
        return sum
    }

    return <div>
        <h2>Listing -{numbers.length}, sum -{findsum()}</h2>
        <NumberList/>
        <NumberControl/>
        <AddNumber/>
    </div>
}