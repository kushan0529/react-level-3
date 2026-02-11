const initialState=[];
export const taskReducer=(state=initialState,action)=>{
    switch(action.type){
        case'ADDTASK':{
            return {
                ...state,action.payload
            }
        }
    }
}