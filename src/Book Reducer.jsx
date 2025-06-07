const initialData ={
    noOfBooks:4500
}

const bookReducer = (state=initialData, action)=>{
    switch(action.type){
        case 'Buy_book' :
            return{
                ...state,
                noOfBooks:state.noOfBooks-action.payload
            }
            case 'add_book' :
                return{
                    ...state,
                    noOfBooks:state.noOfBooks+action.payload
                }
            default:
                return state;
    }
}
export default bookReducer;