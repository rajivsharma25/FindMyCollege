import React, { useState } from 'react';
import { FaFilter, FaChevronDown, FaSearch } from 'react-icons/fa';
import CollegeCard from '../../Components/CollegeCard';
import { assets } from '../../assets/assets';

const Colleges = () => {
    const [selectedState, setSelectedState] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
    const [showFilters, setShowFilters] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Mock Data
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
            name: "Indian Institute of Technology Delhi",
            location: "New Delhi, Delhi",
            type: "IIT",
            rating: 4.8,
            fees: "2.5L / year",
            avgPackage: "24 LPA",
            image: assets.iit_delhi,
            tags: ["NIRF #2", "Public"]
        },
        {
            id: 3,
            name: "Birla Institute of Technology and Science",
            location: "Pilani, Rajasthan",
            type: "Private",
            rating: 4.7,
            fees: "5.5L / year",
            avgPackage: "20 LPA",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop", // Placeholder
            tags: ["NIRF #20", "Private"]
        },
        {
            id: 4,
            name: "National Institute of Technology Trichy",
            location: "Tiruchirappalli, Tamil Nadu",
            type: "NIT",
            rating: 4.6,
            fees: "1.8L / year",
            avgPackage: "15 LPA",
            image: assets.nit_tir,
            tags: ["NIRF #9", "Public"]
        },
        {
            id: 5,
            name: "Indian Institute of Technology (BHU)",
            location: "Varanasi, Uttar Pradesh",
            type: "IIT",
            rating: 4.7,
            fees: "2.3L / year",
            avgPackage: "22 LPA",
            image: assets.iit_bhu,
            tags: ["NIRF #15", "Public"]
        },
        {
            id: 6,
            name: "Vellore Institute of Technology",
            location: "Vellore, Tamil Nadu",
            type: "Private",
            rating: 4.5,
            fees: "4.0L / year",
            avgPackage: "10 LPA",
            image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=2071&auto=format&fit=crop", // Placeholder
            tags: ["NIRF #8", "Private"]
        },
        {
            id: 7,
            name: "National Institute of Technology Warangal",
            location: "Warangal, Telangana",
            type: "NIT",
            rating: 4.6,
            fees: "1.8L / year",
            avgPackage: "16 LPA",
            image: assets.nit_warangal,
            tags: ["NIRF #21", "Public"]
        },
        {
            id: 8,
            name: "Indian Institute of Science",
            location: "Bengaluru, Karnataka",
            type: "Other",
            rating: 5.0,
            fees: "50K / year",
            avgPackage: "30 LPA",
            image: assets.iisc,
            tags: ["NIRF #1", "Public"]
        },
        {
            id: 9,
            name: "IIIT Hyderabad",
            location: "Hyderabad, Telangana",
            type: "IIIT",
            rating: 4.8,
            fees: "3.0L / year",
            avgPackage: "30 LPA",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
            tags: ["NIRF #55", "Private"]
        },
        {
            id: 10,
            name: "IIIT Bangalore",
            location: "Bangalore, Karnataka",
            type: "IIIT",
            rating: 4.7,
            fees: "2.8L / year",
            avgPackage: "25 LPA",
            image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=2071&auto=format&fit=crop",
            tags: ["NIRF #74", "Private"]
        },
        {
            id: 11,
            name: "IIIT Delhi",
            location: "New Delhi, Delhi",
            type: "IIIT",
            rating: 4.7,
            fees: "4.0L / year",
            avgPackage: "22 LPA",
            image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974&auto=format&fit=crop",
            tags: ["NIRF #75", "State Govt"]
        },
        {
            id: 12,
            name: "IISER Pune",
            location: "Pune, Maharashtra",
            type: "IISER",
            rating: 4.8,
            fees: "90K / year",
            avgPackage: "11 LPA",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
            tags: ["NIRF #27", "Public"]
        },
        {
            id: 13,
            name: "IISER Kolkata",
            location: "Mohanpur, West Bengal",
            type: "IISER",
            rating: 4.7,
            fees: "85K / year",
            avgPackage: "10 LPA",
            image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=2071&auto=format&fit=crop",
            tags: ["NIRF #43", "Public"]
        },
        {
            id: 14,
            name: "IISER Mohali",
            location: "Mohali, Punjab",
            type: "IISER",
            rating: 4.6,
            fees: "88K / year",
            avgPackage: "9 LPA",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
            tags: ["NIRF #51", "Public"]
        }
    ];

    const [sortBy, setSortBy] = useState('rating-high-low');

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

    const parseNirfRank = (tags) => {
        const nirfTag = tags.find(tag => tag.startsWith('NIRF #'));
        if (nirfTag) {
            const rankStr = nirfTag.replace('NIRF #', '');
            // Handle ranges like "101-150" by taking the start
            const rank = parseInt(rankStr.split('-')[0], 10);
            return isNaN(rank) ? 1000 : rank;
        }
        return 1000; // Default to high number if no NIRF tag
    };

    const filteredColleges = collegesData.filter(college => {
        const stateMatch = selectedState === 'All' || college.location.includes(selectedState);
        const typeMatch = selectedType === 'All' || college.type === selectedType;
        const searchMatch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            college.location.toLowerCase().includes(searchTerm.toLowerCase());
        return stateMatch && typeMatch && searchMatch;
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
            case 'nirf-low-high':
                return parseNirfRank(a.tags) - parseNirfRank(b.tags);
            default:
                return 0;
        }
    });

    const states = ['All', 'Maharashtra', 'Delhi', 'Rajasthan', 'Tamil Nadu', 'Uttar Pradesh', 'Telangana', 'Karnataka', 'West Bengal', 'Punjab'];
    const types = ['All', 'IIT', 'NIT', 'IIIT', 'IISER', 'Private', 'Other'];
    const sortOptions = [
        { value: 'rating-high-low', label: 'Rating: High to Low' },
        { value: 'fees-low-high', label: 'Fees: Low to High' },
        { value: 'fees-high-low', label: 'Fees: High to Low' },
        { value: 'package-high-low', label: 'Avg Package: High to Low' },
        { value: 'nirf-low-high', label: 'NIRF Rank: High to Low' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">EXPLORE COLLEGES</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore the best engineering institutes in India. Filter by state, type, and more to find your dream college.
                    </p>
                </div>

                {/* Search and Sort */}
                <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="Search colleges by name or location..."
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

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Mobile Filter Toggle */}
                    <button
                        className="lg:hidden flex items-center justify-center gap-2 bg-white p-3 shadow-sm border border-gray-200 text-gray-700 font-semibold"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <FaFilter /> Filters <FaChevronDown className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Sidebar Filters */}
                    <div className={`lg:w-1/4 space-y-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>

                        {/* State Filter */}
                        <div className="bg-white p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">State</h3>
                            <div className="space-y-2">
                                {states.map(state => (
                                    <label key={state} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="state"
                                            checked={selectedState === state}
                                            onChange={() => setSelectedState(state)}
                                            className="w-4 h-4 text-[#CB2027] focus:ring-[#CB2027] border-gray-300"
                                        />
                                        <span className={`text-sm group-hover:text-[#CB2027] transition-colors ${selectedState === state ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                                            {state}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Type Filter */}
                        <div className="bg-white p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">Institute Type</h3>
                            <div className="space-y-2">
                                {types.map(type => (
                                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="type"
                                            checked={selectedType === type}
                                            onChange={() => setSelectedType(type)}
                                            className="w-4 h-4 text-[#CB2027] focus:ring-[#CB2027] border-gray-300"
                                        />
                                        <span className={`text-sm group-hover:text-[#CB2027] transition-colors ${selectedType === type ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                                            {type}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* College Grid */}
                    <div className="lg:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredColleges.map(college => (
                                <CollegeCard key={college.id} college={college} />
                            ))}
                        </div>

                        {filteredColleges.length === 0 && (
                            <div className="text-center py-20 bg-white border border-gray-100">
                                <p className="text-gray-500 text-lg">No colleges found matching your criteria.</p>
                                <button
                                    onClick={() => { setSelectedState('All'); setSelectedType('All'); setSearchTerm(''); }}
                                    className="mt-4 text-[#CB2027] font-semibold hover:underline"
                                >
                                    Clear Filters & Search
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Colleges;
