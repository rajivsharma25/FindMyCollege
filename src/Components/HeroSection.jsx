
import React, { useState, useEffect } from 'react';
import { LuSearch } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { assets } from '../assets/assets';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: assets.hero_bg,
      title: "Explore Colleges, Exams & Courses",
      subtitle: "Find the best colleges and courses for your career."
    },
    {
      id: 2,
      image: assets.hero_slide_2,
      title: "Your Gateway to Top Institutes",
      subtitle: "Get detailed information about admissions and cutoffs."
    },
    {
      id: 3,
      image: assets.hero_slide_3,
      title: "Shape Your Future Today",
      subtitle: "Discover scholarship opportunities and campus life."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full h-[70vh] lg:h-[80vh] relative overflow-hidden group">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[5000ms] scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-wide font-bold drop-shadow-lg mb-4 animate-fadeInUp">
              {slide.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fadeInUp delay-200">
              {slide.subtitle}
            </p>

            {/* Search Bar (Only on first slide or all? Keeping it on all for utility) */}
            <div className="flex items-center bg-white overflow-hidden w-full sm:max-w-2xl shadow-2xl animate-fadeInUp delay-400 rounded-sm">
              <div className="pl-4 text-gray-500">
                <LuSearch className="text-xl" />
              </div>
              <input
                type="text"
                placeholder="Search for Colleges, Courses or Exams"
                className="w-full py-4 px-4 outline-none text-black placeholder-gray-500"
              />
              <button className="bg-[#CB2027] text-white px-8 py-4 font-medium hover:bg-[#a0191f] transition-colors duration-300">
                Search
              </button>
            </div>

            {/* Top Searches */}
            <div className="mt-6 flex flex-wrap justify-center items-center gap-2 text-sm sm:text-base animate-fadeInUp delay-500">
              <span className="text-gray-300 font-medium">Top Searches:</span>
              <div className="flex flex-wrap justify-center gap-2">
                {['JEE Main', 'IIT Bombay', 'BITSAT', 'Computer Science', 'MBA'].map((term, i) => (
                  <span key={i} className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded backdrop-blur-sm cursor-pointer transition-colors border border-white/20">
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-6 h-1 transition-all duration-300 ${index === currentSlide ? 'bg-[#CB2027] w-8' : 'bg-white/50 hover:bg-white'
              }`}
          />
        ))}
      </div>

    </div>
  );
}

export default HeroSection
