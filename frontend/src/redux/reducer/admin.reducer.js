import Cookie from "js-cookie"
import * as admin from "../constant/admin.Constant"
const initialState={
    isLogedin:false,
    isLoading:false,
    users:{},
    courses:[],
    err:false,
    token:Cookie.get("e-learningadmintoken")
}
const adminReducer=(state=initialState,action)=>{
    switch(action.type){
        case admin.ADMIN_USER_LOGIN_REQUESTED:
            return {
                ...state,
                isLoading:true,
                err:false
            }
        case admin.ADMIN_USER_LOGIN_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isLogedin:true,
                user:action.user,
                courses:action.courses,
                token:Cookie.get("e-learningadmintoken")
            }
        case admin.ADMIN_USER_LOGIN_ERROR:
            return{
                ...state,
                isLoading:false,
                err:action.err
            }
        default:
            return state
    }
}
export default adminReducer