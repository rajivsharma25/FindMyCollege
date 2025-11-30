import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalculator, FaSearch, FaUniversity, FaImage, FaChartLine, FaPercentage, FaArrowRight } from 'react-icons/fa';

const Tools = () => {
    const navigate = useNavigate();

    const toolsData = [
        {
            id: 1,
            name: "JEE Main College Predictor",
            description: "Predict your chances of getting into NITs, IIITs, and GFTIs based on your JEE Main rank.",
            icon: <FaUniversity className="text-4xl text-[#CB2027]" />,
            link: "#"
        },
        {
            id: 2,
            name: "NEET Rank Predictor",
            description: "Estimate your All India Rank based on your expected NEET score.",
            icon: <FaChartLine className="text-4xl text-[#CB2027]" />,
            link: "#"
        },
        {
            id: 3,
            name: "College Fee Calculator",
            description: "Calculate the total cost of your education including tuition, hostel, and mess fees.",
            icon: <FaCalculator className="text-4xl text-[#CB2027]" />,
            link: "#"
        },
        {
            id: 4,
            name: "Image Resizer",
            description: "Resize and compress your photos and signatures for online application forms.",
            icon: <FaImage className="text-4xl text-[#CB2027]" />,
            link: "#"
        },
        {
            id: 5,
            name: "GPA to Percentage",
            description: "Convert your CGPA or SGPA to percentage using standard university formulas.",
            icon: <FaPercentage className="text-4xl text-[#CB2027]" />,
            link: "#"
        },
        {
            id: 6,
            name: "College Compare",
            description: "Compare colleges side-by-side on parameters like placement, fees, and ranking.",
            icon: <FaSearch className="text-4xl text-[#CB2027]" />,
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">STUDENT TOOLS</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Simplify your admission journey with our suite of free tools designed to help you make informed decisions.
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toolsData.map((tool) => (
                        <div key={tool.id} className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col items-center text-center">
                            <div className="mb-6 p-4 bg-red-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                                {tool.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#CB2027] transition-colors">
                                {tool.name}
                            </h3>
                            <p className="text-gray-600 mb-8 flex-grow">
                                {tool.description}
                            </p>
                            <button className="flex items-center gap-2 text-[#CB2027] font-bold uppercase text-sm tracking-wider hover:gap-3 transition-all">
                                Try Now <FaArrowRight />
                            </button>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-[#111827] p-10 sm:p-16 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need More Help?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Join our community forum to ask questions and get answers from experts and fellow students.
                        </p>
                        <button
                            onClick={() => navigate('/forum')}
                            className="px-8 py-3 bg-[#CB2027] text-white font-bold uppercase tracking-wider hover:bg-[#b01c22] transition-colors shadow-lg"
                        >
                            Visit Forum
                        </button>
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#CB2027] opacity-10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
                </div>

            </div>
        </div>
    );
};

export default Tools;
