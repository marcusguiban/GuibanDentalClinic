const Appointment = require("../models/Appointments");

const getAllAppointments = async (req, res) => {
  try {
    const appointment = await Appointment.find({});
    res.json(appointment);1
  } catch (error) {
    throw error;
  }
};

const getAppointment = async (req, res) => {
  const id = req.params.id;

  try {
    const appointment = await Appointment.findById(id);
    res.json(appointment);
  } catch (error) {
    throw error;
  }
};

const createAppointment = async (req, res) => {
  const {date_time, Patient_name, Branch_location, doctor, appointment_details } = req.body;

  try {
    const appointment = await Appointment.create({
        Patient_name: Patient_name, 
        date_time: date_time,
        Branch_location: Branch_location,
        doctor: doctor,
        appointment_details: appointment_details,
    });

    if (appointment) {
      res.status(201).json({ msg: `Data inserted with id ${appointment._id}` });
    } else {
      res.status(400).json({ msg: "Data not inserted" });
    }
  } catch (error) {
    throw error;
  }
};

const updateAppointment = async (req, res) => {
  const { Patient_name, date_time, Branch_location, doctor, appointment_details, id } = req.body;

  try {
    const appointment = await Appointment.findByIdAndUpdate(id, {
        Patient_name: Patient_name,
        date_time: date_time,
        Branch_location: Branch_location,
        doctor: doctor,
        appointment_details: appointment_details,
    });

    if (appointment) {
      res.status(200).json({ msg: `Data updated with id ${appointment._id}` });
    } else {
      res.status(400).json({ msg: "Data not updated" });
    }
  } catch (error) {
    throw error;
  }
};

const deleteAppointment = async (req, res) => {
  const { id } = req.body;

  try {
    await Appointment.findByIdAndDelete(id)
                    .then(() => res.status(200).json({ msg: `Data deleted with id ${id}` }))
                    .catch(err => res.status(400).json({ msg: "Data not deleted" }));
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getAllAppointments,
    getAppointment,
    createAppointment,
    updateAppointment,
    deleteAppointment
};