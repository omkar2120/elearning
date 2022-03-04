import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Divider } from '@mui/material';
import { Link } from 'react-router-dom'
import { TabScrollButton } from '@mui/material';

const StudNav = () => {
  return (
    <div>
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
              
        
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    </div>
  )
}

export default StudNav