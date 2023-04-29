require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");
const logger = require("./middlewares/logger");

const patientRoutes = require("./routes/Patients");
const dentistsRoutes = require("./routes/Dentists");
const AppointmentRoutes = require("./routes/Appointment");
const cors = require("cors")
const connection = require("./database");

const authRoutes = require("./routes/Authentication");

//database
connection();

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger);

//routes
app.use("/api/dentists", dentistsRoutes);
app.use("/api/appointment", AppointmentRoutes);
app.use("/api/patients", patientRoutes);


app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () =>{
    console.log(`Express JS started in port ${PORT}...`);
});



    