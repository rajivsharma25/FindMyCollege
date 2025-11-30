import React, { useState } from 'react';
import { FaCalendarCheck, FaUniversity, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const Admissions = () => {
    const [activeStatus, setActiveStatus] = useState('Ongoing');

    const statuses = ['Ongoing', 'Upcoming', 'Closed'];

    // Mock Data
    const admissionsData = [
        {
            id: 1,
            institute: "Indian Institute of Technology (IIT) Madras",
            course: "BS in Data Science & Applications",
            status: "Ongoing",
            deadline: "Jan 15, 2025",
            eligibility: "Class 12 Pass (Any Stream) with English and Maths at Class 10 level.",
            fee: "₹3,000",
            link: "#",
            tags: ["Online Degree", "No JEE Required"]
        },
        {
            id: 2,
            institute: "Birla Institute of Technology and Science (BITS) Pilani",
            course: "MBA in Business Analytics",
            status: "Ongoing",
            deadline: "Dec 30, 2024",
            eligibility: "Bachelor's Degree with min 60% marks.",
            fee: "₹3,500",
            link: "#",
            tags: ["Work Integrated", "Online"]
        },
        {
            id: 3,
            institute: "Vellore Institute of Technology (VIT)",
            course: "B.Tech Admissions 2025",
            status: "Upcoming",
            deadline: "Mar 30, 2025",
            eligibility: "Class 12 with Physics, Chemistry, Maths/Biology.",
            fee: "₹1,350",
            link: "#",
            tags: ["VITEEE 2025", "Engineering"]
        },
        {
            id: 4,
            institute: "Indian Institute of Management (IIM) Bangalore",
            course: "Post Graduate Programme in Management (PGP)",
            status: "Closed",
            deadline: "Sep 20, 2024",
            eligibility: "Bachelor's Degree with valid CAT 2024 score.",
            fee: "₹2,500",
            link: "#",
            tags: ["MBA", "CAT 2024"]
        },
        {
            id: 5,
            institute: "Symbiosis International University",
            course: "BBA / BCA / BA / B.Sc",
            status: "Ongoing",
            deadline: "Nov 22, 2024",
            eligibility: "Class 12 Pass from recognized board.",
            fee: "₹2,250",
            link: "#",
            tags: ["SET 2025", "Undergraduate"]
        },
        {
            id: 6,
            institute: "National Law School of India University (NLSIU)",
            course: "BA LLB (Hons)",
            status: "Closed",
            deadline: "Nov 10, 2024",
            eligibility: "Class 12 Pass with 45% marks.",
            fee: "₹4,000",
            link: "#",
            tags: ["CLAT 2025", "Law"]
        }
    ];

    const filteredAdmissions = admissionsData.filter(item => item.status === activeStatus);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Ongoing': return 'bg-green-100 text-green-700 border-green-200';
            case 'Upcoming': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'Closed': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">ADMISSION ALERTS</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Track the latest admission notifications, application deadlines, and eligibility criteria for top courses.
                    </p>
                </div>

                {/* Status Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-white shadow-sm p-1 border border-gray-200">
                        {statuses.map((status) => (
                            <button
                                key={status}
                                onClick={() => setActiveStatus(status)}
                                className={`px-6 py-2 text-sm font-semibold transition-all duration-300 ${activeStatus === status
                                        ? 'bg-[#CB2027] text-white shadow-sm'
                                        : 'text-gray-600 hover:text-[#CB2027]'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Admissions List */}
                <div className="space-y-6">
                    {filteredAdmissions.map((item) => (
                        <div key={item.id} className="bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden group">
                            <div className="flex flex-col md:flex-row">

                                {/* Left Section: Info */}
                                <div className="p-6 md:w-3/4 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-sm border ${getStatusColor(item.status)}`}>
                                                {item.status}
                                            </span>
                                            {item.tags.map((tag, index) => (
                                                <span key={index} className="text-[10px] font-bold uppercase px-2 py-1 rounded-sm bg-gray-100 text-gray-600 border border-gray-200">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#CB2027] transition-colors mb-1">
                                            {item.course}
                                        </h3>
                                        <div className="flex items-center text-gray-600 font-medium mb-4">
                                            <FaUniversity className="mr-2 text-gray-400" />
                                            {item.institute}
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-sm border border-gray-100">
                                            <div>
                                                <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Eligibility</p>
                                                <p className="line-clamp-2">{item.eligibility}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Application Fee</p>
                                                <p>{item.fee}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Section: Dates & Action */}
                                <div className="p-6 md:w-1/4 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col justify-center items-center text-center">
                                    <div className="mb-4">
                                        <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Deadline</p>
                                        <div className="flex items-center justify-center gap-2 text-[#CB2027] font-bold text-lg">
                                            <FaCalendarCheck />
                                            {item.deadline}
                                        </div>
                                    </div>
                                    <button className="w-full py-2 bg-[#CB2027] text-white font-semibold text-sm hover:bg-[#b01c22] transition-colors shadow-sm flex items-center justify-center gap-2">
                                        View Details <FaExternalLinkAlt className="text-xs" />
                                    </button>
                                    <button className="mt-3 text-xs text-gray-500 hover:text-[#CB2027] flex items-center gap-1 transition-colors">
                                        <FaInfoCircle /> More Info
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}

                    {filteredAdmissions.length === 0 && (
                        <div className="text-center py-20 bg-white border border-gray-100">
                            <p className="text-gray-500 text-lg">No {activeStatus.toLowerCase()} admissions found.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Admissions;
