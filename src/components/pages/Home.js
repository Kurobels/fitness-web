import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import './Home.css';

function Home() {
  return (
    <>
      <HeroSection />
      <div className="container">
        <div className="content">
          <div className="content_item">
            <div className="image_wrapper">
              <img src="/images/gym1.png" alt="Coffee Bean" />
            </div>
            <div className="info">
              <h1 className="heading">LET’S GET STARTED</h1>
              <p>
                Guest fitness instructors and recruiting new permanent instructors is a fantastic way to keep your workouts fresh and exciting. Keep members motivated with a new spin on your workout and bring in a sought-after fitness instructor. Make the event feel time-sensitive and limited to make it feel like a premium workout option.
              </p>
            </div>
          </div>
          <div className="content_item">
            <div className="image_wrapper">
              <img src="/images/gym2.png" alt="Coffee Barista" />
            </div>
            <div className="info">
              <h1 className="heading">DISCO FITNESS</h1>
              <p>
                Whether you want to sculpt your dream body, improve your body confidence, or ensure healthy aging, we will help you achieve your goals with safe and highly effective programs fully tailored to your needs, fitness level, and experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
