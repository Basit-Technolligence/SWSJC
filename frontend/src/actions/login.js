import axios from "axios";
export const login = () => {
  return async (dispatch) => {
    try {
      const response = await dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data,
      });
    } catch (e) {}
  };
};
