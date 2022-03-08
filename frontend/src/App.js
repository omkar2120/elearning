import Navbar from "./global/component/Navbar";
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import StudLogin from "./student/components/StudLogin";
import TeachLogin from "./teacher/components/TeachLogin";
import AdminLogin from "./admin/components/AdminLogin";
import AdimDashBoard from "./admin/pages/AdimDashBoard";
import AdminDashboard2 from "./admin/pages/AdminDashboard2";
import TeacherDashboard from "./teacher/pages/TeacherDashboard"
import AdminAddCourse from "./admin/pages/AdminAddCourse";
import AdminAddTeacher from "./admin/pages/AdminAddTeacher";
import AdminCourseList from "./admin/pages/AdminCourseList";
import AdminTeacherList from "./admin/pages/AdminTeacherList";
import AdminAddStudent from "./admin/pages/AdminAddStudent";
import AdminStudentList from "./admin/pages/AdminStudentList";
import TeacherAddStudent from "./teacher/pages/TeacherAddStudent"
import StudentDashboard from "./student/Pages/StudentDashboard";
import Home from "./home/component/Home";
//import "./app.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from "react";
import  {useDispatch,useSelector} from "react-redux"
import { loadUser } from "./redux/actions/global.action";
import TeacherStudentList from "./teacher/pages/TeacherStudentList";
// import "./App.css"
import TechDash from "./teacher/pages/TeachDashBoard/TechDash";
import AttendanceCom from "./teacher/components/Attendance/AttendanceCom";
import ClassListAttendance from './teacher/components/ClassList/ClassListAttendance'
import NotFound from "./home/component/NotFound";
const theme = createTheme({
  // typography:{
  //   fontFamily:'Quicksand,sans-serif',
  // }
})

function App() {
 const dispatch=useDispatch()

  useEffect(async()=>{
    await dispatch(loadUser())
  },[dispatch])

  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{height:"100vh"}}>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/studlogin" element={<StudLogin/>} />
          <Route  path="/teachlogin" element={<TeachLogin/>} />
          <Route  path="/admin" element={<AdminLogin/>}/>
          <Route path="/teacher/manage/attendance" element={<ClassListAttendance/>}/>
          <Route path="/teacher/pages/Attendance/Attendance" element={<AttendanceCom/>}/>
          {/* <Route  path="/admin/dashboard" element={<AdimDashBoard/>}/> */}
          <Route path="/admin/dashboard" element={<AdminDashboard2/>}/>
          <Route path="/teacher/dashboard" element={<TechDash/>}/>
          <Route path="/student/dashboard" element={<StudentDashboard/>}/>
          <Route path="/admin/manage/course/add" element={<AdminAddCourse/>}/>
          <Route path="/admin/manage/teacher/add" element={<AdminAddTeacher/>}/>
          <Route path="/admin/manage/student/add" element={<AdminAddStudent/>}/>
          <Route path="/teacher/student/add" element={<TeacherAddStudent/>}/>
          <Route path="admin/course/list" element={<AdminCourseList/>}/>
          <Route path="/admin/teacher/list" element={<AdminTeacherList/>}/>
          <Route path="/admin/student/list" element={<AdminStudentList/>}/>
          <Route path="/teacher/student/list" element={<TeacherStudentList/>}/>
          <Route path="*" element={<NotFound/>} />\
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>

  );
}

export default App;
