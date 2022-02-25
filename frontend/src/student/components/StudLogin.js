import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OTPInput, { ResendOTP } from "otp-input-react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RefreshIcon from "@mui/icons-material/Refresh";
import Navbar from "../../global/component/Navbar";
import { display } from "@mui/system";
import { FormControl, FormLabel } from "@mui/material";
const TeachLogin = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 9%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Grid
          container
          component="main"
          style={{
            width: "70%",
            justifyContent: "center",
            boxShadow: "rgba(100, 100, 111, 0.322) 0px 7px 29px 0px",
            minHeight: "65%",
          }}
        >
          <CssBaseline />
          <Grid
            item
            sm={6}
            md={6}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundImage:
                "url(https://www.igexsolutions.com/wp-content/themes/igexsolutions-child/assets/images/webdevelopment.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0.01px solid black",
            }}
          />
          <Grid
            item
            sm={6}
            md={6}
            component={Paper}
            elevation={6}
            square
            style={{ boxShadow: "none", padding: "3%" }}
          >
            <Typography
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                fontWeight: "800",
                fontFamily: "Quicksand,sans-serif",
                fontSize: "25px",
                marginBottom: "2%",
              }}
            >
              Student Login
            </Typography>

            <Grid container spacing={2}>
              {/* <Grid item sm={12} md={12} xl={12} style={{marginTop:"8%"}}>
              <TextField
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                fullWidth
              />
              </Grid>
              <Grid item sm={12} md={12} xl={12} left="30%">
                <div style={{width:"100%",display:"flex",justifyContent:"right"}}>
                 <Button 
                   variant='contained'
                   style={{
                       borderRadius:'20px'
                       }}
                       >Send Otp
                </Button> 
                </div>
                </Grid> */}
              <Grid item sm={12} md={12} xl={12} textAlign="center">
                <h3>OTP has been sent to your mobile number 917700838900 <Button variant="text">change</Button></h3>
              </Grid>
              <Grid item sm={12} md={12} xl={12} marginTop="2%">
                <div
                  style={{
                    display: "flex",
                    alighItem: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <OTPInput OTPLength={4} value={1234} OTPType={Number} />
                </div>
              </Grid>
              <Grid item sm={6} md={6} xl={6} marginTop="5%">
                <Button
                  variant="contained"
                  style={{ borderRadius: "20px", backgroundColor: "#D8240F" ,marginLeft:"30%" }}
                >
                  <RefreshIcon />
                  Resend
                </Button>
              </Grid>
              <Grid item sm={6} md={6} xl={6} marginTop="5%">
                <Button variant="contained" style={{ borderRadius: "20px" }}>
                  <CheckCircleIcon />
                  Verified
                </Button>
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TeachLogin;
