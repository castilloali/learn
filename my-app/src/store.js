
import {legacy_createStore} from "redux"
import { createReducer } from "./reducer"






export const store = legacy_createStore(createReducer)