import { reducAuth } from "./AuthRaduce";
import { reducCount } from "./reducer";
import { combineReducers } from "redux";


export const RootReducer = combineReducers({
    auth : reducAuth,
    Count : reducCount
})