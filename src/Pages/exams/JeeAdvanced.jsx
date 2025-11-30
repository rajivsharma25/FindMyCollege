import React from 'react';
import { FaCalendarAlt, FaCheckCircle, FaBook, FaInfoCircle } from 'react-icons/fa';

const JeeAdvanced = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="bg-white shadow-sm border-l-4 border-[#CB2027] p-8 mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">JEE (Advanced) 2025</h1>
                    <p className="text-lg text-gray-600">Joint Entrance Examination – Advanced</p>
                </div>

                {/* About Section */}
                <div className="bg-white shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FaInfoCircle className="text-[#CB2027]" /> About JEE Advanced
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        JEE Advanced is the second stage of the Joint Entrance Examination and is the sole gateway for admission to the prestigious Indian Institutes of Technology (IITs). It is conducted by one of the seven zonal IITs on a rotational basis.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Only the top 2.5 Lakh rank holders of JEE Main are eligible to appear for JEE Advanced.
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
                                    <td className="px-6 py-4 text-gray-700">IIT Kanpur (Tentative for 2025)</td>
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
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Papers</td>
                                    <td className="px-6 py-4 text-gray-700">Paper 1 & Paper 2 (Both Compulsory)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Official Website</td>
                                    <td className="px-6 py-4 text-[#CB2027] hover:underline"><a href="https://jeeadv.ac.in" target="_blank" rel="noreferrer">jeeadv.ac.in</a></td>
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
                                    <td className="px-6 py-4 text-gray-700">April 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Admit Card Release</td>
                                    <td className="px-6 py-4 text-gray-700">May 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Exam Date</td>
                                    <td className="px-6 py-4 text-gray-700">May/June 2025</td>
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
                        <li><strong>Performance in JEE Main:</strong> Must be among the top 2,50,000 successful candidates (including all categories) in B.E./B.Tech. Paper of JEE (Main).</li>
                        <li><strong>Age Limit:</strong> Candidates should have been born on or after October 1, 2000 (5 years relaxation for SC/ST/PwD).</li>
                        <li><strong>Number of Attempts:</strong> A candidate can attempt JEE (Advanced) a maximum of two times in two consecutive years.</li>
                        <li><strong>Appearance in Class XII:</strong> Should have appeared for the Class XII (or equivalent) examination for the first time in either 2024 or 2025.</li>
                    </ul>
                </div>

                {/* Exam Pattern */}
                <div className="bg-white shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FaBook className="text-[#CB2027]" /> Exam Pattern
                    </h2>
                    <p className="text-gray-700 mb-4">
                        The exam consists of two papers (Paper 1 and Paper 2) of three hours duration each. Both papers are compulsory.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-3">Subjects</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Physics</li>
                                <li>Chemistry</li>
                                <li>Mathematics</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-3">Question Types</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Multiple Choice Questions (Single/Multiple Correct)</li>
                                <li>Numerical Value Type</li>
                                <li>Matching List Type</li>
                                <li><strong>Note:</strong> Marking scheme varies every year.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JeeAdvanced;
