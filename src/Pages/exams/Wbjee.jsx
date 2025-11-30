import React from 'react';
import { FaCalendarAlt, FaCheckCircle, FaBook, FaInfoCircle } from 'react-icons/fa';

const Wbjee = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="bg-white shadow-sm border-l-4 border-[#CB2027] p-8 mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">WBJEE 2025</h1>
                    <p className="text-lg text-gray-600">West Bengal Joint Entrance Examination</p>
                </div>

                {/* About Section */}
                <div className="bg-white shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FaInfoCircle className="text-[#CB2027]" /> About WBJEE
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        WBJEE is a state-level common entrance examination conducted by the West Bengal Joint Entrance Examinations Board (WBJEEB) for admission to Undergraduate Courses in Engineering & Technology, Pharmacy, and Architecture in Universities, Govt. Colleges, and Self-Financed Institutes in the State of West Bengal.
                    </p>
                </div>

                {/* Key Highlights */}
                <div className="bg-white shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 border">
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50 w-1/3">Conducting Body</td>
                                    <td className="px-6 py-4 text-gray-700">WBJEEB</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Exam Frequency</td>
                                    <td className="px-6 py-4 text-gray-700">Once a year</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Exam Mode</td>
                                    <td className="px-6 py-4 text-gray-700">OMR Based (Offline)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Duration</td>
                                    <td className="px-6 py-4 text-gray-700">4 Hours (2 hours per paper)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Official Website</td>
                                    <td className="px-6 py-4 text-[#CB2027] hover:underline"><a href="https://wbjeeb.nic.in" target="_blank" rel="noreferrer">wbjeeb.nic.in</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Important Dates */}
                <div className="bg-white shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FaCalendarAlt className="text-[#CB2027]" /> Important Dates (Tentative)
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 border">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Registration Starts</td>
                                    <td className="px-6 py-4 text-gray-700">December 2024</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Admit Card Release</td>
                                    <td className="px-6 py-4 text-gray-700">April 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Exam Date</td>
                                    <td className="px-6 py-4 text-gray-700">April 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Result Declaration</td>
                                    <td className="px-6 py-4 text-gray-700">May 2025</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Eligibility Criteria */}
                <div className="bg-white shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FaCheckCircle className="text-[#CB2027]" /> Eligibility Criteria
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <li><strong>Nationality:</strong> Must be an Indian citizen.</li>
                        <li><strong>Age Limit:</strong> Lower age limit is 17 years as on 31.12.2025. No upper age limit (except for Marine Engineering).</li>
                        <li><strong>Qualifying Exam:</strong> Passed 10+2 with Physics and Mathematics along with any one of Chemistry/Biotechnology/Biology/Computer Science/Computer Application/Technical Vocational Subject.</li>
                        <li><strong>Minimum Marks:</strong> 45% (40% for SC/ST/OBC-A/OBC-B/PwD) in the above three subjects taken together.</li>
                    </ul>
                </div>

                {/* Exam Pattern */}
                <div className="bg-white shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FaBook className="text-[#CB2027]" /> Exam Pattern
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-3">Papers</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Paper I:</strong> Mathematics (100 Marks)</li>
                                <li><strong>Paper II:</strong> Physics & Chemistry (100 Marks)</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-3">Question Categories</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Category 1:</strong> 1 Mark (Only one correct option)</li>
                                <li><strong>Category 2:</strong> 2 Marks (Only one correct option)</li>
                                <li><strong>Category 3:</strong> 2 Marks (One or more correct options)</li>
                                <li><strong>Total Marks:</strong> 200</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Wbjee;
