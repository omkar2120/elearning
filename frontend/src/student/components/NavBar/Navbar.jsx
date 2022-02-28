import React from "react";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';
import {Button} from 'react-bootstrap';

function Navbar() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open") 
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft" onClick={openMenu}>
        <MenuIcon />
        </div>
        <div className="topRight">
         
        <span className="logo">E-learning</span>
            
       
        </div>
        
      </div>
      <aside className="sidebar">
        <h3 className="profile-name">student-profile </h3>
        <div className="sidebar-close-button" onClick={closeMenu}> 
            <CloseIcon />
        </div>
        <ul>
            <li><a href="index.html">Dashboard</a></li>
            <li><a href="index.html">courses</a></li>
            <li><a href="index.html">Sessions</a></li>
            <li><a href="index.html">Session-videos</a></li>
            <li><a href="index.html">Attendance</a></li>
        </ul>
        <div className="logout-button">
        <Button className="button-out">Logout</Button>
        </div>

    </aside>
    </div>
  );
}

export default Navbar;
