import axios from "axios";
import { DiaryEntry } from "../../../src/types";

const baseurl = "http://localhost:3001/api/diaries";

export const Getalldiary = () => {
  return axios.get<DiaryEntry[]>(baseurl).then((response) => {
    return response.data;
  });
};
