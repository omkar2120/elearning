import React, { useState } from "react";
import { Button, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
const count=["First","Second","Third","Fourth","Fiveth","sixth","Seventh","Eighth","Nineth","Tenth"]
export default function AddTopic() {

    const [subtopic,setSubtopic]=useState([])
    const theState=useSelector((state)=>state.adminReducer)
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
          minHeight: "78%",
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
          Add Topic
        </Typography>
        <Grid container spacing={8}>
            <Grid item md={12} sm={12} xl={12} style={{marginTop:"10px"}}>
                <TextField label="Topic Name" variant="standard" fullWidth></TextField>

            </Grid>
            <Grid item  md={6} sm={6} xl={6}>
                <FormControl fullWidth>
                    <InputLabel>Select Subject</InputLabel>
                <Select fullWidth label="Select Subject">
                    {theState.courses.map((d)=>(
                    <MenuItem value={d._id}>
                   {d.course}
                    </MenuItem>

                    ))}
                    
                </Select>
                </FormControl>
            </Grid>
            <Grid item  md={6} sm={6} xl={6}>
                <FormControl fullWidth>
                    <InputLabel>Select No Of SubTopic</InputLabel>
                <Select fullWidth label="Select No Of SubTopic" defaultValue={0} onChange={(e)=>{const dataToSet=[];
                for(let i=0;i<e.target.value;i++){
                    dataToSet.push(count[i])
                }
               setSubtopic(dataToSet)}}> 
               <MenuItem value="0">
                    0
                    </MenuItem>
                    <MenuItem value="1">
                    1
                    </MenuItem>
                    <MenuItem value="2">
                    2
                    </MenuItem>
                    <MenuItem value="3">
                    3
                    </MenuItem>
                    <MenuItem value="4">
                    4
                    </MenuItem>
                    <MenuItem value="5">
                    5
                    </MenuItem>
                    <MenuItem value="6">
                    6
                    </MenuItem>
                    <MenuItem value="7">
                    7
                    </MenuItem>
                    <MenuItem value="8">
                    8
                    </MenuItem>
                    <MenuItem value="9">
                    9
                    </MenuItem>
                </Select>
                </FormControl>
            </Grid>
            
            <Grid item  md={12} sm={12} xl={12}>
              {subtopic.map((d,k)=>(
                  <TextField label={`1.${k} ${d} SubTopic`} fullWidth variant="standard" style={{marginBottom:"20px"}}></TextField>
              ))}
              </Grid>
                 
           
            <Grid item  md={6} sm={6} xl={6}>
               <Button variant="contained" color="error" fullWidth>Reset</Button>
            </Grid>
            <Grid item  md={6} sm={6} xl={6}>
               <Button variant="contained" color="success" fullWidth>Add Topic</Button>
            </Grid>
            

        </Grid>
      </div>
    </div>
  );
}
