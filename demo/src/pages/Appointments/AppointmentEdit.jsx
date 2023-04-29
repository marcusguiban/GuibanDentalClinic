import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Typography, Box, Button, Stack, TextField, MenuItem } from "@mui/material"
import { StaticDateTimePicker } from "@mui/x-date-pickers";
import { NavbarMUI } from "../Navbar";
import { FooterMUI } from "../Footer";

const AppointmentEdit = () => {
  const { id } = useParams();
  const [date, setDate] = useState(null);
  const [appointment, setAppointment] = useState({
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
    let url = `http://127.0.0.1:5000/api/appointment/${id}`;

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
      .then((json) => setAppointment(json));

    return () => {
      controller.abort();
    };
  }, []);

  const handleChanged = (e) => {
    setAppointment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:5000/api/appointment`;

    const requestOptions = {
      method: "PUT",
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
        id: id
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() => navigate(`/appointment/${id}`))
      .catch((error) => console.log(error));
  };

  return (
    <>
    <NavbarMUI />
      <Typography variant="h4" sx={{px:5, py:5}} align="center" color={"palevioletred"}>Edit Appointment</Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ px:10, py:10}}>

        <Stack direction={"column"} spacing={8} align="center">
        <Stack direction={"row"} spacing={8} justifyContent={"center"}>
          <Stack irection={"row"} justifyContent={"center"}>
          <StaticDateTimePicker
                 label="Date Picker" 
          renderInput={(params) => <TextField {...params}/>} 
          value={date} 
          onChange={(newValue) => 
          setDate(newValue)} />
          </Stack>

          <Stack>
            <Stack direction={"column"} spacing={4} justifycontent={"center"} >
            <TextField helperText="Patient Name" variant="standard" type="text" required  name="Patient_name" onChange={handleChanged} value={appointment.Patient_name}/>
            <TextField helperText="Branch Location" select variant="standard" type="text" required  name="Branch_location" onChange={handleChanged} value={appointment.Branch_location}>
            <MenuItem value="Carmona">Carmona</MenuItem>

                                <MenuItem value="Molino">Molino</MenuItem>
                                <MenuItem value="Carmona">Carmona</MenuItem>
                                <MenuItem value="Rosario">Rosario</MenuItem>
                                <MenuItem value="Dansmarinas">Dansmarinas</MenuItem>
            </TextField>

            <TextField helperText="Select Doctor" variant="standard" type="text" required  name="doctor" onChange={handleChanged} value={appointment.doctor}/>
            <TextField helperText="Appointment Details" variant="standard" type="text" required  name="appointment_details" onChange={handleChanged} value={appointment.appointment_details}/>
            <Button type="submit" value="Update" variant="outlined" size="large">Update</Button>
            </Stack>
          </Stack>

          </Stack>

</Stack>



      </Box>
      <FooterMUI />
    </>
  );
};

export default AppointmentEdit;
