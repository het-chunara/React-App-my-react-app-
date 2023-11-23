import React from "react";
// import "./Nav.css"
// import Seat from './Seat'
// import Counter from './Counter'
import Slider from "./Slider";
// import Footer from "./Footer1";
import Slider2 from "./Slider2";
import "./main.css";

const Main = () => {
  return (
    <div>
      <Slider />
      <div className="delivery">
        <img src="./banner1.avif" alt="dd"></img>
      </div>
      <Slider2 />
      {/* <Footer/> */}
    </div>
  );
};

export default Main;
