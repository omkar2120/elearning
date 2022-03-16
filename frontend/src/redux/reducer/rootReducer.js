import {combineReducers} from "redux"
import adminReducer from "./admin.reducer"
import { subjectReducer } from "./subjects.reducer"
const rootReducer=combineReducers({
    adminReducer,subjectReducer
})
export default rootReducer