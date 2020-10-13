import axios from 'axios';
import { convertDate } from './convert-date';

export const fetchExpenses = () =>{
    return async (dispatch) => {
        try {
        const response = await axios.get("//127.0.0.1:5000/allExpenses");
        dispatch(
            {
                type: "ALL_EXPENSES",
                payload: response.data,
            }
        );

    }catch(e){

        dispatch({
            type: "ALL_EXPENSES_REJECTED",
        });
        alert("Sorry! try again.");
    }
};
};

export const addExpense = (body) =>{
    console.log("sdlkfjj: ",body);
    body.doe = convertDate(body.doe);

    console.log("aftter covert: ",body);
    return async (dispatch) => {
        try {
          const response = await axios.post("//127.0.0.1:5000/addExpense", body);
          if (response) {
            dispatch({
              type: "ADD_STUDENT",
              payload: body,
            });
            alert("Expense Added Successfully");
          } else {
            alert("Some error occur, try again");
          }
        } catch (e) {
          console.log("action error occur", e);
          alert("Sorry! try again.");
        }
      };
}