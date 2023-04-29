import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Typography, Box, Button, Stack, Container, TextField } from "@mui/material"
import { NavbarMUI } from "./Navbar";
import { FooterMUI } from "./Footer";
const UserCreate = () => {
  const [user, setUser] = useState({
  });

  const navigate = useNavigate();
  const { token } = useAuth();

  const handleChanged = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const controller = new AbortController();
    let url = `http://localhost:5000/api/register`;

    const requestOptions = {
      signal: controller.signal,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => {navigate('/overview');});

    return () => {
      controller.abort();
    };
  };

  return (
    <>
    <NavbarMUI />
    <Container >

      <Typography variant="h4" sx={{px:5, py:5}} align="center" >Add new User</Typography>
        <Container xs={{pt:10, py:10}}>

        <Box component="form" onSubmit={handleSubmit} >


          <Stack direction={"column"} spacing={8} align="center" sx={{pt:5}}>
              <Stack>
                <Stack direction={"row"} spacing={4} justifyContent={"center"} >
                <TextField helperText="Name" variant="standard" type="text" required  name="name" onChange={handleChanged} value={user.name}/>
                <TextField helperText="Email Address" variant="standard" type="email " required  name="email" onChange={handleChanged} value={user.email}/>
                <TextField helperText="Phone" variant="standard" type="number" name="phone" onChange={handleChanged} value={user.phone}/>
                <TextField helperText="Password" variant="standard" type="password" required  name="password" onChange={handleChanged} value={user.password}/>
                
                </Stack>
                </Stack>
              </Stack>
              <Stack>
              <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{px:5, pt:5, pb:5}}>
              <Button type="submit" value="Save" variant="outlined">Save</Button>
              </Stack>
              
                </Stack>
        </Box>
      
      </Container>
    </Container>
    <FooterMUI />
    </>
  );
};

export default UserCreate;