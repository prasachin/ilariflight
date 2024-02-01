import diaryData from "../../data/entries";
import { NonSensitiveDiaryEntry, DiaryEntry, newdiaryentry } from "../types";

const getEntries = (): DiaryEntry[] => {
  return diaryData;
};
const getnonsensitivesEntries = (): NonSensitiveDiaryEntry[] => {
  return diaryData.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};
const findById = (id: Number): DiaryEntry | undefined => {
  const entry = diaryData.find((d) => d.id === id);
  return entry;
};
const addDiary = (
  entry: newdiaryentry
  // date: string,
  // weather: Weather,
  // visibility: Visibility,
  // comment: string
) => {
  const newdiary = {
    id: Math.max(...diaryData.map((d) => d.id)) + 1,
    // date,
    // weather,
    // visibility,
    // comment,
    ...entry,
  };
  diaryData.push(newdiary);
  return newdiary;
};

export default {
  getEntries,
  addDiary,
  getnonsensitivesEntries,
  findById,
};
