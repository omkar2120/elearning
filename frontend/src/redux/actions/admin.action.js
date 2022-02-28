import * as admin from '../constant/admin.Constant';
import axios from '../../axios'
import Cookies from "js-cookie"
import Swal from "sweetalert2"
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
    export const getCourse=(data)=>async(dispatch)=>{
        console.log("function colled")
        try{
            dispatch({type:admin.ADMIN_COURSE_REQUESTED})
            const theCourse=await axios.get("/get/course")
            if(theCourse){
                dispatch({type:admin.ADMIN_COURSE_SUCCESS,course:theCourse.data})
            }
            else{
                dispatch({type:admin.ADMIN_COURSE_ERROR,err:"Something went wrong"})
            }
   
        }
        catch(err){
            console.log(err)
            dispatch({type:admin.ADMIN_COURSE_ERROR,err:err.response.data})
        }
    }

 export const addCourse=(data)=>async(dispatch)=>{
     try{
         dispatch({type:admin.ADMIN_COURSE_REQUESTED})
         const thecourse=await axios.post("/create/course",data)
         if(thecourse){
            Swal.fire("Course Created!")
             dispatch(getCourse()
)
         }

     }
     catch(err){
        dispatch({type:admin.ADMIN_COURSE_ERROR,
            err:err.response.data,
            });
     }
 }
