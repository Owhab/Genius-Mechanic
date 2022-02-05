import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from "../../../imgaes/Slider/Slider1.jpg";
import Slider2 from "../../../imgaes/Slider/Slider2.jpg";
import Slider3 from "../../../imgaes/Slider/Slider3.jpg";
import Slider4 from "../../../imgaes/Slider/Slider4.jpg";
import Slider5 from "../../../imgaes/Slider/Slider5.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Slider1} alt="First slide" />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Slider2} alt="First slide" />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Slider3} alt="First slide" />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Slider4} alt="First slide" />
          <Carousel.Caption>
            <h3>Fourth Slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Slider5} alt="First slide" />
          <Carousel.Caption>
            <h3>Fourth Slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
