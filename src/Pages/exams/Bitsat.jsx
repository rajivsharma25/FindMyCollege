import React from 'react';
import { FaCalendarAlt, FaCheckCircle, FaBook, FaInfoCircle } from 'react-icons/fa';

const Bitsat = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="bg-white shadow-sm border-l-4 border-[#CB2027] p-8 mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">BITSAT 2025</h1>
                    <p className="text-lg text-gray-600">Birla Institute of Technology and Science Admission Test</p>
                </div>

                {/* About Section */}
                <div className="bg-white shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FaInfoCircle className="text-[#CB2027]" /> About BITSAT
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        BITSAT is a computer-based online entrance exam conducted by BITS Pilani for admission to its Integrated First Degree Programmes (B.E., B.Pharm, and M.Sc.) at its Pilani, Goa, and Hyderabad campuses.
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
                                    <td className="px-6 py-4 text-gray-700">BITS Pilani</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Exam Frequency</td>
                                    <td className="px-6 py-4 text-gray-700">Twice a year (Session 1 & 2)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Exam Mode</td>
                                    <td className="px-6 py-4 text-gray-700">Online (Computer Based)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Duration</td>
                                    <td className="px-6 py-4 text-gray-700">3 Hours</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Official Website</td>
                                    <td className="px-6 py-4 text-[#CB2027] hover:underline"><a href="https://www.bitsadmission.com" target="_blank" rel="noreferrer">bitsadmission.com</a></td>
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
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session 1</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session 2</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Application Start</td>
                                    <td className="px-6 py-4 text-gray-700">January 2025</td>
                                    <td className="px-6 py-4 text-gray-700">May 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Exam Window</td>
                                    <td className="px-6 py-4 text-gray-700">May 2025</td>
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
                        <li><strong>Qualifying Exam:</strong> Passed Class 12th from a recognized board with Physics, Chemistry, and Mathematics.</li>
                        <li><strong>Minimum Marks:</strong> Aggregate of 75% marks in PCM, with at least 60% marks in each of the Physics, Chemistry, and Mathematics subjects.</li>
                        <li><strong>Year of Passing:</strong> Candidates appearing in 2025 or passed in 2024 are eligible.</li>
                    </ul>
                </div>

                {/* Exam Pattern */}
                <div className="bg-white shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FaBook className="text-[#CB2027]" /> Exam Pattern
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-3">Sections</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Part I: Physics (30 Q)</li>
                                <li>Part II: Chemistry (30 Q)</li>
                                <li>Part III: English & Logical Reasoning (10+20 Q)</li>
                                <li>Part IV: Mathematics (40 Q)</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-3">Marking Scheme</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Total Questions:</strong> 130</li>
                                <li><strong>Correct Answer:</strong> +3 Marks</li>
                                <li><strong>Incorrect Answer:</strong> -1 Mark</li>
                                <li><strong>Total Marks:</strong> 390</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Bitsat;
