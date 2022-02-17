import React, { useContext } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeLogo from "../../../assets/images/logo_home.png";
import UserLogo from "../../../assets/images/user_profile.png";
import { AppContext } from "../../../Context/Appcontext";
import sidenavbarmenu from "../../../assets/images/menu.png";
import "./Header.css";

const PageHeader = () => {
  const { showSideBar, setshowSideBar } = useContext(AppContext);
  const Handle_click = () => {
    setshowSideBar(!showSideBar);
  };
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <div className="container-fluid">
          {/* --------------- Sidebar menu logo Start --------------- */}
          <div className="mr-4 menu-toggle" onClick={Handle_click}>
            <img
              src={sidenavbarmenu}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Sidebar menu logo"
            />
          </div>
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
              <NavDropdown
                title={
                  <span className="pr-1">
                    <img
                      className="thumbnail-image pr-2"
                      src={UserLogo}
                      alt="user pic"
                    />
                    User Name
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/home">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  SignOut
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default PageHeader;
