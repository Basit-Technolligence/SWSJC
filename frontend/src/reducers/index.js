import { combineReducers } from "redux";
import { studentReducer } from "./student";
import { allExpReducer } from "./expenses";
import { teacherReducer } from "./teachers";

export const allReducers = combineReducers({
  studentReducer,
  allExpReducer,
  teacherReducer,
});
