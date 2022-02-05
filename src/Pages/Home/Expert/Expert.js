import React from "react";
import { Card } from "react-bootstrap";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { img, name, job } = expert;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 expert">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Expertize: {job}</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Expert;
