import React from 'react';
import Header from '../../global/component/Header'
import "./AdminDash.css"
import { sideBarData } from '../sidebarData';
export default function StudentDashboard() {
  return<div id='ad-dash'>
     <Header list={sideBarData}/>
  </div>;
}