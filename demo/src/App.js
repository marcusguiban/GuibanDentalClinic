import "./App.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import NotFound from "./components/NotFound";
import AuthContextProvider  from "./contexts/AuthContext";

import PatientList from "./pages/Patients/PatientsList";
import PatientView from "./pages/Patients/PatientsView";

import PatientCreate from "./pages/Patients/PatientCreate";
import PatientEdit from "./pages/Patients/PatientEdit";
import AppointmentList from "./pages/Appointments/AppointmentList";
import AppointmentView from "./pages/Appointments/AppointmentsView";
import AppointmentEdit from "./pages/Appointments/AppointmentEdit";
import AppointmentCreate from "./pages/Appointments/AppointmentCreate";
import Homepage from "./pages/Homepage";
import DentistList from "./pages/Dentists/DentistsList";
import DentistsView from "./pages/Dentists/DentistView";
import DentistEdit from "./pages/Dentists/DentistEdit";
import DentistCreate from "./pages/Dentists/DentistCreate";
import Overview from "./pages/OverView";
import PanapaanBranch from "./pages/branches/Panapaan";
import MolinoBranch from "./pages/branches/Molino";
import DasmaBranch from "./pages/branches/Dasmarinas";
import RosarioBranch from "./pages/branches/Rosario";
import CarmonaBranch from "./pages/branches/Carmona";
import { NavbarMUI } from "./pages/Navbar";
import { FooterMUI } from "./pages/Footer";


import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import Login from "./pages/login";
import UserCreate from "./pages/Register";
import { ThemeProvider, createTheme } from "@mui/material";
import { pink, red } from "@mui/material/colors";
import SecureRoute from "./SecureRoutes"; 
import PatientWelcome from "./pages/LandingPage/PatientWelcome";
import DentistWelcome from "./pages/LandingPage/DentistsWelcome";

function App() {
  const theme = createTheme({
    palette:{
      mode:"light",
      primary:{
        main: pink[200]
      },
      myCustomColor:{
        main: red[500],
      },

    },
  });
  return (
    <ThemeProvider theme={theme}>
<div className="bg">
<LocalizationProvider dateAdapter={AdapterDateFns} >
          <AuthContextProvider>
            <BrowserRouter>
              <Routes>
                <Route element = {<SecureRoute />}>
                <Route path="/overview" element={<Overview />}></Route>
                


                <Route path="/Dentists" element={<DentistList />}></Route>
                <Route path="/Dentists/:id" element={<DentistsView />}></Route>
                <Route path="/Dentists/edit/:id" element={<DentistEdit />}></Route>
                <Route path="/Dentists/new" element={<DentistCreate />}></Route>
                
                <Route path="/Appointments" element={<AppointmentList />}></Route>
                <Route path="/Appointment/:id" element={<AppointmentView />}></Route>
                <Route path="/Appointment/edit/:id" element={<AppointmentEdit />}></Route>
                <Route path="/Appointment/new" element={<AppointmentCreate />}></Route>
                
                
                <Route path="/Patients" element={<PatientList />}></Route>
                <Route path="/patient/edit/:id" element={<PatientEdit />}></Route>
                <Route path="/patients/:id" element={<PatientView />}></Route>
                <Route path="/patient/new" element={<PatientCreate />}></Route>
                </Route>
                
                <Route path="/nav" element={<NavbarMUI />}></Route> 
                <Route path="/footer" element={<FooterMUI />}></Route> 

                <Route path="/" element={<Homepage />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Register" element={<UserCreate />}></Route>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/WelcomePatient" element={<PatientWelcome/>}></Route>
                <Route path="/WelcomeDoctor" element={<DentistWelcome/>}></Route>

                

                <Route path="/Panapaan" element={<PanapaanBranch />}></Route>
                <Route path="/Molino" element={<MolinoBranch />}></Route>
                <Route path="/Dasmarinas" element={<DasmaBranch />}></Route>
                <Route path="/Rosario" element={<RosarioBranch />}></Route>
                <Route path="/Carmona" element={<CarmonaBranch />}></Route>
             </Routes>
           </BrowserRouter>
          </AuthContextProvider>
        </LocalizationProvider>
</div>
        
      </ThemeProvider>
    
  );
}

export default App;
