export const addNumber=(randomNum)=>{
    return {
        type:'ADD_NUMBER',
        payload:randomNum
    }
}

export const addTwo=()=>{
    return{
        type:'ADD_TWO'
    }
}

export const remove_All=()=>{
    return{
        type:'REMOVE_ALL'
    }
}

export const decrement=(id)=>{
    return {
        type:'DECREMENT',
        payload:id
    }
}

export const increment=(id)=>{
    return {
        type:'INCREMENT',
        payload:id
    }
}

export const deleteOne=(id)=>{
    return {
        type:'REMOVE',
        payload:id
    }
}