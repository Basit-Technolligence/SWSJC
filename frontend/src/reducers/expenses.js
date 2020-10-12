const initialState = {
    allExp: [],
}

export const allExpReducer = (state=initialState, action) =>{
    const { type, payload } = action;
    switch(type){
        case "ALL_EXPENSES":
            return{
                allExp: payload
            }
        case "ALL_EXPENSES_REJECTED":
            return{
                ...state
                }
        default:
            return{
                ...state
            }
    }
}