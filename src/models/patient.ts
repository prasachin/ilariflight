const mongoose = require("mongoose");
import { Patient } from "../types";

const PatientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  ssn: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
});

PatientSchema.set("toJSON", {
  transform: (_document: Patient, returnedObject: Patient) => {
    returnedObject.id = returnedObject.id;
  },
});
const Patients = mongoose.model("Patients", PatientSchema);

module.exports = Patients;
