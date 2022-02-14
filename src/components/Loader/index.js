import React from "react";
import loading from "../../assets/images/Loading.gif";
import "./style.css";
const Loader = () => {
  return (
    <>
      <div className="fullwidthScrn">
        <img src={loading} alt="loading" />
      </div>
    </>
  );
};

export default Loader;
