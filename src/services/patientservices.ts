import data from "../../data/patients";
import { Patient } from "../types";

const getpatientdata = (): Patient[] => {
  return data;
};

const addpatient = (
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: string,
  occupation: string
) => {
  const newpatient = {
    id: Math.max(...data.map((d) => d.id)) + 1,
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
  };
  data.push(newpatient);
  return newpatient;
};
export default {
  getpatientdata,
  addpatient,
};
