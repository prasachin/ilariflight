import axios from "axios";
import { Diagnoses } from "../types";

const baseurl = "http://localhost:3001/api/diagnoses";

export const GetDiagnoseslist = () => {
  return axios.get<Diagnoses[]>(baseurl).then((response) => {
    return response.data;
  });
};
