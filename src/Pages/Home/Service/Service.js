import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, duration, description, img } = service;

  return (
    <Card className="service">
      <Card.Img className="service-image" variant="top" src={img} />
      <Card.Body>
        <div className="d-flex price-time">
          <span> Price: ${price}</span>
          <span> Duration: {duration}</span>
        </div>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description.slice(0, 250)}</Card.Text>
      </Card.Body>
      <Card.Footer className="">
        <Link to={`/booking/${id}`}>
          <button className="btn btn-warning">Get this service</button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Service;
