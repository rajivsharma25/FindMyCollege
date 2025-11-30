import React, { useState } from 'react';
import { FaMapMarkerAlt, FaStar, FaRupeeSign, FaGraduationCap, FaFilter, FaChevronDown, FaSearch } from 'react-icons/fa';
import CollegeCard from '../../components/CollegeCard';


const Iits = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Mock Data for IITs
    const iitsData = [
        {
            id: 1,
            name: "Indian Institute of Technology Bombay",
            location: "Mumbai, Maharashtra",
            est: 1958,
            rating: 4.9,
            fees: "2.5L / year",
            avgPackage: "25 LPA",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
            tags: ["NIRF #3", "Public"]
        },
        {
            id: 2,
            name: "Indian Institute of Technology Delhi",
            location: "New Delhi, Delhi",
            est: 1961,
            rating: 4.8,
            fees: "2.5L / year",
            avgPackage: "24 LPA",
            image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=2071&auto=format&fit=crop",
            tags: ["NIRF #2", "Public"]
        },
        {
            id: 3,
            name: "Indian Institute of Technology Madras",
            location: "Chennai, Tamil Nadu",
            est: 1959,
            rating: 4.9,
            fees: "2.1L / year",
            avgPackage: "22 LPA",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
            tags: ["NIRF #1", "Public"]
        },
        {
            id: 4,
            name: "Indian Institute of Technology Kanpur",
            location: "Kanpur, Uttar Pradesh",
            est: 1959,
            rating: 4.7,
            fees: "2.2L / year",
            avgPackage: "20 LPA",
            image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop",
            tags: ["NIRF #4", "Public"]
        },
        {
            id: 5,
            name: "Indian Institute of Technology Kharagpur",
            location: "Kharagpur, West Bengal",
            est: 1951,
            rating: 4.7,
            fees: "2.3L / year",
            avgPackage: "19 LPA",
            image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=2000&auto=format&fit=crop",
            tags: ["NIRF #6", "Public"]
        },
        {
            id: 6,
            name: "Indian Institute of Technology Roorkee",
            location: "Roorkee, Uttarakhand",
            est: 1847,
            rating: 4.6,
            fees: "2.4L / year",
            avgPackage: "18 LPA",
            image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974&auto=format&fit=crop",
            tags: ["NIRF #5", "Public"]
        },
        {
            id: 7,
            name: "Indian Institute of Technology Guwahati",
            location: "Guwahati, Assam",
            est: 1994,
            rating: 4.5,
            fees: "2.6L / year",
            avgPackage: "17 LPA",
            image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2062&auto=format&fit=crop",
            tags: ["NIRF #7", "Public"]
        },
        {
            id: 8,
            name: "Indian Institute of Technology Hyderabad",
            location: "Hyderabad, Telangana",
            est: 2008,
            rating: 4.4,
            fees: "2.2L / year",
            avgPackage: "16 LPA",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
            tags: ["NIRF #8", "Public"]
        },
        {
            id: 9,
            name: "Indian Institute of Technology (BHU) Varanasi",
            location: "Varanasi, Uttar Pradesh",
            est: 1919,
            rating: 4.5,
            fees: "2.3L / year",
            avgPackage: "18 LPA",
            image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1998&auto=format&fit=crop",
            tags: ["NIRF #15", "Public"]
        },
        {
            id: 10,
            name: "Indian Institute of Technology Indore",
            location: "Indore, Madhya Pradesh",
            est: 2009,
            rating: 4.3,
            fees: "2.4L / year",
            avgPackage: "15 LPA",
            image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop",
            tags: ["NIRF #14", "Public"]
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
            const rank = parseInt(rankStr.split('-')[0], 10);
            return isNaN(rank) ? 1000 : rank;
        }
        return 1000;
    };

    const filteredIits = iitsData.filter(iit =>
        iit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        iit.location.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => {
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
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">INDIAN INSTITUTES OF TECHNOLOGY (IITs)</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        The IITs are autonomous public technical universities located across India. They are governed by the Institutes of Technology Act, 1961, which has declared them as institutions of national importance.
                    </p>
                </div>

                {/* Search and Sort */}
                <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="Search IITs by name or location..."
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

                {/* IITs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredIits.map(iit => (
                        <CollegeCard key={iit.id} college={iit} />
                    ))}
                </div>

                {filteredIits.length === 0 && (
                    <div className="text-center py-20 bg-white border border-gray-100">
                        <p className="text-gray-500 text-lg">No IITs found matching your search.</p>
                        <button
                            onClick={() => setSearchTerm('')}
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

export default Iits;
