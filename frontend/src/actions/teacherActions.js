import axios from 'axios';
import { convertDate } from './convert-date';

export const addTeacher = (body) => {
    console.log("teacherrbody: ", body);

    body.doe = convertDate(body.doj);
  
    console.log("aftter covert: ", body);
    return async (dispatch) => {
      try {
        const response = await axios.post("//127.0.0.1:5000/addTeacher", body);
        if (response) {
          dispatch({
            type: "ADD_TEACHER",
            payload: body,
          });
          alert("Teacher Added Successfully");
        } else {
          alert("Some error occur, try again");
        }
      } catch (e) {
        console.log("Action error occur", e);
        alert("Sorry! try again.");
      }
    };
  };