import {legacy_createStore} from "redux"

import { RootReducer } from "../reducer/rootReducer"






export const store = legacy_createStore(RootReducer)