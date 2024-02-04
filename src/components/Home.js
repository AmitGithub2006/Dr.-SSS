import React from 'react';
import Carousel from "./Carousel";
import Founders from './Founders';
import UsefulLinks from './UsefulLinks';
import Footer from './Footer';

function Home() {
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div className="full-name">
        WELCOME TO <span>DR. SHAITAN SINGH SHAKYA COLLEGE OF PHARMACY</span>
      </div>
      <div>
        <Founders />
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