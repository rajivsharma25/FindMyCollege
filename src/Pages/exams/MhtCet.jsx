import React from 'react';
import { FaCalendarAlt, FaCheckCircle, FaBook, FaInfoCircle } from 'react-icons/fa';

const MhtCet = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="bg-white shadow-sm border-l-4 border-[#CB2027] p-8 mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">MHT CET 2025</h1>
                    <p className="text-lg text-gray-600">Maharashtra Common Entrance Test</p>
                </div>

                {/* About Section */}
                <div className="bg-white shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FaInfoCircle className="text-[#CB2027]" /> About MHT CET
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        MHT CET is a state-level entrance exam conducted by the State Common Entrance Test Cell, Maharashtra, for admission to First Year of Engineering and Technology (B.E./B.Tech) and Pharmacy (B.Pharm/Pharm.D) courses in the state of Maharashtra.
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
                                    <td className="px-6 py-4 text-gray-700">State CET Cell, Maharashtra</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Exam Frequency</td>
                                    <td className="px-6 py-4 text-gray-700">Once a year</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Exam Mode</td>
                                    <td className="px-6 py-4 text-gray-700">Computer Based Test (Online)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Duration</td>
                                    <td className="px-6 py-4 text-gray-700">3 Hours (180 Minutes)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Official Website</td>
                                    <td className="px-6 py-4 text-[#CB2027] hover:underline"><a href="https://cetcell.mahacet.org" target="_blank" rel="noreferrer">cetcell.mahacet.org</a></td>
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
                                    <td className="px-6 py-4 text-gray-700">March 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Admit Card Release</td>
                                    <td className="px-6 py-4 text-gray-700">April 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Exam Date (PCM Group)</td>
                                    <td className="px-6 py-4 text-gray-700">May 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Result Declaration</td>
                                    <td className="px-6 py-4 text-gray-700">June 2025</td>
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
                        <li><strong>Nationality:</strong> Must be an Indian National.</li>
                        <li><strong>Qualifying Exam:</strong> Passed HSC (Std. XII) or its equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Biotechnology/Biology/Technical Vocational subjects.</li>
                        <li><strong>Minimum Marks:</strong> At least 45% marks (40% for reserved categories of Maharashtra State only) in the above subjects taken together.</li>
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
                                <li><strong>Paper 1:</strong> Mathematics (100 Marks)</li>
                                <li><strong>Paper 2:</strong> Physics & Chemistry (100 Marks)</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-3">Marking Scheme</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Mathematics:</strong> +2 per question</li>
                                <li><strong>Physics & Chemistry:</strong> +1 per question</li>
                                <li><strong>Negative Marking:</strong> No negative marking</li>
                                <li><strong>Total Marks:</strong> 200</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MhtCet;
