export const adminReducer = (loggedIn=false,
action)=>{
    switch(action.type){
        case "LOGOUT_SUCCESS":
            console.log('adas')
            return false;
        case "LOGIN_SUCCESS":
            return true;
        default:
            return loggedIn;
    }
}