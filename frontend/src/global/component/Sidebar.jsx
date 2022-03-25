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

export default function Sidebar({ sidebar, setSidebar, list }) {
  const [dropdown, setDropdown] = useState({
    isOpen: false,
    key: false,
  });
  const userState = useSelector((state) => state.adminReducer);
  return (
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
            <Button  variant='outlined' sx={{borderRadius:'50px', height:'40px',width:'115px' }} >Logout </Button>
            </div>

        </div>
      </div>
    </div>
  );
}
