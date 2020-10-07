import { combineReducers } from "redux";
import { studentReducer } from "./student";
export const allReducers = combineReducers({
  studentReducer,
});
