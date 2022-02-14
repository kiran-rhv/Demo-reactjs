// import Expenses from "./components/Expenses";
// import "./App.css";
// import NewExpense from "./components/NewExpense";
import React from "react";
// import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import ArtPeople from "./components/Screens/Artists";
// import ProductCardItem from "./components/Screens/Products";
// import PageHeader from "./components/Layouts/Header";
// import PageFooter from "./components/Layouts/Footer";

import LoginScreen from "./containers/Login/Login";
import RegisterScreen from "./containers/Register/Register";
import { Route, Routes } from "react-router-dom";
// import Loader from "./components/Loader";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
      </Routes>
      {/* <Loader /> */}
    </>
  );
};

export default App;
