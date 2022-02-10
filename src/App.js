// import Expenses from "./components/Expenses";
// import "./App.css";
// import NewExpense from "./components/NewExpense";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ArtPeople from "./components/Screens/Artists";
import ProductCardItem from "./components/Screens/Products";
import PageHeader from "./components/Layouts/Header";
import PageFooter from "./components/Layouts/Footer";

const App = () => {
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Tooth Brush",
  //     amount: 30.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   {
  //     id: "e2",
  //     title: "New TV",
  //     amount: 45799.49,
  //     date: new Date(2021, 2, 12),
  //   },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 5560.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 2450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  // const addExpenseHandler = (expense) => {
  //   console.log("In App.js");
  //   console.log(expense);
  // };

  return (
    // <div>
    //   <NewExpense onAddExpense={addExpenseHandler} />
    //   <Expenses items={expenses} />
    // </div>.

    <div>
      {/* <PageHeader />
      <div className="d-flex flex-row">
        <ProductCardItem />
        <ProductCardItem />
      </div>
      <PageFooter /> */}
      <PageHeader />
      <main>
        <Routes>
          <Route path="/artists" element={<ArtPeople />} />
          <Route path="/products" element={<ProductCardItem />} />
        </Routes>
      </main>
      <PageFooter />
    </div>
  );
};

export default App;
