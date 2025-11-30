import React, { useState } from 'react';
import { FaFilter, FaChevronDown, FaSearch } from 'react-icons/fa';
import CollegeCard from '../../Components/CollegeCard';
import { assets } from '../../assets/assets';

const Maharashtra = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('rating-high-low');

    // Mock Data for Maharashtra
    const collegesData = [
        {
            id: 1,
            name: "Indian Institute of Technology Bombay",
            location: "Mumbai, Maharashtra",
            type: "IIT",
            rating: 4.9,
            fees: "2.5L / year",
            avgPackage: "25 LPA",
            image: assets.iit_bombay,
            tags: ["NIRF #3", "Public"]
        },
        {
            id: 2,
            name: "College of Engineering Pune (COEP)",
            location: "Pune, Maharashtra",
            type: "Public",
            rating: 4.6,
            fees: "1.8L / year",
            avgPackage: "12 LPA",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
            tags: ["NIRF #73", "Public"]
        },
        {
            id: 3,
            name: "Visvesvaraya National Institute of Technology (VNIT)",
            location: "Nagpur, Maharashtra",
            type: "NIT",
            rating: 4.5,
            fees: "1.5L / year",
            avgPackage: "10 LPA",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
            tags: ["NIRF #41", "Public"]
        },
        {
            id: 4,
            name: "Institute of Chemical Technology (ICT)",
            location: "Mumbai, Maharashtra",
            type: "Public",
            rating: 4.7,
            fees: "85K / year",
            avgPackage: "8 LPA",
            image: "https://images.unsplash.com/photo-1592280771884-1380839bc3a0?q=80&w=2084&auto=format&fit=crop",
            tags: ["NIRF #24", "Public"]
        }
    ];

    // Helper functions for sorting
    const parseFees = (feeString) => {
        if (feeString.includes('L')) {
            return parseFloat(feeString.replace('L / year', '')) * 100000;
        } else if (feeString.includes('K')) {
            return parseFloat(feeString.replace('K / year', '')) * 1000;
        }
        return 0;
    };

    const parsePackage = (packageString) => {
        return parseFloat(packageString.replace(' LPA', '')) * 100000;
    };

    const filteredColleges = collegesData.filter(college => {
        const searchMatch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            college.location.toLowerCase().includes(searchTerm.toLowerCase());
        return searchMatch;
    }).sort((a, b) => {
        switch (sortBy) {
            case 'rating-high-low':
                return b.rating - a.rating;
            case 'fees-low-high':
                return parseFees(a.fees) - parseFees(b.fees);
            case 'fees-high-low':
                return parseFees(b.fees) - parseFees(a.fees);
            case 'package-high-low':
                return parsePackage(b.avgPackage) - parsePackage(a.avgPackage);
            default:
                return 0;
        }
    });

    const sortOptions = [
        { value: 'rating-high-low', label: 'Rating: High to Low' },
        { value: 'fees-low-high', label: 'Fees: Low to High' },
        { value: 'fees-high-low', label: 'Fees: High to Low' },
        { value: 'package-high-low', label: 'Avg Package: High to Low' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">COLLEGES IN MAHARASHTRA</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Top engineering colleges in Maharashtra.
                    </p>
                </div>

                {/* Search and Sort */}
                <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="Search colleges..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-[#CB2027] focus:ring-1 focus:ring-[#CB2027] shadow-sm transition-all"
                        />
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <div className="w-full md:w-64">
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full pl-4 pr-10 py-3 border border-gray-300 focus:outline-none focus:border-[#CB2027] focus:ring-1 focus:ring-[#CB2027] shadow-sm appearance-none bg-white cursor-pointer"
                            >
                                {sortOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* College Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredColleges.map(college => (
                        <CollegeCard key={college.id} college={college} />
                    ))}
                </div>

                {filteredColleges.length === 0 && (
                    <div className="text-center py-20 bg-white border border-gray-100">
                        <p className="text-gray-500 text-lg">No colleges found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchTerm(''); }}
                            className="mt-4 text-[#CB2027] font-semibold hover:underline"
                        >
                            Clear Search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Maharashtra;
