import React from 'react';
import { FaGraduationCap, FaBook, FaLaptopCode, FaStethoscope, FaBalanceScale, FaChartLine, FaPalette, FaFlask } from 'react-icons/fa';

const Courses = () => {
    const courses = [
        {
            id: 1,
            title: "Engineering (B.Tech/B.E)",
            duration: "4 Years",
            description: "Bachelor of Technology is the most popular undergraduate engineering degree.",
            icon: <FaLaptopCode className="text-4xl text-[#CB2027]" />,
            specializations: ["Computer Science", "Electronics", "Mechanical", "Civil"]
        },
        {
            id: 2,
            title: "Medical (MBBS)",
            duration: "5.5 Years",
            description: "Bachelor of Medicine, Bachelor of Surgery is the primary medical degree.",
            icon: <FaStethoscope className="text-4xl text-[#CB2027]" />,
            specializations: ["General Medicine", "Surgery", "Pediatrics"]
        },
        {
            id: 3,
            title: "Management (MBA/BBA)",
            duration: "2-3 Years",
            description: "Degrees in Business Administration focus on management and leadership skills.",
            icon: <FaChartLine className="text-4xl text-[#CB2027]" />,
            specializations: ["Finance", "Marketing", "HR", "Operations"]
        },
        {
            id: 4,
            title: "Science (B.Sc/M.Sc)",
            duration: "3-2 Years",
            description: "Bachelor and Master of Science degrees for pure and applied sciences.",
            icon: <FaFlask className="text-4xl text-[#CB2027]" />,
            specializations: ["Physics", "Chemistry", "Mathematics", "Biology"]
        },
        {
            id: 5,
            title: "Law (LLB/BA LLB)",
            duration: "3-5 Years",
            description: "Law degrees for aspiring lawyers and legal professionals.",
            icon: <FaBalanceScale className="text-4xl text-[#CB2027]" />,
            specializations: ["Corporate Law", "Criminal Law", "Civil Law"]
        },
        {
            id: 6,
            title: "Arts & Humanities (BA/MA)",
            duration: "3-2 Years",
            description: "Degrees in liberal arts, social sciences, and humanities.",
            icon: <FaBook className="text-4xl text-[#CB2027]" />,
            specializations: ["History", "Political Science", "Psychology", "English"]
        },
        {
            id: 7,
            title: "Design (B.Des/M.Des)",
            duration: "4 Years",
            description: "Degrees for creative fields like fashion, product, and graphic design.",
            icon: <FaPalette className="text-4xl text-[#CB2027]" />,
            specializations: ["Fashion Design", "Product Design", "Graphic Design"]
        },
        {
            id: 8,
            title: "Architecture (B.Arch)",
            duration: "5 Years",
            description: "Undergraduate degree for aspiring architects.",
            icon: <FaGraduationCap className="text-4xl text-[#CB2027]" />,
            specializations: ["Urban Planning", "Landscape Architecture", "Interior Design"]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">POPULAR COURSES</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore a wide range of undergraduate and postgraduate courses across various disciplines to shape your future career.
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map(course => (
                        <div key={course.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 group">
                            <div className="p-8">
                                <div className="mb-6 bg-red-50 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {course.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                                <p className="text-sm text-[#CB2027] font-semibold mb-4">{course.duration}</p>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {course.description}
                                </p>
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Popular Specializations</p>
                                    <div className="flex flex-wrap gap-2">
                                        {course.specializations.map((spec, index) => (
                                            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-sm">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Courses;
