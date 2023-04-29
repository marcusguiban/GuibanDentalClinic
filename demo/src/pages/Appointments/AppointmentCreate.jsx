import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Typography, Box, Button, Stack, Container, TextField, MenuItem} from "@mui/material";

import { StaticDateTimePicker } from "@mui/x-date-pickers";
import { NavbarMUI } from "../Navbar";
import { FooterMUI } from "../Footer";



const AppointmentCreate = () => {
  const [appointment, setAppointment] = useState({});
  const [date, setDate] = useState(null);
  console.log(date);


  const navigate = useNavigate();
  const { token } = useAuth();

  const handleChanged = (e) => {
    setAppointment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const controller = new AbortController();
    let url = `http://localhost:5000/api/appointment`;

    const requestOptions = {
      signal: controller.signal,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        Patient_name: appointment.Patient_name,
        date_time: date,
        Branch_location: appointment.Branch_location,
        doctor: appointment.doctor,
        appointment_details: appointment.appointment_details,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => {navigate(`/appointments`);});

    return () => {
      controller.abort();
    };
    
  };
  return (
    <>
<NavbarMUI />
    <Container >

      <Typography variant="h4" sx={{px:5, py:5}} align="center" >Add new Appointment</Typography>

        <Container xs={{pt:10, py:10}}>
        <Box component="form" onSubmit={handleSubmit} >
          <Stack direction={"column"} spacing={8} align="center" sx={{mt:10}}>
          <Stack direction={"row"} spacing={8} justifyContent={"center"}>
            <StaticDateTimePicker
                 label="Date Picker" 
          renderInput={(params) => <TextField {...params}/>} 
          value={date} 
          onChange={(newValue) => 
          setDate(newValue)} />
                <Stack direction={"column"} spacing={4} justifyContent={"center"} >  
                <TextField helperText="Patient Name" variant="standard" type="text" required  name="Patient_name" onChange={handleChanged} value={appointment.Patient_name}/>
                <TextField helperText="Select Location" select variant="standard" type="text" required  name="Branch_location" onChange={handleChanged} value={appointment.Branch_location}>
                                <MenuItem value="Carmona">Carmona</MenuItem>
                                <MenuItem value="Molino">Molino</MenuItem>
                                <MenuItem value="Carmona">Carmona</MenuItem>
                                <MenuItem value="Rosario">Rosario</MenuItem>
                                <MenuItem value="Dansmarinas">Dansmarinas</MenuItem>
                            </TextField>
                <TextField helperText="Select Doctor" variant="standard" type="text" required  name="doctor" onChange={handleChanged} value={appointment.doctor}/>
                <TextField helperText="Appointment Details" variant="standard" type="text" required  name="appointment_details" onChange={handleChanged} value={appointment.appointment_details}/>      
                </Stack>
              </Stack>
              <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{px:5, pb:10, pt:5}}>
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

export default AppointmentCreate;





