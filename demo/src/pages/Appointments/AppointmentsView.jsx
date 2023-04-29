import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Typography, Box, Button, Stack, Container } from "@mui/material"
import { NavbarMUI } from "../Navbar";
import { FooterMUI } from "../Footer";


const AppointmentView = () => {
  const { id } = useParams();
  const [appointment, setAppointments] = useState({
    date: "",
    time: "",
    Branch_location: "",
    doctor: "",
    appointment_details: "",
  });

  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleDelete = (e) => {
    if (window.confirm("Are you really sure you want to delete this record?")) {
      let url = `http://127.0.0.1:5000/api/appointment`;

      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: id
        }), 
      };

      fetch(url, requestOptions)
        .then(() => {
          navigate("/Appointments");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
   
<NavbarMUI />
    <Box sx={{px:5, py:5}}>
    <Typography variant="h4" sx={{mx:5, my:5}} align="center" color={"palevioletred"}>Appointment Details</Typography>

{loading ? (
     <Typography variant="h4" sx={{mx:5, my:5}} align="center">Loading...</Typography>
) : (
  <>
  <Container align="center">
<Stack direction={"row"} justifyContent={"center"}>
<Stack px={10} textAlign={"start"}>
        <Typography variant="h6" >Patient Name:</Typography>
        <Typography variant="h6" >Date and Time:</Typography>
        <Typography variant="h6" >Branch Location:</Typography>
        <Typography variant="h6" >Dentist Appointed:</Typography>
        <Typography variant="h6" >Appointment Details:</Typography>

  </Stack>


<Stack px={10} textAlign={"start"}>
<Typography variant="h6" >{appointment.Patient_name}</Typography>
<Typography variant="h6" >{appointment.date_time}</Typography>
    <Typography variant="h6" >{appointment.Branch_location}</Typography>
    <Typography variant="h6" >{appointment.doctor}</Typography>
    <Typography variant="h6" >{appointment.appointment_details}</Typography>

</Stack>
</Stack>




<Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{px:5, pb:10, pt:5}}>
<Link to="/appointments">
<Button variant="contained" color="primary" sx={{ color: "White" }} >Appointment List</Button>
</Link>
<Link to={`/appointment/edit/${appointment._id}`}> 
<Button variant="contained" color="primary" sx={{ color: "White" }} >Edit</Button>
</Link>
    <Button variant="contained" color="primary" sx={{ color: "White" }} onClick={handleDelete}>Delete</Button>

    <Link to="/appointment/new">
    <Button variant="contained" color="primary" sx={{ color: "White" }} > Add </Button>
    </Link>
</Stack>
</Container>
  </>
)}
    </Box>
<FooterMUI />
    </>
  );
};

export default AppointmentView;

