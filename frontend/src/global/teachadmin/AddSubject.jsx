import { TextField, Typography, Grid, MenuItem,Select, FormControl, InputLabel, Button } from '@mui/material'
import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'


function AddSubject() {
    const theState=useSelector((state)=>state.adminReducer)

    const [ sub , setSub ] = useState({
        subName:"",
        course:"",
        sem:"",

    })
    const setSubject=(e)=>{
        const {name,value}=e.target
        setSub({...sub,[name]:value})
    }

    return (
        <div
            style={{
                height: "80%",
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            }}
        >
            <div
                style={{
                    width: "95%",
                    height: "78%",
                    backgroundColor: "",
                    boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
                    padding: "2%",
                }}
            >
                <Typography textAlign={'center'}
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
                >Add Subject</Typography>
                <Grid 
                   container
                   spacing={8}
                
                >
                    <Grid
                        xs={12}
                        md={12}
                        sm={12}
                        lg={12}
                        item
                    >
                        <TextField
                            label="Subject Name"
                            fullWidth
                            variant="standard"
                            name='subName'
                            value={sub.subName}
                            onChange={setSubject}
                        />
                        </Grid>
                        <Grid
                           item
                           xs={6}
                           md={6}
                           xl={6}
                           lg={6}
                        >
                        <FormControl
                            fullWidth
                             
                        >
                        <InputLabel>Select Course</InputLabel>
                          <Select
                             label="Select Course"
                             name='courses'
                             value={sub.courses}
                             onChange={setSubject}
                          >
                          {theState.courses.map((d,k)=>(
                            <MenuItem value={d._id}>{d.course}</MenuItem>
                          ))}
                            



                          </Select>
                         
</FormControl>
                        </Grid>
                        <Grid
                           item
                           xs={6}
                           md={6}
                           xl={6}
                           lg={6}
                        >
                   <FormControl
                            fullWidth
                             
                        >
                        <InputLabel>Select Semister</InputLabel>
                          <Select
                             label="Select Subject" 
                             name='sem'
                             value={sub.sem}
                             onChange={setSubject}
                          >
                         {theState.courses[0].totalSem.map((d,k)=>(
                             <MenuItem  value={d}>{d}</MenuItem>
                         ))}

                            
                          </Select>
               </FormControl>             
                  
                        
                    </Grid>
 
                    <Grid
                       item
                        xs={6}
                        md={6}
                        xl={6}
                        lg={6}
                        textAlign={'center'}
                    >
                     <Button variant='contained' color='error'>Reset</Button>
                    </Grid>

                    <Grid
                       item
                        xs={6}
                        md={6}
                        xl={6}
                        lg={6}
                        textAlign={'center'}  
                    >
                    
                     <Button variant='contained'  color='success' onClick={()=>console.log(sub)}>Add Subject</Button>
                     


                    </Grid>


                </Grid>

            </div>
        </div>

    )
}

export default AddSubject