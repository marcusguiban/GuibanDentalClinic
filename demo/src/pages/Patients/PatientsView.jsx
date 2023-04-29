import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Typography, Box, Button, Stack, Container } from "@mui/material";
import { NavbarMUI } from "../Navbar";
import { FooterMUI } from "../Footer";



const PatientView = () => {
  const { id } = useParams();
  const [patient, setPatients] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
  });

  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    setLoading(true);

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setPatients(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [token, id]);

  const handleDelete = (e) => {
    if (window.confirm("Are you really sure you want to delete this record?")) {
      let url = `http://127.0.0.1:5000/api/patients`;

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
          navigate("/patients");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
<>
<NavbarMUI />
<Box sx={{px:5, py:5}}>
    <Typography variant="h4" sx={{mx:5, my:5}} align="center" color={"palevioletred"}>Patient Details</Typography>

{loading ? (
     <Typography variant="h4" sx={{mx:5, my:5}} align="center" color={"palevioletred"}>Loading...</Typography>
) : (


  <Container >
    <Stack direction={"row"} justifyContent={"center"}>
    <Stack direction={"column"}>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
          <Typography variant="h6" >First name:</Typography>
        </Stack>
        <Stack px={10}  >
          <Typography variant="h6" >{patient.first_name}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Middle name:</Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{patient.middle_name}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Last name:</Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{patient.last_name}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}} >
        <Typography variant="h6" >Age:</Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{patient.age}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Email:</Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{patient.email}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} >
        <Stack px={10} style={{width: 155}}>
        <Typography variant="h6" >Contact Number:</Typography>
        </Stack>
        <Stack px={10} >
        <Typography variant="h6" >{patient.contact_number}</Typography>

        </Stack>
      </Stack>
    </Stack>
    </Stack>
        <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{px:5, pb:10, pt:5}}>
        <Link to="/patients"><Button variant="contained"  sx={{ color: "White" }}>Patient List</Button></Link>
        <Link to={`/patient/edit/${patient._id}`}><Button variant="contained"  sx={{ color: "White" }}>Edit</Button></Link>
            <Button variant="contained"  sx={{ color: "White" }} onClick={handleDelete}>Delete</Button>
            <Link to="/patient/new"><Button variant="contained"  sx={{ color: "White" }}> Add </Button></Link>
        </Stack>
        </Container>


)}
  
    </Box>
    <FooterMUI />
</>
   
    


  );
};

export default PatientView;
