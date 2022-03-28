import {combineReducers} from "redux"
import adminReducer from "./admin.reducer"
import globalReducer from "./global.reducer"
import { subjectReducer } from "./subjects.reducer"
const rootReducer=combineReducers({
    adminReducer,subjectReducer,globalReducer
})
export default rootReducer