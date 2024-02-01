import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Alert, Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Addpatient, Adddiary } from "./components/addnew";
import { Patientlist, Diarylist, Diagnoseslist } from "./components/alldetails";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

const App = () => {
  const elementstyle = {
    textDecoration: "none",
    margin: "50px",
    padding: "1px",
  };

  const AddNew = () => {
    const navigate = useNavigate();

    const newp = () => {
      navigate("/Addpatient");
    };

    const newd = () => {
      navigate("/Adddiary");
    };

    return (
      <div>
        <h1>Choose the following option to add : </h1>
        <div>
          <Button onClick={newp}>Add New Patient</Button>
        </div>
        <br />
        <div>
          <Button onClick={newd}>Add New Diary</Button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Router>
        <Navbar
          // fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" as="span">
                <Link style={elementstyle} to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={elementstyle} to="/Patientlist">
                  Patientlist
                </Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={elementstyle} to="/Diagnoseslist">
                  Diagnoseslist
                </Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={elementstyle} to="/Diarylist">
                  Diarylist
                </Link>
              </Nav.Link>
            </Nav>
            <Nav.Link href="#" as="span">
              <Link style={elementstyle} to="/AddNew">
                Addnew
              </Link>
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/Patientlist" element={<Patientlist />}></Route>
          <Route path="/Diagnoseslist" element={<Diagnoseslist />}></Route>
          <Route path="/Diarylist" element={<Diarylist />}></Route>
          <Route path="/AddNew" element={<AddNew />}></Route>
          <Route path="/Addpatient" element={<Addpatient />}></Route>
          <Route path="/Adddiary" element={<Adddiary />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
