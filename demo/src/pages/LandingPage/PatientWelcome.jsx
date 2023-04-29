
import React from "react";
import {Typography, Stack, ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { NavbarMUI } from "../Navbar";
import { FooterMUI } from "../Footer";


function PatientWelcome() {

    return (
        <>
            <NavbarMUI />
            <Stack sx={{py: 10, px: 10}}>
            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
                <Typography variant="h3" color={"palevioletred"}>Welcome!!</Typography>
                </Stack>

            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
            <Typography variant="h4" color={"palevioletred"}> Get Started on your delux experience of dental care</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
            <Typography variant="h5" color={"palevioletred"}> Set your first Appointment Here</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
            <Link to={"/appointment/new"}><Button variant="contained" sx={{ color: "White" }}>Set an Appointment</Button></Link>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
            <Typography variant="h6" color={"palevioletred"}> Check out our branches and choose which one is closer to you!</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" >
            <Link to={"/Panapaan"}><Button sx={{ color: "White" }}>Panapaan</Button></Link>
            <Link to={"/Carmona"}><Button sx={{ color: "White" }}>Carmona</Button></Link>
            <Link to={"/Molino"}><Button sx={{ color: "White" }}>Molino</Button></Link>
            <Link to={"/Dasmarinas"}><Button sx={{ color: "White" }}>Dasmarinas</Button></Link>
            <Link to={"/Rosario"}><Button sx={{ color: "White" }}>Rosario</Button></Link>

            </ButtonGroup>
            </Stack>
            </Stack>

        
            <FooterMUI />
        </>

    )
}

export default PatientWelcome;