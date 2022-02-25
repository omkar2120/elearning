import React from "react";
import Navbar from "./admin/components/Navbar";
import "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./admin/pages/Profile";
import Dashboard from "./admin/pages/Dashboard";
import ManageCourse from "./admin/pages/ManageCourse";
import ManageSession from "./admin/pages/ManageSession";
import ManageStudent from "./admin/pages/ManageStudent";
import ManageTeacher from "./admin/pages/ManageTeacher";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Profile} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/manage-course" exact component={ManageCourse} />
          <Route path="/manage-session" exact component={ManageSession} />
          <Route path="/manage-student" exact component={ManageStudent} />
          <Route path="/manage-teacher" exact component={ManageTeacher} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
