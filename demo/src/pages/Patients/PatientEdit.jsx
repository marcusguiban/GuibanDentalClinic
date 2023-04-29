import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Typography, Box, Button, Stack, TextField } from "@mui/material"
import { NavbarMUI } from "../Navbar";
import { FooterMUI } from "../Footer";

const PatientEdit = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState({
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

  useEffect(() => {
    let url = `http://127.0.0.1:5000/api/patients/${id}`;

    const controller = new AbortController();

    const requestOptions = {
      method: "GET",
      headers: {
        signal: controller.signal,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => setPatient(json));

    return () => {
      controller.abort();
    };
  }, []);

  const handleChanged = (e) => {
    setPatient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:5000/api/patients`;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        first_name: patient.first_name,
        middle_name: patient.middle_name,
        last_name: patient.last_name,
        age: patient.age,
        email: patient.email,
        contact_number: patient.contact_number,
        id: id
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => navigate(`/patients/${id}`))
      .catch((error) => console.log(error));
  };

  return (
    <>
    <NavbarMUI />
      <Typography variant="h4" sx={{px:5, py:5}} align="center">Edit Patient</Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ px:10, py:10}}>
<Stack direction={"column"} spacing={8} align="center">
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
          <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{px:5, pb:10, pt:5}}>
          <Button type="submit" value="Update" variant="outlined" size="large">Update</Button>
          </Stack>
</Stack>
      </Box>
      <FooterMUI />
    </>
  );
};

export default PatientEdit;
