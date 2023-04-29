import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Typography, Box, Button, Stack, Container, TextField } from "@mui/material"
import { FooterMUI } from "../Footer";
import { NavbarMUI } from "../Navbar";
const PatientCreate = () => {
  const [patient, setPatients] = useState({
    first_name: "",
    middleName: "",
    lastName: "",
    age: 0,
    email: "",
    contactNumber: "",
    id: 0,
  });

  const navigate = useNavigate();
  const { token } = useAuth();

  const handleChanged = (e) => {
    setPatients((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const controller = new AbortController();
    let url = `http://localhost:5000/api/patients`;

    const requestOptions = {
      signal: controller.signal,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        first_name: patient.first_name,
        middle_name: patient.middle_name,
        last_name: patient.last_name,
        age: patient.age,
        email: patient.email,
        contact_number: patient.contact_number,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => {navigate('/WelcomePatient');});

    return () => {
      controller.abort();
    };
  };

  return (
    <>
    <NavbarMUI />
    <Container >

    <Typography variant="h4" sx={{px:5, py:5}} align="center" color={"palevioletred"}>Add new Patient</Typography>
      <Container xs={{pt:10, py:10}}>

      <Box component="form" onSubmit={handleSubmit} >


        <Stack direction={"column"} spacing={8} align="center" sx={{pt:5}}>
            <Stack>
              <Stack direction={"row"} spacing={4} justifyContent={"center"} >
              <TextField helperText="First Name" variant="standard" type="text" required  name="first_name" onChange={handleChanged} value={patient.first_name}/>
              <TextField helperText="Middle Name" variant="standard" type="text" name="middle_name" onChange={handleChanged} value={patient.middle_name}/>
              <TextField helperText="Last Name" variant="standard" type="text" required  name="last_name" onChange={handleChanged} value={patient.last_name}/>
              </Stack>
            </Stack>
            <Stack>
              <Stack direction={"row"} spacing={4} justifyContent={"center"} >
              <TextField helperText="Age" variant="standard" type="number" required  name="age" onChange={handleChanged} value={patient.age}/>
              <TextField helperText="Contact Number" variant="standard" type="number" required  name="contact_number" onChange={handleChanged} value={patient.contact_number}/>
              <TextField helperText="Email Address" variant="standard" type="email " required  name="email" onChange={handleChanged} value={patient.email}/>
              </Stack>
            </Stack>
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

export default PatientCreate;