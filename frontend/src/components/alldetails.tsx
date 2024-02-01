import React, { useState, useEffect } from "react";
import { Diagnoses } from "../types";
import { GetDiagnoseslist } from "../services/diagnosesservices";
import { Getalldiary } from "../services/diaryservices";
import { DiaryEntry } from "../../../src/types";
import { Patient } from "../../../src/types";
import { Getallpatients } from "../services/patientservices";
import Showdetail from "./onesdetail";
import { Card, ListGroup } from "react-bootstrap";

export const Diagnoseslist = () => {
  const [diagnoseslist, setdiagnoseslist] = useState<Diagnoses[]>([]);

  useEffect(() => {
    GetDiagnoseslist().then((data) => {
      setdiagnoseslist(data);
    });
  }, []);

  return (
    <Card>
      <Card.Header as="h2">Diagnoses List</Card.Header>
      <ListGroup variant="flush">
        {diagnoseslist.map((diagnoses: Diagnoses) => (
          <ListGroup.Item key={diagnoses.code}>
            <strong>Code:</strong> {diagnoses.code}, <strong>Name:</strong>{" "}
            {diagnoses.name}, <strong>Latin:</strong> {diagnoses.latin}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export const Diarylist = () => {
  const [diaries, setdiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    Getalldiary().then((data) => {
      setdiaries(data);
    });
  }, []);

  return (
    <Card bg="body">
      <Card.Header as="h2">Diary Entries:</Card.Header>
      <ListGroup variant="flush">
        {diaries.map((entry: DiaryEntry) => (
          <ListGroup.Item key={entry.id}>
            <strong>Entry With Id:</strong> {entry.id}, <strong>On:</strong>{" "}
            {entry.date}, <strong>In :</strong> {entry.weather} season,{" "}
            <strong>with </strong>
            {entry.visibility} visibility.
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export const Patientlist = () => {
  const [patients, setpatients] = useState<Patient[]>([]);
  useEffect(() => {
    Getallpatients().then((data) => {
      setpatients(data);
    });
  }, []);
  return (
    <Card>
      <Card.Header as="h2"> Patients Details:</Card.Header>
      <ListGroup variant="flush">
        {patients.map((patient) => (
          <ListGroup.Item key={patient.id}>
            <strong>Name:</strong> {patient.name}, <strong>DOB:</strong>{" "}
            {patient.dateOfBirth}, <strong> Gender:</strong> {patient.gender},{" "}
            <strong> Occupation: </strong>
            {patient.occupation}.
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};
