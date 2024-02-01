import { newdiaryentry } from "./types";

const toNewDiaryEntry = (object: unknown): newdiaryentry => {
  console.log(object);
  const newEntry: newdiaryentry = {
    weather: "cloudy",
    date: "2023-12-3",
    visibility: "good",
    comment: "Fake news ahi re baba",
  };

  return newEntry;
};

export default toNewDiaryEntry;
