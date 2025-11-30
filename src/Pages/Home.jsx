import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Features from '../components/Features';
import UpdateSection from '../components/UpdateSection';
import TopColleges from '../components/TopColleges';

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
