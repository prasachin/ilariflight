import React from "react";
import { Navbar, Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar  bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>&copy; Ilari's Company</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
