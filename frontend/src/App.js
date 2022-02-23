import Navbar from "./global/component/Navbar";
import { BrowserRouter , Routes , Route, Router} from 'react-router-dom'
import StudLogin from "./student/components/StudLogin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/studlogin" element={<StudLogin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
