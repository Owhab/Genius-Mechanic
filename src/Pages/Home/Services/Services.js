import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import data from "./services.JSON";
import "./Services.css";
import { CardGroup } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(data)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-5">
      <h1>Services</h1>

      <CardGroup className="service-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </CardGroup>
    </div>
  );
};

export default Services;
