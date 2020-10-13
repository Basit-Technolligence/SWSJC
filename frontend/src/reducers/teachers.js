const initialState = {
    allTeachers: [],
    oneTeacher: []
}


export const teacherReducer = (state=initialState, action) =>{
    const {type,payload} = action;
    switch(type){
        case "ADD_TEACHER":
            return{
                allTeachers: [...state.allTeachers, action.payload]
            }
        default:
            return{
                ...state,
            };
    }
}