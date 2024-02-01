import express from "express";
const router = express.Router();
import diaryservices from "../services/diaryservices";

router.get("/", (_req, res) => {
  const data = diaryservices.getEntries();
  res.send(data);
});

router.get("/:id", (req, res) => {
  const diary = diaryservices.findById(Number(req.params.id));
  if (diary) res.send(diary);
  else {
    res.sendStatus(404);
  }
});

router.get("/nonsensitives", (_req, res) => {
  const nonsensitivedata = diaryservices.getnonsensitivesEntries();
  res.send(nonsensitivedata);
});

router.post("/", (req, res) => {
  try {
    const newEntry = req.body;
    const addedEntry = diaryservices.addDiary(newEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errormessage = "Somethig went wrong , can't add the entry :";
    if (error instanceof Error) {
      errormessage += "Error: " + error.message;
    }
    res.status(400).send(errormessage);
  }
  // const { entry } = req.body;
  // const addedEntry = diaryservices.addDiary(entry);
  // res.json(addedEntry);
});

export default router;
