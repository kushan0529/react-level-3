import axios from 'axios'

export const startUsers=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                const users=response.data
                dispatch(setUsers(users))
            })
            .catch((err)=>{
                alert(err.message)
            })

        // setTimeout(()=>{
        //     dispatch({type:'USERS',payload:['name1' ,'kushi']})
        // },2000)
    }   
}


export const setUsers=(users)=>{
    return{
        type:'USERS',payload:users
    }
}   