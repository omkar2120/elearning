import Navbar from "./global/component/Navbar";
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import StudLogin from "./student/components/StudLogin";
import TeachLogin from "./teacher/components/TeachLogin";
import AdminLogin from "./admin/components/AdminLogin";
import AdimDashBoard from "./admin/pages/AdimDashBoard";
import AdminDashboard2 from "./admin/pages/AdminDashboard2";
import AdminAddCourse from "./admin/pages/AdminAddCourse";
import AdminAddTeacher from "./admin/pages/AdminAddTeacher";
import AdminCourseList from "./admin/pages/AdminCourseList";
import AdminTeacherList from "./admin/pages/AdminTeacherList";
import Home from "./home/component/Home";
import "./App.css"
import StudDashboard from "./student/components/StudDashboard";
function App() {
  return (
    <div className="App" style={{height:"100vh"}}>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/studlogin" element={<StudLogin/>} />
          <Route  path="/teachlogin" element={<TeachLogin/>} />
          <Route  path="/admin" element={<AdminLogin/>}/>
          {/* <Route  path="/admin/dashboard" element={<AdimDashBoard/>}/> */}
          <Route path="/admin/dashboard" element={<AdminDashboard2/>}/>
          <Route path="/admin/manage/course/add" element={<AdminAddCourse/>}/>
          <Route path="/admin/manage/teacher/add" element={<AdminAddTeacher/>}/>
          <Route path="admin/course/list" element={<AdminCourseList/>}/>
          <Route path="/admin/teacher/list" element={<AdminTeacherList/>}/>
          <Route path="studlogin/studashboard" element={<StudDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
