import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ArtPeople from "./components/Screens/Artists";
import ProductCardItem from "./components/Screens/Products/Products";
import HomeScreen from "./containers/Home/home";
import LoginScreen from "./containers/Login/Login";
import RegisterScreen from "./containers/Register/Register";
import { Route, Routes } from "react-router-dom";
import AppcontextProvider from "./Context/Appcontext";
import PageHeader from "./components/Layouts/Header/Header";
import UserScreen from "./containers/Users/User";
// import Main from "./containers/Main/Main";
// import PageFooter from "./components/Layouts/Footer/Footer";

const App = () => {
  return (
    <>
      <AppcontextProvider>
        <PageHeader />
        {/* <Main /> */}
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />
          <Route exact path="/home" element={<HomeScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/artists" element={<ArtPeople />} />
          <Route exact path="/products" element={<ProductCardItem />} />
          <Route exact path="/Users" element={<UserScreen />} />
        </Routes>
        {/* <PageFooter /> */}
      </AppcontextProvider>
    </>
  );
};

export default App;
