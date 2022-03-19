import * as user from "../constant/admin.Constant";
import axios from "../../axios";
import Cookies from "js-cookie";
import { getSubjects } from "./subject.action";
import { getAllTeachers, getAllStudents } from "./admin.action";
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: user.ADMIN_USER_LOGIN_REQUESTED });
    const theUser = await axios.get("/auth/load/user", {
      headers: { authorization: Cookies.get("e-learningadmintoken") },
    });
    if (theUser)
      dispatch({
        type: user.ADMIN_USER_LOGIN_SUCCESS,
        user: theUser.data.user,
        courses: theUser.data.courses,
        subjects: theUser.data.subjects,
      });
    if (theUser.data.user.role == "admin") dispatch(getAllTeachers());
    if (
      theUser.data.user.role == "admin" ||
      theUser.data.user.role == "teacher"
    ) {
      dispatch(getAllStudents());
      dispatch(getSubjects());
    }
  } catch (err) {
    dispatch({ type: user.ADMIN_USER_LOGIN_ERROR, err: false });
  }
};
