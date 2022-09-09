import pageNumberReducer from "./pageNumberReducer";
import usersReducer from "./usersReducer";
import tableReducer from "./tableReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    pageNumber: pageNumberReducer,
    users: usersReducer,
    table: tableReducer
});

export default allReducers;