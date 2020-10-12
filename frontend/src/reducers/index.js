import { combineReducers } from "redux";
import { studentReducer } from "./student";
import { allExpReducer } from "./expenses";

export const allReducers = combineReducers({
  studentReducer,
  allExpReducer,
});
