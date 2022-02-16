import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideNavbar.css";

const SideNavbar = () => {
  return (
    <div className="sidebar py-5">
      <div className=" float-right">
        <Link to="/home" className="btnClose" onClick={toggle}>
          &times;
        </Link>
      </div>
      <div className="p-0">
        <Link to="/home" className="menuLink pl-4">
          {/* <i className="fa fa-tachometer mr-3" aria-hidden="true"></i> */}
          <span>Dashboard</span>
        </Link>
      </div>
      <div className="p-0">
        <Link to="/home" className="menuLink pl-4">
          {/* <i className="fa fa-product-hunt mr-3" aria-hidden="true"></i> */}
          <span>Users</span>
        </Link>
      </div>
      <div className="p-0">
        <Link to="/Products" className="menuLink pl-4">
          {/* <i className="fa fa-id-card-o mr-3" aria-hidden="true"></i> */}
          <span>Products</span>
        </Link>
      </div>
      <div className="p-0">
        <Link to="/artists" className="menuLink pl-4">
          {/* <i className="fa fa-id-card-o mr-3" aria-hidden="true"></i> */}
          <span>Accounts</span>
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar;
