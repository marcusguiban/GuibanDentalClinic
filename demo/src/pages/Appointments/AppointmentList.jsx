import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, Container, Stack, Typography } from "@mui/material"
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { NavbarMUI } from "../Navbar";
import { FooterMUI } from "../Footer";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    let url = "http://localhost:5000/api/appointment";

    const requestOptions = {
      signal: controller.signal,
      method: "GET"

    };

    setLoading(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setAppointments(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
    
    <NavbarMUI />
    <Container sx={{py:10}}>
    <Typography variant="h4" align="center" color={"palevioletred"}> Upcoming Appointments</Typography>

      {loading ? (
        <Typography variant="h6" align="center"> Loading...</Typography>
      ) : (
        <Container sx={{py:10}}>

          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell >Patient Name</TableCell>
            <TableCell >Date and Time</TableCell>
            <TableCell >Branch Location</TableCell>
            <TableCell >Doctor Appointed</TableCell>
            <TableCell >Appointment Details</TableCell>
            <TableCell >Views</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{appointment.Patient_name}</TableCell>
              <TableCell >{format(new Date(appointment.date_time), "yyyy-MM-dd hh:mm a" )}</TableCell>
              <TableCell >{appointment.Branch_location}</TableCell>
              <TableCell >{appointment.doctor}</TableCell>
              <TableCell >{appointment.appointment_details}</TableCell>
              <TableCell >
              <Link to={`/appointment/${appointment._id}`} style={{ color: 'pink'}}><VisibilityIcon /></Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{mx:5, my:5}}>
      <Link to="/appointment/new">
    <Button variant="outlined" color="secondary">Add New Appointment</Button>
      </Link>
            </Stack>
    
        </Container>
      )}
    </Container>
    <FooterMUI />
    </>
  );
};

export default AppointmentList;