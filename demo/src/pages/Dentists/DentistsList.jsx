import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, Container, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { NavbarMUI } from "../Navbar";
import { FooterMUI } from "../Footer";

const DentistList = () => {
  const [dentists, setdentists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    let url = "http://localhost:5000/api/dentists";

    const requestOptions = {
      signal: controller.signal,
      method: "GET"

    };

    setLoading(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setdentists(json);
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
    <Typography variant="h4" align="center" color={"palevioletred"}> Current Dentists </Typography>

      {loading ? (
        <Typography variant="h6" align="center" color={"palevioletred"}> Loading...</Typography>
      ) : (
        <Container sx={{py:10}}>

          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Contact Number</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >PRC Number</TableCell>
            <TableCell >PTR Number</TableCell>
            <TableCell >View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dentists.map((e) => (
            <TableRow
              key={e.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{e.name}</TableCell>
              <TableCell >{e.email}</TableCell>
              <TableCell >{e.contact_number}</TableCell>
              <TableCell >{e.age}</TableCell>
              <TableCell >{e.prc_number}</TableCell>
              <TableCell >{e.ptr_number}</TableCell>
              <TableCell >
                <Link to={`/Dentists/${e._id}`} style={{ color: 'pink'}}><VisibilityIcon /></Link>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Stack direction={"row"} spacing={4} justifyContent={"center"} sx={{mx:5, my:5}}>
      <Link to="/dentists/new">
    <Button  variant="outlined" color="secondary">Add New Doctor</Button>

      </Link>
            </Stack>
    
        </Container>
      )}
    </Container>
    <FooterMUI />
    </>
  );
};

export default DentistList;