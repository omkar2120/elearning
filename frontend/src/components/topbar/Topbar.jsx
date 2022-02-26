import React from 'react'
import "./Topbar.css"

export default function Topbar() {
  return ( 
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">DashBoard</span>
            </div>
            <div className="topRight">
                <ul className="navlist">
                  <li className="navlistItem">Student Login</li>
                  <li className="navlistItem">Teacher Login</li>
                  <li className="navlistItem">Admin Login</li>
                </ul> 
                

                <img src="https://images.pexels.com/photos/8730980/pexels-photo-8730980.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8730980.jpg&fm=jpg" alt="" className="pr" />
                 
               
            </div>
        </div>
        </div>
  ) 
}