import React from 'react';
import Header from '../../global/component/Header'
import "./AdminDash.css"
import { sideBarData } from '../sidebarData';
import StudentNavbar from './StudentNavbar';
export default function StudentDashboard() {
  return<div id='ad-dash'>
     {/* <Header list={sideBarData}/> */}
     <StudentNavbar list={sideBarData}/>
  </div>;
}