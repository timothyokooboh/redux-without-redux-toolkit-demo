import { combineReducers } from "redux";
import branches from "./branches";
import departments from "./departments";

export default combineReducers({
  branches,
  departments
});
