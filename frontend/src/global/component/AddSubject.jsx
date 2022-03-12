import {
  TextField,
  Typography,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function AddSubject() {
  const theState = useSelector((state) => state.adminReducer);
  const [thesem,setTheSem]=useState([])
 
  const [sub, setSub] = useState({
    subName: "",
    course: "",
    sem: "",
  });
  const setSubject = (e) => {
    const { name, value } = e.target;
    setSub({ ...sub, [name]: value });
  };
  const manageSem=(cid)=>{
   
    theState.courses.map((d)=>{
      if(d._id==cid)
      return setTheSem(d.totalSem)
    })
    

  }


  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "2%",
      }}
    >
      <div
        style={{
          width: "93%",
          height: "78%",
          backgroundColor: "",
          boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
          padding: "4%",
        }}
      >
        <Typography
          textAlign={"center"}
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
          Add Subject
        </Typography>
        <Grid container spacing={10}>
          <Grid xs={12} md={12} sm={12} lg={12} item>
            <TextField
              label="Subject Name"
              fullWidth
              variant="standard"
              name="subName"
              value={sub.subName}
              onChange={setSubject}
            />
          </Grid>
          <Grid item xs={6} md={6} xl={6} lg={6}>
            <FormControl fullWidth>
              <InputLabel>Select Course</InputLabel>
              <Select
                label="Select Course"
                name="course"
                value={sub.course}
                onChange={async(e)=>{setSubject(e);manageSem(e.target.value)}}
                fullWidth
              >
                {theState.courses.map((d, k) => (
                  <MenuItem value={d._id}>{d.course}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6} xl={6} lg={6}>
            <FormControl fullWidth>
              <InputLabel>Select Semester</InputLabel>
              <Select
                label="Select Semester"
                name="sem"
                value={sub.sem}
                onChange={setSubject}
                fullWidth
              >
                {thesem.map((d)=>(
                  <MenuItem value={d}>{d}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} md={6} xl={6} lg={6} textAlign={"center"}>
            <Button variant="contained" color="error" fullWidth>
              Reset
            </Button>
          </Grid>

          <Grid item xs={6} md={6} xl={6} lg={6} textAlign={"center"}>
            <Button
              variant="contained"
              color="success"
              onClick={() => console.log(sub)}
              fullWidth
            >
              Add Subject
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AddSubject;
