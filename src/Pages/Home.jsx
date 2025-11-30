import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import Features from '../Components/Features';
import UpdateSection from '../Components/UpdateSection';
import TopColleges from '../Components/TopColleges';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Features />
      <UpdateSection />
      <TopColleges />
    </div>
  );
};

export default Home;
