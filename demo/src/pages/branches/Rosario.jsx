

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Stack, Typography, Button, Grid } from '@mui/material';
import { NavbarMUI } from '../Navbar';
import { FooterMUI } from '../Footer';
import { Link } from 'react-router-dom';
import rosario from "../../Images/rosario.jpg"


export default function RosarioBranch() {
  return ( 
  <>
  <NavbarMUI />
    <Box>

<Stack direction="column" sx={{ px:10, py:10 }} justifyContent={"center"} alignItems={"center"} >
<Typography variant="h3" sx={{ px:10, py:10 }} color={"palevioletred"}>Rosario Branch</Typography>



<Stack  direction="row" sx={{ px:10 }} >
        <Grid container >

        <Grid item  sm={12} md={6} lg={6}>
          <ImageList sx={{ width: 700, height: 950 }} variant="woven" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
                 ))}
            </ImageList>
          </Grid>

            <Grid item  sm={12} md={6} lg={6}>
                <img src={rosario} className="img1" alt="post"></img>
            </Grid>

            <Grid item  sm={12} md={12} lg={12} sx={{mt:2}}>
            <div className="App">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.3214035110514!2d120.85621096193789!3d14.408626681578346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962dd3cd63022f%3A0xb8f7418a668660e5!2sGuiban%20Dental%20Clinic%20Rosario%20Branch!5e0!3m2!1sen!2sph!4v1682414377794!5m2!1sen!2sph" 
      width="1200" 
      height="450" 
      style={{ border: "0" }}
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
            </Grid>

        </Grid>
        </Stack>
<Link to="/appointment/new"><Button variant='contained' sx={{ color: "white" }}>Set An Appointment</Button></Link>
</Stack>
</Box>
    <FooterMUI />
    </>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
];