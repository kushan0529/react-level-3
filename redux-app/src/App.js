import NumberContainer from "./components/NumberApp/NumberContainer"


export  default function App(){
    return<div>
      <h1>Random Number Generator</h1>
      <NumberContainer/>
    </div>
}









//random number generator
// import { increment } from './actions/countActions'
// import {useSelector,useDispatch}from 'react-redux'
// import Showcount from './showcount'
// export default function App(){
//   const count =useSelector((state)=>{
//     return state.count
//   })
//   const dispatch=useDispatch()
//   return<div>
//     <h1>redux app</h1>
//     <h2>Count-{count}</h2>
//     <button onClick={()=>{
//       dispatch(increment())
//     }}>+1</button>
//     <Showcount/>

//   </div>
// }