import React, { useState } from 'react';
import { FaSearch, FaFilter, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';

const CollegeFinder = () => {
    const [filters, setFilters] = useState({
        state: '',
        course: '',
        exam: ''
    });

    // Mock Data
    const colleges = [
        { id: 1, name: "Indian Institute of Technology, Bombay", location: "Mumbai, Maharashtra", course: "B.Tech", exam: "JEE Advanced" },
        { id: 2, name: "National Institute of Technology, Trichy", location: "Tiruchirappalli, Tamil Nadu", course: "B.Tech", exam: "JEE Main" },
        { id: 3, name: "Delhi Technological University", location: "New Delhi, Delhi", course: "B.Tech", exam: "JAC Delhi" },
        { id: 4, name: "Birla Institute of Technology and Science, Pilani", location: "Pilani, Rajasthan", course: "B.E.", exam: "BITSAT" },
        { id: 5, name: "Jadavpur University", location: "Kolkata, West Bengal", course: "B.E.", exam: "WBJEE" },
    ];

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">COLLEGE FINDER</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find your dream college based on your preferences. Filter by state, course, and entrance exam.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className="lg:w-1/4">
                        <div className="bg-white p-6 shadow-sm border border-gray-100 sticky top-24">
                            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                                <FaFilter className="text-[#CB2027]" />
                                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                                    <select name="state" onChange={handleFilterChange} className="w-full p-2 border border-gray-200 rounded-sm focus:outline-none focus:border-[#CB2027]">
                                        <option value="">All States</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                                    <select name="course" onChange={handleFilterChange} className="w-full p-2 border border-gray-200 rounded-sm focus:outline-none focus:border-[#CB2027]">
                                        <option value="">All Courses</option>
                                        <option value="B.Tech">B.Tech</option>
                                        <option value="B.E.">B.E.</option>
                                        <option value="MBBS">MBBS</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Exam</label>
                                    <select name="exam" onChange={handleFilterChange} className="w-full p-2 border border-gray-200 rounded-sm focus:outline-none focus:border-[#CB2027]">
                                        <option value="">All Exams</option>
                                        <option value="JEE Main">JEE Main</option>
                                        <option value="JEE Advanced">JEE Advanced</option>
                                        <option value="BITSAT">BITSAT</option>
                                    </select>
                                </div>
                                <button className="w-full py-2 bg-[#CB2027] text-white font-bold uppercase text-sm tracking-wider hover:bg-[#b01c22] transition-colors shadow-md">
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="lg:w-3/4 space-y-4">
                        {colleges.map(college => (
                            <div key={college.id} className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-red-50 text-[#CB2027] rounded-full shrink-0">
                                        <FaUniversity className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 hover:text-[#CB2027] transition-colors cursor-pointer">{college.name}</h3>
                                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                                            <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-gray-400" /> {college.location}</span>
                                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-sm">{college.course}</span>
                                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-sm">{college.exam}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="px-6 py-2 border border-[#CB2027] text-[#CB2027] font-bold text-sm uppercase hover:bg-[#CB2027] hover:text-white transition-all whitespace-nowrap">
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeFinder;
