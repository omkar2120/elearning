import Navbar from "./global/component/Navbar";
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import StudLogin from "./student/components/StudLogin";
import TeachLogin from "./teacher/components/TeachLogin";
import AdminLogin from "./admin/components/AdminLogin";
import AdimDashBoard from "./admin/pages/AdimDashBoard";
import AdminDashboard2 from "./admin/pages/AdminDashboard2";
import AdminAddCourse from "./admin/pages/AdminAddCourse";
import AdminAddTeacher from "./admin/pages/AdminAddTeacher";
import "./app.css"
function App() {
  return (
    <div className="App" style={{height:"100vh"}}>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Navbar/>} />
          <Route  path="/studlogin" element={<StudLogin/>} />
          <Route  path="/teachlogin" element={<TeachLogin/>} />
          <Route  path="/admin" element={<AdminLogin/>}/>
          <Route  path="/admin/dashboard" element={<AdimDashBoard/>}/>
          <Route path="/dashboard" element={<AdminDashboard2/>}/>
          <Route path="/admin/manage/course/add" element={<AdminAddCourse/>}/>
          <Route path="/admin/manage/teacher/add" element={<AdminAddTeacher/>}/>
        </Routes>
      </BrowserRouter>
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

export default App;
