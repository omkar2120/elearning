<<<<<<< HEAD
import Navbar from "./global/component/Navbar";
import { BrowserRouter , Routes , Route, Router} from 'react-router-dom'
import StudLogin from "./student/components/StudLogin";
import TeachLogin from "./teacher/components/TeachLogin";
import AdminLogin from "./admin/components/AdminLogin";
=======
>>>>>>> d12bafe072bb49c464ad5c63d59fd0e270ac7366
function App() {
  return (
    <div className="App">
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
