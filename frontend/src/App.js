
import Navbar from "./global/component/Navbar";
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import StudLogin from "./student/components/StudLogin";
import TeachLogin from "./teacher/components/TeachLogin";
import AdminLogin from "./admin/components/AdminLogin";
import "./App.css"
function App() {
  return (
    <div className="App" style={{height:"100vh"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/studlogin" element={<StudLogin/>} />
          <Route path="/teachlogin" element={<TeachLogin/>} />
          <Route path="/admin" element={<AdminLogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
