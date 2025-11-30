import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const updates = [
    {
        title: "COMEDK UGET 2025: Exam Postponed",
        description: "The COMEDK UGET 2025 exam has been postponed in specific test centres including cities in Gujarat, Haryana, Jammu and Kashmir.",
        tag: "Exam Alert",
        time: "2 hours ago"
    },
    {
        title: "IIITH UGEE 2025 Result Out",
        description: "IIITH UGEE 2025 result declared! Check if you are shortlisted for the online interviews(June 4-6, 2025). Know the cutoffs and next steps.",
        tag: "Result",
        time: "5 hours ago"
    },
    {
        title: "TG EAPCET 2025 Response Sheet",
        description: "TG EAPCET 2025 Engineering response sheets are now available for download. Get the direct link and check your performance.",
        tag: "Response Sheet",
        time: "Yesterday"
    },
    {
        title: "AP EAPCET 2025 Correction Window",
        description: "AP EAPCET 2025 application correction window is open! JNTUK allows edits for Category-I (via email) and Category-II (online) errors.",
        tag: "Application",
        time: "Yesterday"
    },
    {
        title: "TG EAPCET 2025 Answer Keys",
        description: "Download the official TG EAPCET 2025 Preliminary Answer Key for Engineering (released by JNTUH). Check dates to challenge the key.",
        tag: "Answer Key",
        time: "2 days ago"
    },
    {
        title: "GUJCET 2025: Result Declared",
        description: "Gujarat Secondary and Higher Secondary Education Board (GSEB) has declared the result of Gujarat Common Entrance Test 2025.",
        tag: "Result",
        time: "3 days ago"
    }
];

export default function UpdateSection() {
    return (
        <div className='py-12 bg-gray-50 px-4 sm:px-6'>
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className='flex flex-col items-center justify-center gap-2 w-full text-center mb-4'>
                    <h2 className='text-2xl sm:text-3xl font-semibold'>LATEST UPDATES</h2>
                    <hr className='bg-red-700 w-16 h-1' />
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
                    Stay informed with the latest news, exam notifications, and important updates from the education world.
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {updates.map((item, index) => (
                        <div key={index} className="bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 flex flex-col h-full group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 bg-red-50 text-[#CB2027] text-xs font-semibold uppercase tracking-wider rounded-md">
                                    {item.tag}
                                </span>
                                <span className="text-gray-400 text-xs">{item.time}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#CB2027] transition-colors line-clamp-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                {item.description}
                            </p>

                            <div className="flex items-center text-[#CB2027] font-semibold text-sm group/link pt-4 border-t border-gray-100">
                                Read More
                                <FaArrowRight className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}

                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-12">
                    <button className="bg-[#CB2027] text-white px-8 py-3 font-semibold hover:bg-[#b01b21] transition-colors flex items-center gap-2 shadow-md hover:shadow-lg">
                        View All Updates
                        <FaArrowRight className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    )
}
