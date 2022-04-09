import { combineReducers } from "redux";
import userReducer from "./Reduce";

const rootReducer = combineReducers({
    user: userReducer,
});
export default rootReducer;