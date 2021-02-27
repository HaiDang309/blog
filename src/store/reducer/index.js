import { combineReducers } from "redux";

import authAdminReducer from "./authAdminReducer.js";
import postReducer from "./postReducer";

export default combineReducers({
    authAdminReducer,
    postReducer,
});
