import React,{useState} from "react";
import { useSelector,useDispatch} from "react-redux"
// import { createTeacher } from "../../redux/action/admin/Teacher";
import { CircularProgress,Grid, Button, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
export default function AddTeacher() {
  const [teacher,setTeacher]=useState({
    fullname:"",
    email:"",
    mobile:"",
    password:"",
    course:"",
    gender:"",
    role:"teacher"
  })
  const handleChanege=(e)=>{
    let {name,value}=e.target;
    setTeacher({...teacher,[name]:value})
  }
  const sendData=async()=>{
    // console.log(teacher)
  }
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        className="a-t-c-m"
        style={{
          width: "95%",
          height: "70%",
          backgroundColor: "",
          boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
          padding: "2%",
        }}
      >
        <Typography
          component="h3"
          variant="h3"
          style={{
            textAlign: "center",
            wordSpacing: "7px",
            textTransform: "uppercase",
            fontSize: "28px",
            fontWeight: "bolder",
            color: "#060606",
          }}
        >
          Add Teacher
        </Typography>
        <Grid container spacing={3}>
          <Grid item md="12" lg="12" style={{ marginTop: "3%" }}>
            <TextField onChange={handleChanege} name="fullname" value={teacher.fullname} label="Enter full Name" variant="standard" fullWidth />
          </Grid>
          <Grid item lg="6" md="12">
            <TextField
            onChange={handleChanege}
            name="email"
             value={teacher.email}
              margin="normal"
              label="Email"
              variant="standard"
              fullWidth
              style={{ color: "black", fontWeight: "bold" }}
            />
          </Grid>
          <Grid item lg="6" md="12">
            <TextField
            onChange={handleChanege} 
            name="mobile"
            value={teacher.mobile}
              margin="normal"
              label="Mobile"
              variant="standard"
              fullWidth
              style={{ color: "black", fontWeight: "bold" }}
            />
          </Grid>
          <Grid item lg="6" md="6" style={{marginTop:"3%"}}>
              <FormControl fullWidth>
                  <InputLabel>select course</InputLabel>
          <Select label="select course" onChange={handleChanege} name="course" id="demo-simple-select">
              <MenuItem >""</MenuItem>
              
          </Select>
          </FormControl>
          </Grid>
          <Grid item lg="6" md="6" style={{marginTop:"3%"}}>
              <FormControl fullWidth>
                  <InputLabel>select gender</InputLabel>
          <Select label="select gender" onChange={handleChanege} name="gender" id="demo-simple-select">
              <MenuItem value="male"> male</MenuItem>
              <MenuItem value="female"> female</MenuItem>
              <MenuItem value="other"> other</MenuItem>
          </Select>
          </FormControl>
          </Grid>
          <Grid item lg="6" md="12" style={{marginTop:"3%"}}><Button fullWidth variant='contained' color="error" >clear</Button></Grid>
    <Grid item lg="6" md="12" style={{marginTop:"3%"}}>
      <Button fullWidth variant='contained' color="success" onClick={sendData}>Add Teacher</Button>
      </Grid>
    <Grid item lg="12" md="12" style={{marginTop:"0"}}>
      {/* <b style={{color:"red",fontSize:"20px"}}>{!teacherState.err?"":teacherState.err}</b> */}
    </Grid>

        </Grid>
      </div>
    </div>
  );
}
