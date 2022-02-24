import React,{ useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Input } from '@mui/material';
import Navbar from '../../global/component/Navbar';

const AdminLogin = () => {
  return (
    <div style={{backgroundImage:'url()',
    height:'85vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }}>    
    <Navbar />
      <Grid container component="main"
         sx={{}} style={{ 
         marginTop:'15vh'  ,
        //  height:'100vh',
        //  backgroundImage:'url(https://cdn.edu.buncee.com/assets/f395f8cf0aa7016cb54541cd59725ea1/background-professional-layer-4-032420-2.jpg?timestamp=1585083327)',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
       }}>

    <CssBaseline />
    <Grid
      item
      sm={4}
      md={5}
      height={350}
      marginLeft={25}
      
      sx={{
        backgroundImage:'url(https://www.igexsolutions.com/wp-content/themes/igexsolutions-child/assets/images/webdevelopment.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }} // | second div
    />
    <Grid  xs={10}  sm={4} md={4} component={Paper} elevation={8} square style={{boxShadow:'none', }}>
    <Typography style={{fontFamily:'Quicksand,sans-serif', fontSize:'30px',marginLeft:'100px'}}>Welcome Back </Typography>
    <Typography style={{fontFamily:'Quicksand,sans-serif', fontSize:'31px', marginLeft:'150px'}}>Admin </Typography>

      <Box
        sx={{
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
       
        <Box component="form"  sx={{ mt: 0 , alignItems:'center'}}>
        
         <Input
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            disableUnderline={true}
            sx={{textDecoration:'none', border:'1px solid grey', borderRadius:'50px', height:'10vh',marginTop:'20px'}}
            placeholder='Enter Email id'
           
         />

         <Input
            required
            fullWidth
            id="password"
            name="password"
            autoComplete="off"
            autoFocus
            disableUnderline={true}
            sx={{ textDecoration:'none', border:'1px solid grey', borderRadius:'50px', height:'10vh',marginTop:'20px'}}
            placeholder='Password'
           
         />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 5, mb: 2, borderRadius:'10vh' }}
          >
            LogIn
          </Button>
        </Box>
      </Box>
    </Grid>
  </Grid>
  </div>
  )
}

export default AdminLogin;