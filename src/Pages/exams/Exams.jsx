import React, { useState } from 'react';
import { FaCalendarAlt, FaEdit, FaDesktop, FaArrowRight } from 'react-icons/fa';

const Exams = () => {
    const [activeCategory, setActiveCategory] = useState('Engineering');

    const categories = ['Engineering', 'Medical', 'Management', 'Law', 'Other'];

    // Mock Data
    const examsData = [
        {
            id: 1,
            name: "JEE Main 2025",
            category: "Engineering",
            conductingBody: "NTA",
            mode: "Online (CBT)",
            status: "Applications Open",
            statusColor: "text-green-600 bg-green-50",
            appDeadline: "Dec 15, 2024",
            examDate: "Jan 24 - Feb 01, 2025",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/JEE_Main_logo.svg/1200px-JEE_Main_logo.svg.png" // Placeholder
        },
        {
            id: 2,
            name: "JEE Advanced 2025",
            category: "Engineering",
            conductingBody: "IIT Kanpur",
            mode: "Online (CBT)",
            status: "Announced",
            statusColor: "text-blue-600 bg-blue-50",
            appDeadline: "May 07, 2025",
            examDate: "May 26, 2025",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/JEE_Advanced_Logo.svg/1200px-JEE_Advanced_Logo.svg.png" // Placeholder
        },
        {
            id: 3,
            name: "NEET UG 2025",
            category: "Medical",
            conductingBody: "NTA",
            mode: "Offline (Pen & Paper)",
            status: "Announced",
            statusColor: "text-blue-600 bg-blue-50",
            appDeadline: "Mar 09, 2025",
            examDate: "May 05, 2025",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/NEET_UG_logo.svg/1200px-NEET_UG_logo.svg.png" // Placeholder
        },
        {
            id: 4,
            name: "BITSAT 2025",
            category: "Engineering",
            conductingBody: "BITS Pilani",
            mode: "Online (CBT)",
            status: "Not Announced",
            statusColor: "text-gray-600 bg-gray-100",
            appDeadline: "Apr 10, 2025",
            examDate: "May 20 - 26, 2025",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png" // Placeholder
        },
        {
            id: 5,
            name: "CAT 2024",
            category: "Management",
            conductingBody: "IIM Calcutta",
            mode: "Online (CBT)",
            status: "Admit Card Out",
            statusColor: "text-orange-600 bg-orange-50",
            appDeadline: "Sep 20, 2024",
            examDate: "Nov 24, 2024",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/IIM_Calcutta_Logo.svg/1200px-IIM_Calcutta_Logo.svg.png" // Placeholder
        },
        {
            id: 6,
            name: "CLAT 2025",
            category: "Law",
            conductingBody: "Consortium of NLUs",
            mode: "Offline",
            status: "Applications Closed",
            statusColor: "text-red-600 bg-red-50",
            appDeadline: "Nov 10, 2024",
            examDate: "Dec 01, 2024",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Consortium_of_NLUs_logo.svg/1200px-Consortium_of_NLUs_logo.svg.png" // Placeholder
        },
        {
            id: 7,
            name: "VITEEE 2025",
            category: "Engineering",
            conductingBody: "VIT Vellore",
            mode: "Online (CBT)",
            status: "Applications Open",
            statusColor: "text-green-600 bg-green-50",
            appDeadline: "Mar 30, 2025",
            examDate: "Apr 19 - 30, 2025",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Vellore_Institute_of_Technology_seal.svg/1200px-Vellore_Institute_of_Technology_seal.svg.png" // Placeholder
        },
        {
            id: 8,
            name: "WBJEE 2025",
            category: "Engineering",
            conductingBody: "WBJEEB",
            mode: "Offline",
            status: "Announced",
            statusColor: "text-blue-600 bg-blue-50",
            appDeadline: "Jan 31, 2025",
            examDate: "Apr 28, 2025",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/West_Bengal_Joint_Entrance_Examinations_Board_Logo.svg/1200px-West_Bengal_Joint_Entrance_Examinations_Board_Logo.svg.png" // Placeholder
        }
    ];

    const filteredExams = examsData.filter(exam => exam.category === activeCategory);

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">ENTRANCE EXAMS</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Get detailed information about top entrance exams, including dates, syllabus, and application process.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 text-sm font-semibold transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-[#CB2027] text-white border-[#CB2027] shadow-md'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#CB2027] hover:text-[#CB2027]'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Exams Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredExams.map((exam) => (
                        <div key={exam.id} className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col overflow-hidden">

                            {/* Card Header */}
                            <div className="p-6 border-b border-gray-50 flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#CB2027] transition-colors mb-1">
                                        {exam.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">{exam.conductingBody}</p>
                                </div>
                                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-sm ${exam.statusColor}`}>
                                    {exam.status}
                                </span>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-grow space-y-4">
                                <div className="flex items-start gap-3">
                                    <FaCalendarAlt className="text-[#CB2027] mt-1 text-sm" />
                                    <div>
                                        <p className="text-xs text-gray-500 font-semibold uppercase">Exam Date</p>
                                        <p className="text-sm text-gray-800 font-medium">{exam.examDate}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaEdit className="text-[#CB2027] mt-1 text-sm" />
                                    <div>
                                        <p className="text-xs text-gray-500 font-semibold uppercase">Application Deadline</p>
                                        <p className="text-sm text-gray-800 font-medium">{exam.appDeadline}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaDesktop className="text-[#CB2027] mt-1 text-sm" />
                                    <div>
                                        <p className="text-xs text-gray-500 font-semibold uppercase">Mode</p>
                                        <p className="text-sm text-gray-800 font-medium">{exam.mode}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="p-4 bg-gray-50 border-t border-gray-100">
                                <button className="w-full flex items-center justify-center gap-2 text-[#CB2027] font-bold text-sm group-hover:gap-3 transition-all">
                                    View Details <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredExams.length === 0 && (
                    <div className="text-center py-20 bg-white border border-gray-100">
                        <p className="text-gray-500 text-lg">No exams found in this category.</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Exams;
