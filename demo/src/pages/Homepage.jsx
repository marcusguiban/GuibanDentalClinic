import { Button, Container, Stack, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../Images/img2.png"
import info_img from "../Images/info-img.jpg"
import info_img2 from "../Images/info-img2.jpg"
import info3 from "../Images/info3.jpg";
import info4 from "../Images/info4.jpg";
import info5 from "../Images/info5.jpg";
import info6 from "../Images/info6.jpg";

import clinic2 from "../Images/clinic2.jpg";
import clinic3 from "../Images/clinic 3.jpg";
import clinic4 from "../Images/clinic4.jpg";
import clinic5 from "../Images/clinic5.jpg";
import clinic6  from "../Images/clinic6.jpg"
import doctorsAll from "../Images/doctorsAll.jpg";


import { Link } from "react-router-dom";
import { NavbarMUI } from "./Navbar";
import { FooterMUI } from "./Footer";



const Homepage = () => {
    return (
<>
<NavbarMUI />
<Container sx={{px:10, py:10}}>
        <Stack direction="column" justifyContent={"center"} >
            <Stack  direction="row" sx={{pb:2}}>
            <img src={img1} className="img1" alt="logo"></img>
            </Stack>

            <Stack  direction="row" spacing={2} >
            <Grid container spacing={2}>

                <Grid item  sm={12} md={6} lg={6}>
                    <img src={doctorsAll} className="img1" alt="post"></img>
                </Grid>
                <Grid item  sm={12} md={6} lg={6}>
                    <img src={clinic2} className="img1" alt="post"></img>
                </Grid>
                <Grid item  sm={12} md={6} lg={6}>
                    <img src={clinic3} className="img1" alt="post"></img>
                </Grid>
                <Grid item  sm={12} md={6} lg={6}>
                    <img src={clinic6} className="img1" alt="post"></img>
                </Grid>
                <Grid item  sm={12} md={6} lg={6}>
                    <img src={clinic4} className="img1" alt="post"></img>
                </Grid>
                <Grid item  sm={12} md={6} lg={6}>
                    <img src={clinic5} className="img1" alt="post"></img>
                </Grid>

            </Grid>
            </Stack>
            <Stack direction="row" justifyContent={"center"} sx={{mx:5, my:5}} color={"palevioletred"} ><Typography variant="h2" > Pick a Branch near You!
                </Typography></Stack>
            <Stack direction="row" spacing={5} justifyContent={"center"} sx={{mx:5, my:5}}>
            <Grid container spacing={2}>
                <Grid item  sm={12} md={6} lg={3}>
                    <Stack direction="row" justifyContent={"center"}>
                        <Link to="/Panapaan"><Button justifycontent="center" size="lg" variant="outlined" color="secondary">Panapaan</Button></Link>
                    
                    </Stack>

                </Grid>
                <Grid item  sm={12} md={6} lg={2}>
                    <Stack direction="row" justifyContent={"center"}>
                    <Link to="/Molino"><Button size="lg" variant="outlined" color="secondary" >Molino</Button></Link>
                    </Stack>
                </Grid>
                <Grid item  sm={12} md={6} lg={3}>

                <Stack direction="row" justifyContent={"center"}>
                <Link to="/Dasmarinas"><Button size="lg" variant="outlined" color="secondary" >Dasmarinas</Button></Link>
                </Stack>
                </Grid>
                <Grid item  sm={12} md={6} lg={2}>
                <Stack direction="row" justifyContent={"center"}>
                <Link to="/Rosario"><Button size="lg" variant="outlined" color="secondary">Rosario</Button></Link>
                </Stack>
                </Grid>
                <Grid item  sm={12} md={6} lg={2}>
                <Stack direction="row" justifyContent={"center"}>
                <Link to="/Carmona"><Button size="lg" variant="outlined" color="secondary">Carmona</Button></Link>
                </Stack>
                </Grid>
            </Grid>
        
            </Stack>
     
        <Stack  direction="row" spacing={2} >
            <Grid container spacing={2}>
                <Grid item  sm={12} md={6} lg={4}>
                    <img src={info_img} className="img1" alt="post"></img>
                </Grid>
                <Grid item  sm={12} md={6} lg={4}>
                    <img src={info_img2} className="img1" alt="post"></img>
                </Grid>
                <Grid item  sm={12} md={6} lg={4}>
                    <img src={info3} className="img1" alt="post"></img>
                </Grid>
            </Grid>
            </Stack>
            
        <Grid container spacing={2}>
                <Grid item  sm={12} md={6} >

                    <Stack direction="row" justifyContent={"center"} sx={{mx:5, my:5}}>
                        <Typography variant="h5" color={"palevioletred"}>New Patient on Guiban Dental Clinic?</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent={"center"} sx={{mx:5, my:5}}>
                        <Link to="/patient/new"><Button size="lg" variant="outlined" color="secondary" > Register </Button></Link>
                    </Stack>
                    
                </Grid>
                <Grid item  sm={12} md={6} >
                <Stack direction="row" justifyContent={"center"} sx={{mx:5, my:5}}>
                <Typography variant="h5" color={"palevioletred"} justifycontent={"center"}>If you want to be a part of Guiban Dental Clinic Family, Apply here!</Typography>
                </Stack>
                <Stack direction="row" justifyContent={"center"} sx={{mx:5, my:5}}>
                <Link to="/dentists/new"><Button size="lg" variant="outlined" color="secondary"> Register </Button></Link>
                </Stack>
                </Grid>
            </Grid>
            <Stack  direction="row" spacing={2} >
            <Grid container spacing={2}>
                <Grid item  sm={12} md={6} lg={4}>
                    <img src={info4} className="img1" alt="post"></img>
                </Grid>
                <Grid item  sm={12} md={6} lg={4}>
                    <img src={info6} className="img1" alt="post"></img>
                </Grid>
                <Grid item  sm={12} md={6} lg={4}>
                    <img src={info5} className="img1" alt="post"></img>
                </Grid>
            </Grid>
            </Stack>
        </Stack>
    </Container>
<FooterMUI/>
</>

    
        



    );
};

export default Homepage;