import axios from "axios";

export const addStudent = (student) => {
  console.log("student data", student);
  return async (dispatch) => {
    try {
      const response = await axios.post("//127.0.0.1:5000/students", student);
      dispatch({
        type: "ADD_STUDENT",
        payload: response.data,
      });
    } catch (e) {
      console.log("action error occur", e);
    }
  };
};
export const getStudents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("//127.0.0.1:5000/students");
      dispatch({
        type: "GET_STUDENTS",
        payload: response.data,
      });
    } catch (e) {
      console.log("action error occur", e);
    }
  };
};
export const getStudentById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("//127.0.0.1:5000/students" + id);
      dispatch({
        type: "GET_STUDENT_BY_ID",
        payload: response.data,
      });
    } catch (e) {
      console.log("action error occur", e);
    }
  };
};
export const updateStudent = (id, student) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        "//127.0.0.1:5000/students" + id,
        student
      );
      dispatch({
        type: "UPDATE_STUDENT",
        payload: response.data,
      });
    } catch (e) {
      console.log("action error occur", e);
    }
  };
};
export const deleteStudent = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete("//127.0.0.1:5000/students" + id);
      dispatch({ type: "DELETE_STUDENT", payload: response.data });
    } catch (e) {
      console.log("action error occur", e);
    }
  };
};
