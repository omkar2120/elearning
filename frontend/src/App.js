import Navbar from "./global/component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudLogin from "./student/components/StudLogin";
import TeachLogin from "./teacher/components/TeachLogin";
import AdminLogin from "./admin/components/AdminLogin";
import AdimDashBoard from "./admin/pages/AdimDashBoard";
import AdminDashboard2 from "./admin/pages/AdminDashboard2";
import AdminAddCourse from "./admin/pages/AdminAddCourse";
import AdminAddTeacher from "./admin/pages/AdminAddTeacher";
import AdminCourseList from "./admin/pages/AdminCourseList";
import AdminTeacherList from "./admin/pages/AdminTeacherList";
import AdminAddStudent from "./admin/pages/AdminAddStudent";
import AdminStudentList from "./admin/pages/AdminStudentList";
import TeacherDashboard from "./teacher/pages/TeacherDashboard";
import TeacherAddStudent from "./teacher/pages/TeacherAddStudent";
import styled from "styled-components";
import Sidebar from "./student/components/Sidebar";
import MainContent from "./student/components/MainContent";
import "./App.css";
function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/studlogin" element={<StudLogin />} />
          <Route path="/teachlogin" element={<TeachLogin />} />
          <Route path="/admin" element={<AdminLogin />} />
          {/* <Route  path="/admin/dashboard" element={<AdimDashBoard/>}/> */}
          <Route path="/admin/dashboard" element={<AdminDashboard2 />} />
          <Route path="/admin/manage/course/add" element={<AdminAddCourse />} />
          <Route
            path="/admin/manage/teacher/add"
            element={<AdminAddTeacher />}
          />
          <Route
            path="/admin/manage/student/add"
            element={<AdminAddStudent />}
          />
          <Route path="admin/course/list" element={<AdminCourseList />} />
          <Route path="/admin/teacher/list" element={<AdminTeacherList />} />
          <Route path="/admin/student/list" element={<AdminStudentList />} />
          {/*  Teacher */}
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/student/add" element={<TeacherAddStudent />} />
        </Routes>
      </BrowserRouter>
      <Container>
        <Sidebar />
        <MainContent />
      </Container>
    </div>
    // =======
    // import Sidebar from "./components/topbar/sidebar/Sidebar";
    // import Topbar from "./components/topbar/Topbar";
    // import "./app.css"
    // import {Routes,Route,Outlet} from "react-router-dom"
    // import Home from "./pages/home/Home";
    // import Course from "./components/topbar/course/course";
    // import Teacher from "./components/topbar/teacher/Teacher";

    // function App() {
    //   return (
    //     <div className="App">
    //       <Topbar/>
    //       <div className="con">
    //       <Sidebar/>
    //       <Routes className="dash">
    //         <Route path="/" element={<Home/>}></Route>
    //         <Route path="/course" element={<Course/>}></Route>
    //         <Route path="/teacher" element={<Teacher/>}></Route>

    //       </Routes>

    //       </div>

    //     </div>
    // >>>>>>> origin/prasanth
  );
}
const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;
