import React, { useState } from 'react';
import { FaMapMarkerAlt, FaStar, FaRupeeSign, FaGraduationCap, FaUniversity } from 'react-icons/fa';

const CollegeCard = ({ college }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col overflow-hidden">
            <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
                {!imageError && college.image ? (
                    <img
                        src={college.image}
                        alt={college.name}
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <FaUniversity className="text-6xl text-gray-200" />
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                    {college.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-black/70 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#CB2027] transition-colors line-clamp-2 min-h-[3.5rem]">
                        {college.name}
                    </h3>
                    <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-sm shrink-0">
                        <span className="text-green-700 font-bold text-xs">{college.rating}</span>
                        <FaStar className="text-green-700 text-[10px]" />
                    </div>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaMapMarkerAlt className="mr-2 text-[#CB2027] shrink-0" />
                    <span className="truncate">{college.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 mt-auto bg-gray-50 p-3 border border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Fees (Approx)</p>
                        <div className="flex items-center font-semibold text-gray-800 text-sm">
                            <FaRupeeSign className="text-xs mr-1" /> {college.fees}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Avg Package</p>
                        <div className="flex items-center font-semibold text-gray-800 text-sm">
                            <FaGraduationCap className="text-xs mr-1" /> {college.avgPackage}
                        </div>
                    </div>
                </div>

                <button className="w-full py-2 bg-white border border-[#CB2027] text-[#CB2027] font-semibold text-sm hover:bg-[#CB2027] hover:text-white transition-all duration-300 uppercase tracking-wide">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default CollegeCard;
