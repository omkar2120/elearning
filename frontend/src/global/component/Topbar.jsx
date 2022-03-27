import React, { useState } from 'react'
import "./Topbar.css"
import img from "../../global/component/Avtar2.jpg";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ListItem } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Topbar() {    //admin topbar

    const adminLogout = () => {
        Cookies.remove('e-learningadmintoken')
        window.location.href = "/"
    }

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">DashBoard</span>
                </div>
                <div className="topRight">

                    {/* <img src="https://images.pexels.com/photos/8730980/pexels-photo-8730980.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8730980.jpg&fm=jpg" alt="" className="pr" /> */}
                    <Toolbar sx={{ display: "flex", justifyContent: 'right', width: "100%", marginTop: '5px' }}>
                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <img src={img} height={65} width={65} style={{ borderRadius: '50px' }}>

                                </img>
                            </IconButton>
                            <Menu
                                PaperProps={{
                                    style: {
                                        width: 150,
                                    },
                                }}
                                sx={{ mt: '45px' }}
                                id="menu-appbar"

                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem>
                                    <ListItem onClick={adminLogout}>Logout</ListItem>

                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>




                </div>
            </div>
        </div>
    )
}
