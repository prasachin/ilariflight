import data from "../../data/diagnoses";

import { Diagnoses } from "../types";

const getdata = (): Diagnoses[] => {
  return data;
};
// const getnonsensitivesEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaryData.map(({ id, date, weather, visibility }) => ({
//     id,
//     date,
//     weather,
//     visibility,
//   }));
// };

const adddata = () => {
  return null;
};

export default {
  getdata,
  adddata,
};
