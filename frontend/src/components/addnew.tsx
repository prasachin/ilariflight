import axios from "axios";
import React, { useState } from "react";
import { Patient, DiaryEntry } from "../../../src/types";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

export const Addpatient = () => {
  const [patients, setpatients] = useState<Patient[]>([]);
  const [name, setname] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [gender, setgender] = useState("");
  const [ssn, setssn] = useState("");
  const [occupation, setoccupation] = useState("");

  const handlepatient = () => {
    try {
      axios
        .post("http://localhost:3001/api/patients", {
          id: patients.length + 1,
          name,
          dateOfBirth,
          gender,
          ssn,
          occupation,
        })
        .then((response) => {
          setpatients([...patients, response.data]);
        });
      setname("");
      setdateOfBirth("");
      setgender("");
      setssn("");
      setoccupation("");
      console.log("added");
    } catch (error: any) {
      console.log("Cant add the new patient", error.message);
    }
  };
  return (
    <Container>
      <Form onSubmit={handlepatient}>
        <h2>Fill to Add:</h2>
        <Form.Group as={Row} controlId="formName">
          <Form.Label column sm="2">
            Name:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              value={name}
              placeholder="Name"
              onChange={({ target }) => setname(target.value)}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row} controlId="formName">
          <Form.Label column sm="2">
            D:O:B:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="date"
              value={dateOfBirth}
              placeholder="D:O:B"
              onChange={({ target }) => setdateOfBirth(target.value)}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row} controlId="formName">
          <Form.Label column sm="2">
            S:S:N
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              value={ssn}
              placeholder="S:S:N"
              onChange={({ target }) => setssn(target.value)}
            />
          </Col>
        </Form.Group>
        <br />
        <div>
          <Form.Label>Select Gender:</Form.Label>
          <div key="gender-radio" className="mb-3">
            <Form.Check
              inline
              label="Male"
              type="radio"
              id="gender-male"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={() => setgender("male")}
            />
            <Form.Check
              inline
              label="Female"
              type="radio"
              id="gender-female"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={() => setgender("female")}
            />
            <Form.Check
              inline
              label="Other"
              type="radio"
              id="gender-other"
              name="gender"
              value="other"
              checked={gender === "other"}
              onChange={() => setgender("other")}
            />
          </div>
        </div>
        <br />
        <Form.Group as={Row} controlId="formName">
          <Form.Label column sm="2">
            Occupation:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              value={occupation}
              placeholder="Occupation"
              onChange={({ target }) => setoccupation(target.value)}
            />
          </Col>
        </Form.Group>{" "}
        <br />
        <Button type="submit">Add</Button>
      </Form>
    </Container>
  );
};

export const Adddiary = () => {
  const [diaries, setdiaries] = useState<DiaryEntry[]>([]);
  const [date, setdate] = useState("");
  const [weather, setweather] = useState("");
  const [visibility, setvisibility] = useState("");
  const [comment, setcomment] = useState("");

  const handlediary = () => {
    axios
      .post("http://localhost:3001/api/diaries", {
        id: diaries.length + 1,
        date,
        weather,
        visibility,
        comment,
      })
      .then((response) => {
        setdiaries([...diaries, response.data]);
      });
    setcomment("");
    setdate("");
    setweather("");
    setvisibility("");
  };
  return (
    <Container>
      <Form onSubmit={handlediary}>
        <h1>Fill to Add :</h1>
        <Form.Group as={Row} controlId="formName">
          <Form.Label column sm="2">
            Date:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="date"
              value={date}
              placeholder="Date"
              onChange={({ target }) => setdate(target.value)}
            />
          </Col>
        </Form.Group>
        <br />

        <div>
          <Form.Label>Choose the Weather Type:</Form.Label>
          <div key="weather-radio" className="mb-3">
            <Form.Check
              inline
              label="Sunny"
              type="radio"
              id="weather-sunny"
              name="weather"
              value="sunny"
              checked={weather === "sunny"}
              onChange={() => setweather("sunny")}
            />
            <Form.Check
              inline
              label="Rainy"
              type="radio"
              id="weather-rainy"
              name="weather"
              value="rainy"
              checked={weather === "rainy"}
              onChange={() => setweather("rainy")}
            />
            <Form.Check
              inline
              label="Cloudy"
              type="radio"
              id="weather-cloudy"
              name="weather"
              value="cloudy"
              checked={weather === "cloudy"}
              onChange={() => setweather("cloudy")}
            />
            <Form.Check
              inline
              label="Windy"
              type="radio"
              id="weather-windy"
              name="weather"
              value="windy"
              checked={weather === "windy"}
              onChange={() => setweather("windy")}
            />
            <Form.Check
              inline
              label="Stormy"
              type="radio"
              id="weather-stormy"
              name="weather"
              value="stormy"
              checked={weather === "stormy"}
              onChange={() => setweather("stormy")}
            />
          </div>
        </div>
        <br />
        <div>
          <Form.Label>Choose the Visibility Type:</Form.Label>
          <div>
            <Form.Check
              inline
              label="good"
              type="radio"
              id="visibility-good"
              name="visibility"
              value="good"
              checked={visibility === "good"}
              onChange={() => setvisibility("good")}
            />
            <Form.Check
              inline
              label="poor"
              type="radio"
              id="visibility-poor"
              name="visibility"
              value="poor"
              checked={visibility === "poor"}
              onChange={() => setvisibility("poor")}
            />
            <Form.Check
              inline
              label="great"
              type="radio"
              id="visibility-greet"
              name="visibility"
              value="greet"
              checked={visibility === "greet"}
              onChange={() => setvisibility("greet")}
            />
            <Form.Check
              inline
              label="ok"
              type="radio"
              id="visibility-ok"
              name="visibility"
              value="ok"
              checked={visibility === "ok"}
              onChange={() => setvisibility("ok")}
            />
          </div>
        </div>
        <br />
        <Form.Group as={Row} controlId="formName">
          <Form.Label column sm="2">
            Comment:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              value={comment}
              placeholder="comment"
              onChange={({ target }) => setcomment(target.value)}
            />
          </Col>
        </Form.Group>
        <br />
        <Button type="submit"> ADD NEW ENTRY</Button>
      </Form>
    </Container>
  );
};
