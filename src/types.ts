export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "greet" | "good" | "ok" | "poor";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string;
}

export interface Diagnoses {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: number;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation?: string;
}

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, "comment">;

export type newdiaryentry = Omit<DiaryEntry, "id">;
