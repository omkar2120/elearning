import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./Sidebar.css";
import img from "./Avtar2.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { ThemeProvider, createTheme } from "@mui/material";

export default function Sidebar({ sidebar, setSidebar, list }) {


  const studentLogout = () => {
    Cookies.remove('e-learningadmintoken')
    Swal.fire("Success","Student Logout succesffully ")
    window.location.href='/studlogin';


  }

  const theme = createTheme({
    typography:{
      fontFamily: 'Raleway, Arial',
    }
  })
  const [dropdown, setDropdown] = useState({
    isOpen: false,
    key: false,
  });
  const userState = useSelector((state) => state.adminReducer);
  return (
    <ThemeProvider theme={theme}>
    <div className={sidebar ? "sideBarMain" : "sideBarNone"} >
      <div
        onClick={() => {
          setSidebar(!sidebar);
        }}
      ></div>
      <div className="sidebarContentContainer">
      <Link to="/student/dashboard/profile" style={{textDecoration:'none'}}>
        <div className="profileContainer" style={{marginTop:"4%"}}>
          <div className="dp">
            <img src={img} />
          </div>
          <div className="dpDetails">
            <div className="dpDetailsName" style={{marginTop:"5%"}}>
              <h5>{userState.users.fullname}</h5>
            </div>
            <div className="dpDetailsClass" style={{padddingBottom:"15%"}}>
              <b style={{ color: "red" }}>{userState.courses.cName}</b>
            </div>
          </div>
          </div>
          </Link>
          <div className="listContainer" style={{}}>
            <List>
              {list.map((d, k) => (
                <>
                  <NavLink to={!d.path?"#":d.path} style={{textDecoration: 'none',color:"#141414"}}>
                  <ListItem
                    button
                    style={{
                      fontSize: "30px",
                      marginTop: "15px",
                      width: "100%",
                    }}
                    onClick={()=>{
                      if(d.dropdown.length>0){
                        setDropdown({ isOpen:!dropdown.isOpen, key: k });
                    }}}
                  >
                    <ListItemIcon>{d.icon}</ListItemIcon>
                    <ListItemText>{d.list}</ListItemText>
                  </ListItem>
                  </NavLink>

                  <List className={dropdown.isOpen&&dropdown.key==k?"":"none"}>
                    {d.dropdown.map((drop) => (
                      <NavLink to={drop.link} style={{textDecoration: 'none',color:"#141414"}}>
                      <ListItem button
                      style={{
                        fontSize: "30px",
                        marginTop: "30px",
                        width: "100%",
                        paddingLeft:"20%"
                      }}>
                        <ListItemIcon>{drop.icon}</ListItemIcon>
                        <ListItemText>{drop.name}</ListItemText>
                      </ListItem>
                      </NavLink>
                      
                    ))}
                  </List>
                </>
              ))}
            </List>
            <div style={{display:"flex" ,justifyContent:"left"}}>
            {/* <Button variant="contained" color="error">LogOut</Button> */}
            <Button  variant='outlined' onClick={studentLogout} sx={{borderRadius:'50px', height:'40px',width:'115px' }} >Logout </Button>
            </div>

        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}
