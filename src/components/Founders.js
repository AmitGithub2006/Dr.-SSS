import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";

import founder1 from "../assets/Founder1.jpg";
import founder2 from "../assets/Founder2.jpg";
import founder3 from "../assets/Founder3.jpg";

const Founders = () => {
  const founders = [
    {
      id: 1,
      name: "Dr. Shaitan Singh Shakya", post: "(M.Sc, PhD)", designation: "Founder: Buddhist Education and Welfare Society",
      image: founder1,
    },
    {
      id: 2,
      name: "Smt Sarita Shakya", designation: "President: Buddhist Education and Welfare Society",
      image: founder2,
    },
    {
      id: 3,
      name: "Shri Avneesh Shakya", post: "(Ex. Engineer in Department of Atomic Energy)", designation: "Secretary: Buddhist Education and Welfare Society",
      image: founder3,
    },
  ];

  return (
    <div className="founders-container">
      <h2 className="founders-heading">Our <span>Founders</span></h2>
      <div className="founders-carousel"
      >
        {founders.map((founder) => (
          <div key={founder.id} className="founder-item">
            <img src={founder.image} alt={founder.name} />
            <p className="founder-name">{founder.name} <div>{founder.post}</div></p>
            <p className="founder-designation">{founder.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;