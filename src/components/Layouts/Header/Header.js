import React, { useState } from "react";
import { Nav, NavDropdown, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeLogo from "../../../assets/images/logo_home.png";
import UserLogo from "../../../assets/images/user_profile.png";
// import sidenavbarmenu from "../../../assets/images/menu.png";
// import SideNavbar from "../../../containers/SideNavbar/SideNavbar";
// import "./Header.css";

const PageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <div className="container-fluid">
          {/* --------------- Sidebar menu logo Start --------------- */}
          {/* <div className="mr-4 menu-toggle" onClick={toggle}>
            <img
              src={sidenavbarmenu}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Sidebar menu logo"
            />
          </div> */}

          <Button className="menu-toggle" onClick={toggle}>
            <span className="{`sidebar ${isOpen ? 'cross' : 'hamburger'}}"></span>
          </Button>

          {/* --------------- Sidebar menu logo End --------------- */}

          {/* --------------- Navbar company logo Start --------------- */}
          <Navbar.Brand as={Link} className="mx-auto" to="/home">
            <img
              src={HomeLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Company logo"
            />
          </Navbar.Brand>
          {/* --------------- Navbar company logo End --------------- */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <img
                  src={UserLogo}
                  class="mr-2 img img-fluid"
                  width="30"
                  height="30"
                  alt="user profile"
                />
                Profile
                <NavDropdown.Item href="#action/3.2">SignOut</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default PageHeader;
