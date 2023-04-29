
import React from "react";
import {Typography, Stack, ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { NavbarMUI } from "../Navbar";
import { FooterMUI } from "../Footer";


function DentistWelcome() {

    return (
        <>
            <NavbarMUI />
            <Stack sx={{py: 10, px: 10}}>
            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
                <Typography variant="h3" color={"palevioletred"}>Welcome!!</Typography>
                </Stack>

            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
            <Typography variant="h4" color={"palevioletred"}> You are one step closer to being a part of Guiban Dental Clinic </Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
            <Typography variant="h5" color={"palevioletred"}> Please send your Resume at GuibanDentalClinic@GDC.com / GuibanDentalClinic@gmail.com</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
            <Typography variant="h5" color={"palevioletred"}> Or you can contact us at 0956-5423-123 / 0956-5423-123</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} sx={{py: 4, px: 4}}>
            <Typography variant="h5" color={"palevioletred"}> We will contact you regarding your Application via Phone call/Email</Typography>
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

export default DentistWelcome;