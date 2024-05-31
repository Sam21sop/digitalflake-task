import React from "react";
import ReactDOM from "react-dom";
import "./Loader.scss";



const Loader1 = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <div className="--center-all">
      <img src='' alt="Loading..." />
    </div>
  );
};


const Loader = () => {
  return(
    <>
      <h1>loading...</h1>
    </>
  )
}
export default Loader;
