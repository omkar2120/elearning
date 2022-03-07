import React from 'react'
import Topbar from "../../../global/component/Topbar"
import Sidebar from '../../../global/component/Sidebar2'
import { TechSideBarData } from '../../../teacher/TechSideBarData';
import TeacherDashBoard from '../../components/DashBoard/TeacherDashBoard';

export default function () {
  return (
    <div style={{height:"calc(100vh - 10%)"}}>
        <Topbar/>
        <div className="mainContainer" style={{height:"100%",display:'grid',gridTemplateColumns:"17% 1fr"}}>
            <div className="sidebarContaine">
                <Sidebar data={TechSideBarData}/>

            </div>
            <div className="sidebarContaine">
            <TeacherDashBoard />
            </div>
       
       </div>
        
    </div>
  )
}