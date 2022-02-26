import React from 'react'
import "./sidebar.css"
import {Add,List,TrendingUp} from '@mui/icons-material';
import {NavLink} from "react-router-dom"
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Manage Course</h3>
                <ul className="sidebarList">
                    <li className='sidebarListItem'>
                        <Add className='sidebarIcon'/>
                        <NavLink to="course">Add Course</NavLink> 
                    </li>
                    <li className='sidebarListItem'>
                        <List className='sidebarIcon'/> 
                        Course List
                    </li>
                    <li className='sidebarListItem'>
                        <TrendingUp className='sidebarIcon'/> 
                        Syllabus
                    </li>
                 </ul>
                 <h3 className="sidebarTitle">Manage Teacher</h3>
                <ul className="sidebarList">
                    <li className='sidebarListItem'>
                        <Add className='sidebarIcon'/>
                        <NavLink to="teacher">Add Teacher</NavLink>
                    </li>
                    <li className='sidebarListItem'>
                        <List className='sidebarIcon'/>
                        Teacher list
                    </li>
                 </ul>
                 <h3 className="sidebarTitle">Manage Student</h3>
                <ul className="sidebarList">
                    <li className='sidebarListItem'>
                        <Add className='sidebarIcon'/>
                        Add Student 
                    </li>
                    <li className='sidebarListItem'>
                        <List className='sidebarIcon'/>
                        Student List
                    </li>
                 </ul>
                 <h3 className="sidebarTitle">Manage Sessions</h3>
                <ul className="sidebarList">
                    <li className='sidebarListItem'>
                        <Add className='sidebarIcon'/>
                        Add Session 
                    </li>
                    <li className='sidebarListItem'>
                        <List className='sidebarIcon'/> 
                        Session List
                    </li>
                 </ul>
            </div>
        </div> 
    </div>
  )
}
