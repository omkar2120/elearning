import * as admin from '../constant/admin.Constant';
import axios from '../../axios'
import Cookies from "js-cookie"

export const loginAdminAction = (data) => async (dispatch) => {
        try {
            console.log(data)
            dispatch({ type: admin.ADMIN_USER_LOGIN_REQUESTED });
   
            
        const adminData=await axios.post("/auth/admin/signin",data)
        console.log(adminData)
        Cookies.set("e-learningadmintoken",adminData.data.token)

           dispatch({ 
               type: admin.ADMIN_USER_LOGIN_SUCCESS,
               user:adminData.data.user,
               courses:adminData.data.courses
            });
            

        } 
        catch (err) {
            dispatch({ type: admin.ADMIN_USER_LOGIN_ERROR,
            err:err.response.data,
            });
        }
    }