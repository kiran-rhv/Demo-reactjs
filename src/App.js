// import Expenses from "./components/Expenses";
// import "./App.css";
// import NewExpense from "./components/NewExpense";
import React from "react";
// import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ArtPeople from "./components/Screens/Artists";
import ProductCardItem from "./components/Screens/Products";
// import PageHeader from "./components/Layouts/Header";
// import PageFooter from "./components/Layouts/Footer";
import HomeScreen from "./containers/Home/home";
import LoginScreen from "./containers/Login/Login";
import RegisterScreen from "./containers/Register/Register";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="/home" element={<HomeScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route exact path="/artists" element={<ArtPeople />} />
        <Route exact path="/products" element={<ProductCardItem />} />
      </Routes>
    </>
  );
};

export default App;
