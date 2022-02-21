import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/Appcontext";
import "./SideNavbar.css";

const SideNavbar = () => {
  const { showSideBar, setshowSideBar } = useContext(AppContext);

  const sideBarShow = () => setshowSideBar(!showSideBar);

  return (
    <div className={showSideBar ? "show_sidebar" : "sidebar"}>
      <div>
        <div className=" float-right" onClick={sideBarShow}>
          <Link to="/home" className="btnClose">
            &times;
          </Link>
        </div>
        <div className="p-0">
          <Link to="/home" className="menuLink pl-4 mt-5">
            <span>Dashboard</span>
          </Link>
        </div>
        <div className="p-0">
          <Link to="/home" className="menuLink pl-4">
            <span>Users</span>
          </Link>
        </div>
        <div className="p-0">
          <Link to="/Products" className="menuLink pl-4">
            <span>Products</span>
          </Link>
        </div>
        <div className="p-0">
          <Link to="/artists" className="menuLink pl-4">
            <span>Accounts</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
