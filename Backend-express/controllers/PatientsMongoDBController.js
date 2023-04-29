const Patient = require("../models/Patients");

const getAllPatients = async (req, res) => {
  try {
    const patient = await Patient.find({});
    res.json(patient);
  } catch (error) {
    throw error;
  }
};

const getPatient = async (req, res) => {
  const id = req.params.id;

  try {
    const patient = await Patient.findById(id);
    res.json(patient);
  } catch (error) {
    throw error;
  }
};

const createPatient = async (req, res) => {
  const { first_name, middle_name, last_name, email, age, contact_number } = req.body;

  try {
    const patient = await Patient.create({
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        email: email,
        age: age,
        contact_number: contact_number,
    });

    if (patient) {
      res.status(201).json({ msg: `Data inserted with id ${patient._id}` });
    } else {
      res.status(400).json({ msg: "Data not inserted" });
    }
  } catch (error) {
    throw error;
  }
};

const updatePatient = async (req, res) => {
  const { first_name, middle_name, last_name, email, age, contact_number, id } = req.body;

  try {
    const patient = await Patient.findByIdAndUpdate(id, {
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        email: email,
        age: age,
        contact_number: contact_number,
    });

    if (patient) {
      res.status(200).json({ msg: `Data updated with id ${patient._id}` });
    } else {
      res.status(400).json({ msg: "Data not updated" });
    }
  } catch (error) {
    throw error;
  }
};

const deletePatient = async (req, res) => {
  const { id } = req.body;

  try {
    await Patient.findByIdAndDelete(id)
                    .then(() => res.status(200).json({ msg: `Data deleted with id ${id}` }))
                    .catch(err => res.status(400).json({ msg: "Data not deleted" }));
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getAllPatients,
    getPatient,
    createPatient,
    updatePatient,
    deletePatient
};