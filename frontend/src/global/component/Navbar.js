import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, CssBaseline, Divider } from '@mui/material';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
         <CssBaseline/>
           <AppBar position="fixed" color='inherit'  sx={{boxShadow:0, justifySelf:'flex-start'}}>
             <Toolbar>
               <Typography variant="h6" sx={{ flexGrow: 3 }}>
                ELearning
              </Typography>
              <Toolbar sx={{flexGrow:15, justifyContent:'space-evenly'}}>
                <Typography>Hello</Typography>
                <Typography>Hello</Typography>
                <Typography>Hello</Typography>
              </Toolbar>
                 
              <Divider orientation="vertical" variant="middle" flexItem sx={{height:'20px', marginTop:'23px'}} />

             <Toolbar sx={{ justifySelf:'flex-end'}}>
               <Button color="inherit" variant='outlined' sx={{borderRadius:7 , marginRight:'10px'}}>Teacher Login</Button>
            <Link to="/studlogin"><Button variant='contained' sx={{borderRadius:7 , color:'#fafafa',textDecoration:'none'}}>Student Login </Button></Link>
             </Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar;