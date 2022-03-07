import React from 'react';
import Topbar from "../../../global/component/Topbar";
import Sidebar from "../../../global/component/Sidebar2";
import { TechSideBarData } from "../../TechSideBarData";
import { DataGrid } from '@mui/x-data-grid';
import {Button, Table,Form } from 'react-bootstrap';
import {BiBookReader} from "react-icons/bi"
import {Link} from 'react-router-dom'

export default function Attendance() {
  return ( 
    <div style={{ height: "calc(100vh - 10%)" }}>
    <Topbar />
    <div
      className="mainContainer"
      style={{
        height: "100%",
        display: "grid",
        gridTemplateColumns: "17% 1fr",
      }}
    >
      <div className="sidebarContaine">
        <Sidebar data={TechSideBarData} />
      </div>
      <div className="attendamce-data">
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Student Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td><div>
      <Link
                  to="/teacher/components/ClassList/ClassListAttendance"
                  style={{ textDecoration: "none", color: "grey " }}
                >
                  <>
  <Form.Check aria-label="option 1"
        id={`default`}
        label={`present`} /> <Form.Check aria-label="option 1" label={`absent`}/>
  
</>
                </Link></div>
                </td>
       
      
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td><div>
      <Link
                  to="/teacher/components/ClassList/ClassListAttendance"
                  style={{ textDecoration: "none", color: "grey " }}
                >
                  <>
  <Form.Check aria-label="option 1"
        id={`default`}
        label={`present`} /> <Form.Check aria-label="option 1" label={`absent`}/>
  
</>
                </Link></div>
                </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td><div>
      <Link
                  to="/teacher/components/ClassList/ClassListAttendance"
                  style={{ textDecoration: "none", color: "grey " }}
                >
                  <>
  <Form.Check aria-label="option 1"
        id={`default`}
        label={`present`} /> <Form.Check aria-label="option 1" label={`absent`}/>
  
</>
                </Link></div>
                </td>
    </tr>
  </tbody>
</Table>
       </div>
    </div>
  </div>
  ) 
}