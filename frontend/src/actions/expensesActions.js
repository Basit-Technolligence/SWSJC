import axios from 'axios';

export const fetchExpenses = async (dispatch) =>{
    try{
        const response = await axios.get("//127.0.0.1:5000/allExpenses");
        dispatch(
            {
                type: "ALL_EXPENSES",
                payload: response.data,
            }
        );

    }catch(e){
        dispatch({
            type: "ALL_EXPENSES_REJECTED"
        });
    }
}