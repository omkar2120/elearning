import Sidebar from "./components/topbar/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import {Routes,Route,Outlet} from "react-router-dom"
import Home from "./pages/home/Home";
import Course from "./components/topbar/course/course";
import Teacher from "./components/topbar/teacher/Teacher";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="con">
      <Sidebar/>
      <Routes className="dash">
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/course" element={<Course/>}></Route>  
        <Route path="/teacher" element={<Teacher/>}></Route>  
          
      </Routes> 
      
      </div>
     
    </div> 
  );
}

export default App;
