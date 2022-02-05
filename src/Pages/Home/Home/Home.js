import React from "react";
import Experts from "../Experts/Experts";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Services></Services>
      <Experts></Experts>
    </div>
  );
};

export default Home;
