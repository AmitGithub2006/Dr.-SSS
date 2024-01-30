// Mentors.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";

import mentor1Image from "../assets/mentor1.jpeg";
import mentor2Image from "../assets/mentor2.jpeg";
import mentor3Image from "../assets/mentor3.jpeg";
import mentor4Image from "../assets/mentor4.jpeg";

const Mentors = () => {
  const mentors = [
    { id: 1, name: "DHARMENDRA SINGH", image: mentor1Image },
    { id: 2, name: "DR. DEEPANKAR SHARMA", image: mentor2Image },
    { id: 3, name: "DR. RITA BAKSHI", image: mentor3Image },
    { id: 4, name: "MAJ GEN M S SANDHU", image: mentor4Image },
  ];

  return (
    <div className="mentors-container">
      <h2 className="mentors-heading">Our <span>Mentors</span></h2>
      <Carousel
      infiniteLoop
      autoPlay
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={33.33}
        showIndicators={false}
      >
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-item">
            <img src={mentor.image} alt={mentor.name} />
            <p className="mentor-name">{mentor.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Mentors;
