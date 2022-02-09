import React from "react";
import { Nav, NavDropdown, Navbar, Button } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import "./style.css";

const PageHeader = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home" className="text-uppercase">
            artistry
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl type="text" placeholder="Search" className="mr-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default PageHeader;
