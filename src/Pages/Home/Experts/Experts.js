import React from "react";

import mechanic1 from "../../../imgaes/mechanic1.jpg";
import mechanic2 from "../../../imgaes/mechanic2.jpg";
import mechanic3 from "../../../imgaes/mechanic3.jpg";
import mechanic4 from "../../../imgaes/mechanic4.jpg";
import mechanic5 from "../../../imgaes/mechanic5.jpg";
import Expert from "../Expert/Expert";

const experts = [
  {
    img: mechanic1,
    name: "Sher Shah",
    job: "Car Repairing",
  },

  {
    img: mechanic2,
    name: "Rabi Shankar",
    job: "Oil Checker",
  },

  {
    img: mechanic3,
    name: "Suzon Molla",
    job: "Car Cleaner",
  },
  {
    img: mechanic4,
    name: "Zulfiqur Ali",
    job: "Manager",
  },
  {
    img: mechanic5,
    name: "Suruz Ali",
    job: "Car Checker",
  },
];

const Experts = () => {
  return (
    <div className="mt-5">
      <h1>Our Experts</h1>
      <div className="row m-1">
        {experts.map((expert) => (
          <Expert key={expert.name} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
