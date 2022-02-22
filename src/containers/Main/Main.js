import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/Appcontext";
import "./Main.css";
import HomeScreen from "../Home/home";
import UserScreen from "../Users/User";
import ProductCardItem from "../../components/Screens/Products/Products";
import ArtPeople from "../../components/Screens/Artists";
import SideNavbar from "../SideNavbar/SideNavbar";

const Main = () => {
  const { showSideBar } = useContext(AppContext);
  const [SideNav, setSideNav] = useState();

  const handleClick = (SideNavState) => {
    setSideNav(SideNavState);
  };
  return (
    <>
      <SideNavbar />
      <div className={showSideBar ? "navbarToggleOpen" : "navbarToggleClose"}>
        {(() => {
          switch (SideNav) {
            case "dashboard":
              return <HomeScreen handleClick={handleClick} />;
            case "Users":
              return <UserScreen handleClick={handleClick} />;
            case "Product":
              return <ProductCardItem handleClick={handleClick} />;
            case "Accounts":
              return <ArtPeople handleClick={handleClick} />;
            default:
              return null;
          }
        })()}
      </div>
    </>
  );
};

export default Main;
