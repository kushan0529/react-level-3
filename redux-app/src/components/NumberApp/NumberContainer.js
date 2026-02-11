import NumberControl from './NumberControl'
import NumberList from './NumberList'
import AddNumber from './AddNumber'
import {useSelector}from 'react-redux'
import Home from '../pages/home'
import Users from '../pages/users'
import TaskComponent from './taskComponent'
import { Route,Routes,Link } from 'react-router-dom'
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
        <Link to='/'>home  </Link>
        <b/>
        <Link to='/users'> users</Link>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/users' element={<Users/>}></Route>

        </Routes>

        <TaskComponent/>
        
        
        
    </div>
}