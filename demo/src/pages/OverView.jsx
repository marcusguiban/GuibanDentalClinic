import { NavbarMUI } from "./Navbar";
import { FooterMUI } from "./Footer";
import React from "react";
import {Typography, Stack, ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";


function Overview() {

    return (
        <>
            <NavbarMUI/>
            <Stack sx={{py: 10, px: 10}}>
            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
                <Typography variant="h3" color={"palevioletred"}>Login Successfull!!</Typography>
                </Stack>

            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
            <Typography variant="h4" color={"palevioletred"}> Get Started on managing your Business by clicking here</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} sx={{py: 2, px: 2}}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Link to={"/patients"}><Button sx={{ color: "White" }}>Patient List</Button></Link>
                    <Link to={"/Dentists"}><Button sx={{ color: "White" }}>Dentist List</Button></Link>
                    <Link to={"/Appointments"}><Button sx={{ color: "White" }}>Upcoming Appointments/ Appointment History</Button></Link>
            </ButtonGroup>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} sx={{py: 2, px: 2}}>
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

export default Overview;