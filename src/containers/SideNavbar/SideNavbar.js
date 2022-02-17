import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/Appcontext";
import "./SideNavbar.css";
// import PageHeader from "../../components/Layouts/Header/Header";

const SideNavbar = () => {
  const { showSideBar, setshowSideBar } = useContext(AppContext);

  const sideBarShow = () => setshowSideBar(!showSideBar);

  return (
    <div className={showSideBar ? "show_sidebar" : "sidebar"}>
      <div onClick={sideBarShow}>
        <div className=" float-right">
          <Link to="/home" className="btnClose">
            &times;
          </Link>
        </div>
        <div className="p-0">
          <Link to="/home" className="menuLink pl-4 mt-5">
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
    </div>
  );
};

export default SideNavbar;
