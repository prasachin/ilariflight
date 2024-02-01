import express from "express";
import diaryRouter from "./routes/diaries";
import diagnosesRouter from "./routes/diagnosis";
import patientRouter from "./routes/patient";
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();
app.use(express.json());

const url = `mongodb+srv://psachin:Ra62052Sa%40@cluster0.ybqmmcc.mongodb.net/?retryWrites=true&w=majority`;

console.log("connecting to ", url);

mongoose.set("strictQuery", false);

mongoose
  .connect(url)
  .then(console.log("connected to MongoDB !!!"))
  .catch((error: any) => {
    console.log("error connecting to MongoDB.....:", error.message);
  });

app.get("/ping", (_req, res) => {
  console.log("Hey someone ping here , who is there : ");
  res.json("Pong.....");
});
app.use(cors());
app.use("/api/diaries", diaryRouter);
app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server  running on the port ${PORT}`);
});
