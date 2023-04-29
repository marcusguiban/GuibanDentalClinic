
import {  AppBar, Container, Stack, Toolbar, Typography, Grid } from '@mui/material';

    import FacebookIcon from '@mui/icons-material/Facebook';
    import InstagramIcon from '@mui/icons-material/Instagram';
    import MapIcon from '@mui/icons-material/Map';
import { Link } from 'react-router-dom';



export const FooterMUI = () => {
  
    return (
        <AppBar position="static" style={{ background: 'deeppink' }} sx={{px:10, py:10}}>
        <Container maxWidth="xl" >
          <Toolbar >
            <Grid container spacing={2}>

            <Grid item  sm={12} md={6} lg={3}>

            <Stack direction="column" color="white" >

                <Typography variant="body1" display="block" gutterBottom>
                    Branches
                </Typography>

                <Typography variant="body2" display="block" gutterBottom >
                <Link to="/Panapaan" style={{ color: 'inherit', textDecoration: 'none'}}>Panapaan </Link>
                </Typography>

                <Typography variant="body2" display="block" gutterBottom >
                <Link to="/Rosario"  style={{ color: 'inherit', textDecoration: 'none'}} >Rosario</Link>
                </Typography>

                <Typography variant="body2" display="block" gutterBottom >
                <Link to="/Molino" style={{ color: 'inherit', textDecoration: 'none'}}>Molino</Link>
                </Typography>
                <Typography variant="body2" display="block" gutterBottom >
                <Link to="/Dasmarinas" style={{ color: 'inherit', textDecoration: 'none'}}>Dasmarinas</Link>
                </Typography>
                <Typography variant="body2" display="block" gutterBottom >
                <Link to="/Carmona" style={{ color: 'inherit', textDecoration: 'none'}}>Carmona</Link>
                </Typography>
                <Link to={"home"} ></Link>
            </Stack>
                </Grid >
                <Grid item  sm={12} md={6} lg={3}>
                <Stack color="white">
            <Typography variant="body1" display="block" gutterBottom>
                    Contact us
                </Typography>
                <Typography variant="body2" display="block" gutterBottom>
                    Contact Number:
                </Typography>
                <Typography variant="body2" display="block" gutterBottom>
                    0956-5423-123
                </Typography>
                <Typography variant="body2" display="block" gutterBottom>
                    0956-5423-123
                </Typography>
                <Typography variant="body2" display="block" gutterBottom>
                    Email Us:
                </Typography>
                <Typography variant="body2" display="block" gutterBottom>
                    GuibanDentalClinic@GDC.com
                </Typography>
                <Typography variant="body2" display="block" gutterBottom>
                    GuibanDentalClinic@gmail.com
                </Typography>
            </Stack>
                </Grid>
                <Grid item  sm={12} md={6} lg={3}>
                    <Stack direction={"column"} spacing={2} color="white">
                    <Typography variant="body1" display="block" gutterBottom>
                        Quick Links
                    </Typography>
                <Typography variant="body2" display="block" gutterBottom >
                <Link to="/Login" style={{ color: 'inherit', textDecoration: 'none'}}>LogIn</Link>
                </Typography>
                <Typography variant="body2" display="block" gutterBottom >
                <Link to="/register"style={{ color: 'inherit', textDecoration: 'none'}}>Register</Link>
                </Typography>
                <Typography variant="body2" display="block" gutterBottom >
                <Link to="/Appointment/new" style={{ color: 'inherit', textDecoration: 'none'}}>Set An Appointment</Link>
                </Typography>
                <Typography variant="body2" display="block" gutterBottom >
                <Link to="/Dentists/new" style={{ color: 'inherit', textDecoration: 'none'}}>Join Us</Link>
                </Typography>
                
                    </Stack>
                </Grid>
                <Grid item  sm={12} md={6} lg={3}>
                    <Typography variant="body1" display="block" color={"white"} gutterBottom> Social Media Links:</Typography>
                    <Stack direction={"row"} spacing={5 } color="white">
                    <Link to="https://www.facebook.com/guibandentalclinic" style={{ color: 'inherit', textDecoration: 'none'}}>
                    <FacebookIcon fontSize='large'></FacebookIcon>
                    </Link>
                    <Link to="https://www.instagram.com/guibandentalclinic/?hl=en" style={{ color: 'inherit', textDecoration: 'none'}}>
                    <InstagramIcon fontSize='large'></InstagramIcon>
                    </Link>
                    <Link to="https://www.google.com/maps/place/Guiban+Dental+Clinic+Panapaan+Branch/@14.4471907,120.9506977,17z/data=!3m1!4b1!4m6!3m5!1s0x3397cda0e3f8d9a1:0x337ae87aa24709!8m2!3d14.4471855!4d120.9532726!16s%2Fg%2F11h6q80gpk" style={{ color: 'inherit', textDecoration: 'none'}}>
                    <MapIcon fontSize='large'></MapIcon>
                    </Link>
                
                    </Stack>
                </Grid>
                                    
            


            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

    )
}
