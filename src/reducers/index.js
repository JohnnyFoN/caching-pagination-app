import pageNumberReducer from "./pageNumberReducer";
import usersReducer from "./usersReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    pageNumber: pageNumberReducer,
    users: usersReducer
});

export default allReducers;