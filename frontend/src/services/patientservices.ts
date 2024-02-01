import axios from "axios";
import { Patient } from "../../../src/types";

const baseurl = "http://localhost:3001/api/patients";

export const Getallpatients = () => {
  return axios.get<Patient[]>(baseurl).then((response) => {
    return response.data;
  });
};
