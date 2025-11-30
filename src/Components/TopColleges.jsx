import React, { useRef, useState, useEffect } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaLocationDot } from "react-icons/fa6";
import { assets } from "../assets/assets";

const TopColleges = () => {
    const colleges = [
        { title: "IIT BOMBAY", img: assets.iit_bombay, location: "Mumbai, Maharashtra" },
        { title: "IIT DELHI", img: assets.iit_delhi, location: "New Delhi, Delhi" },
        { title: "IIT (BHU) VARANASI", img: assets.iit_bhu, location: "Varanasi, Uttar Pradesh" },
        { title: "NIT WARANGAL", img: assets.nit_warangal, location: "Warangal, Telangana" },
        { title: "IISC BANGALORE", img: assets.iisc, location: "Bengaluru, Karnataka" },
        { title: "DTU DELHI", img: assets.dtu, location: "New Delhi, Delhi" },
        { title: "BIT MESRA", img: assets.bit_mesra, location: "Ranchi, Jharkhand" },
        { title: "NIT TIRUCHIRAPPALLI", img: assets.nit_tir, location: "Tiruchirappalli, Tamil Nadu" },
        { title: "IIIT ALLAHABAD", img: assets.iiit_allahabad, location: "Prayagraj, Uttar Pradesh" },
    ];

    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const updateArrows = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener('scroll', updateArrows);
            updateArrows(); // Initial check
            window.addEventListener('resize', updateArrows);
            return () => {
                ref.removeEventListener('scroll', updateArrows);
                window.removeEventListener('resize', updateArrows);
            };
        }
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth; // Scroll one full view width
            const scrollTo = direction === 'left'
                ? scrollRef.current.scrollLeft - scrollAmount
                : scrollRef.current.scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="py-12 bg-white px-4 sm:px-6">
            <div className="max-w-7xl mx-auto relative group/container">
                {/* Header */}
                <div className='flex flex-col items-center justify-center gap-2 w-full text-center mb-4'>
                    <h2 className='text-2xl sm:text-3xl font-semibold'>TOP COLLEGES</h2>
                    <hr className='bg-red-700 w-16 h-1' />
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
                    Discover India's premier institutes for engineering and technology.
                </p>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    {showLeftArrow && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-[#CB2027] hover:text-white transition-all duration-300 border border-gray-100 hidden md:flex"
                        >
                            <FaChevronLeft className="text-lg" />
                        </button>
                    )}

                    {/* Scrollable Grid */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 scrollbar-hide pb-4 snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {colleges.map((college, index) => (
                            <div
                                key={index}
                                className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start group bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden flex-shrink-0"
                            >
                                {/* Image Container */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={college.img}
                                        alt={college.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#CB2027] transition-colors">
                                        {college.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                                        <FaLocationDot className="text-red-500 text-base" />
                                        {college.location}
                                    </p>

                                    <hr className="border-gray-100 mb-4" />

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                                            View Details
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-[#CB2027] transition-colors duration-300">
                                            <FaArrowRight className="text-[#CB2027] text-sm group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    {showRightArrow && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-[#CB2027] hover:text-white transition-all duration-300 border border-gray-100 hidden md:flex"
                        >
                            <FaChevronRight className="text-lg" />
                        </button>
                    )}
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-12">
                    <button className="bg-[#CB2027] text-white px-8 py-3 font-semibold hover:bg-[#b01b21] transition-colors flex items-center gap-2 shadow-md hover:shadow-lg">
                        View All Colleges
                        <FaArrowRight className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopColleges;
