import axios from "axios";
export const login = (login) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("//127.0.0.1:5000/login", login);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data,
      });
    } catch (e) {
      console.log("login error occur", e);
    }
  };
};
