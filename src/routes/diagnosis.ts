import express from "express";
const router = express.Router();
import diagnosesservices from "../services/diagnosesservices";

router.get("/", (_req, res) => {
  const data = diagnosesservices.getdata();
  res.send(data);
});

router.post("/", (_req, res) => {
  res.send("The new data to the diagnoses is saving :");
});

export default router;
