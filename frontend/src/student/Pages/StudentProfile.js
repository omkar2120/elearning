import React from 'react'
import { CircularProgress, Grid, Button, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import img from "../../global/component/Avtar2.jpg";
import { width } from '@mui/system';
import { Link } from 'react-router-dom';

const StudentProfile = () => {
    return (
        <div>
            <div
                style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <div
                    style={{
                        height: "78%",
                        backgroundColor: "",
                        boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
                        padding: "2%",
                        marginTop: '50px',
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
                            marginTop: '10px',

                        }}
                    >
                        Student Information
                    </Typography>
                    <Grid>
                        <img src={img} height={200} width={200} style={{ borderRadius: '50%', marginLeft: '25%', marginTop: '20px' }} >

                        </img>
                    </Grid>
                    <Grid m={5}>
                        <div style={{ display: "flex" }}>
                            <Typography
                                fontSize={25}
                            > Fullname :
                            </Typography>
                            <Typography
                                fontSize={25}
                                marginLeft={1}
                            >
                                Anshika Madan
                            </Typography>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Typography fontSize={25} >
                                Mobile No :
                            </Typography>
                            <Typography fontSize={25} marginLeft={1}>
                                1234567890
                            </Typography>

                        </div>
                        <div style={{ display: 'flex' }}>
                            <Typography fontSize={25} >
                                Gender:
                            </Typography>
                            <Typography fontSize={25}
                                marginLeft={1}>
                                Female
                            </Typography>

                        </div>

                    </Grid>
                    <Link to="/">
                        <Button variant='contained' sx={{ borderRadius: '50px', backgroundColor: '#5913B0', height: '40px', width: '115px' }} >Back</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default StudentProfile;