import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import OTPInput, { ResendOTP } from "otp-input-react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RefreshIcon from '@mui/icons-material/Refresh';
import Navbar from '../../global/component/Navbar';
import { height } from '@mui/system';

const StudLogin = () => {
  return (
    <div>
    <Navbar/>
        <Grid container component="main" sx={{   padding:'10vh',marginTop:'5vh'}} style={{ width:'250vh',justifyContent:'center'}}>
        <CssBaseline />
        <Grid
          item
          sm={4}
          md={6}
          height={350}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundImage:'url(https://www.igexsolutions.com/wp-content/themes/igexsolutions-child/assets/images/webdevelopment.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
        />
        <Grid item xs={10}  sm={8} md={3.9} height={350} component={Paper} elevation={6} square style={{boxShadow:'none', }}>
            <Typography style={{ textAlign:'center', fontWeight:'800',fontFamily:'Quicksand,sans-serif', fontSize:'25px', marginTop:'2vh' }}>Student Login</Typography>
            <Typography style={{ fontSize:'13px', textAlign:'center',fontFamily:'Quicksand,sans-serif' }}>Enter Your Credential to access the platform</Typography>
          <Box
            sx={{
              my: 1,
              mx: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
               
            }}
          >
         
            <Box component="form"  sx={{ mt: 0 }}>
             <Box sx={{display:'flex'}}>
              <TextField
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                borderRadius='10vh'
              />
                 <Button 
                   variant='contained'
                   style={{
                       width:'15vh',
                       marginLeft:'5vh', 
                       borderRadius:'20px',
                       height:'8vh',
                       marginTop:'4.9vh'
                       }}
                       >Send
                </Button>  
                </Box>

              <div style={{ textAlign:'center'}}>
              <OTPInput OTPLength={4} OTPType={Number} style={{margin:'3vh',marginLeft:'11vh'}} />
               <Button variant='contained' style={{ borderRadius:'20px', marginRight:'2vh', height:'7vh'}}><CheckCircleIcon/>Verified</Button>
               <Button variant='contained' style={{ borderRadius:'20px', backgroundColor:'#D8240F',height:'7vh'}}><RefreshIcon/>Resend</Button>

              </div>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 5, mb: 2, borderRadius:'10vh', width:'35vh',marginLeft:'13vh' }}
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



export default StudLogin;

