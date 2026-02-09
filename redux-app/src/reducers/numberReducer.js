// import { useSelector } from "react-redux";


// const numbers=useSelector((state)=>{
//     return state.numbers
// })
const initialNumber=[];

const numberReducer=(state=initialNumber,action)=>{
    switch(action.type){
        case'ADD_NUMBER':{
            return [...state,{...action.payload}]
        }
        case'ADD_TWO':{
            return state.map((num)=>{
                return {
                    ...num,
                    value:num.value+2
                }
            })
        }
        case'REMOVE_ALL':{
            return []
        }
        case'DECREMENT':{
            return state.map((ele)=>{
               if(ele.id === action.payload){
                return {...ele,value:ele.value-1}
               }
               else{
                return {...ele}
               }
            })
        }
        case'INCREMENT':{
            return state.map((ele)=>{
                    if(ele.id === action.payload){
                        return {...ele,value:ele.value+1}
                    }
                    else{
                        return {...ele}
                    }
                    })
        }
        case'REMOVE':{
            return state.filter((ele)=>{
                return ele.id!==action.payload
            })
        }
        default:{
            return [...state]
        }
    }
}

export default numberReducer;