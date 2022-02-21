import React from "react";
import PageHeader from "../../components/Layouts/Header/Header";
import PageFooter from "../../components/Layouts/Footer/Footer";
import SideNavbar from "../SideNavbar/SideNavbar";
import ProductCardItem from "../../components/Screens/Products/Products";

const HomeScreen = () => {
  return (
    <div>
      <PageHeader />
      <SideNavbar />
      <ProductCardItem />
      <PageFooter />
    </div>
  );
};

export default HomeScreen;
