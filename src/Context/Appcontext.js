import React, { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();

const AppcontextProvider = (props) => {
  const [showSideBar, setshowSideBar] = useState(false);

  const value = {
    showSideBar,
    setshowSideBar,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppcontextProvider;
