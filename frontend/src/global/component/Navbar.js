import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Divider } from '@mui/material';
import { Link } from 'react-router-dom'
import { TabScrollButton } from '@mui/material';
const Navbar = () => {
  return (
    <div style={{height:"9%"}}>
         <Box sx={{ flexGrow: 1  }} >
         <CssBaseline/>
           <AppBar position="fixed" color='inherit'  sx={{boxShadow:0, justifySelf:'flex-start'}}>
             <Toolbar>
             <Link to="/" style={{textDecoration:'none'}}>
               <Typography variant="h6" sx={{ flexGrow: 3 }}>
                ELearning
              </Typography>
              </Link>
              
             <Toolbar sx={{display:"flex", justifyContent:'right' ,width:"100%"}}>
          <Link to="/teachlogin" style={{textDecoration:'none', marginRight:'2%'}}><Button color="inherit" variant='outlined' sx={{borderRadius:'50px'}} >Teacher</Button></Link>
            <Link to="/studlogin" style={{ textDecoration:'none'}}><Button  variant='contained' sx={{borderRadius:'50px', backgroundColor:'blue'}} >Student </Button></Link>
            <TabScrollButton><Button>Admin</Button>
            <Button>Admin</Button></TabScrollButton>
             </Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar;