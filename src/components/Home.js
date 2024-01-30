import React from 'react';
import Carousel from "./Carousel";
import Mentors from './Mentors';
import UsefulLinks from './UsefulLinks';
import Footer from './Footer';

function Home() {
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div className="full-name">
        WELCOME TO <span>DR. SHAITAN SINGH SHAKYA NURSING COLLEGE</span>
      </div>
      <div>
        <Mentors />
      </div>
      <div>
        <UsefulLinks />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home