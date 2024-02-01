import express from "express";
const router = express.Router();
import patientservice from "../services/patientservices";

router.get("/", (_req, res) => {
  const pateintdata = patientservice.getpatientdata();
  res.send(pateintdata);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const patients = patientservice.getpatientdata();
  const patient = patients.filter((entry) => entry.id === id);
  res.send(patient);
});

router.post("/", (req, res) => {
  try {
    const { name, dateOfBirth, ssn, gender, occupation } = req.body;
    const addedpatient = patientservice.addpatient(
      name,
      dateOfBirth,
      ssn,
      gender,
      occupation
    );
    res.json(addedpatient);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        "Something went wrong please do check again !",
        error.message
      );
    } else {
      console.log("Something went wrong ! ", error);
    }
    res.status(404).send("problem in finding the content :");
  }
});

export default router;
