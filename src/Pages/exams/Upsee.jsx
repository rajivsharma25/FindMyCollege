import React from 'react';
import { FaCalendarAlt, FaCheckCircle, FaBook, FaInfoCircle } from 'react-icons/fa';

const Upsee = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="bg-white shadow-sm border-l-4 border-[#CB2027] p-8 mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">UPSEE (UPCET) 2025</h1>
                    <p className="text-lg text-gray-600">Uttar Pradesh State Entrance Examination</p>
                </div>

                {/* About Section */}
                <div className="bg-white shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FaInfoCircle className="text-[#CB2027]" /> About UPSEE
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        UPSEE (now known as UPCET for some courses, while B.Tech admissions are primarily through JEE Main) is a state-level entrance exam for admission to various undergraduate and postgraduate courses in colleges affiliated with AKTU, Lucknow, and other universities in Uttar Pradesh.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        <strong>Note:</strong> Admissions to B.Tech courses in UP government and private colleges are done based on <strong>JEE Main</strong> scores followed by UPTAC counselling.
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
                                    <td className="px-6 py-4 text-gray-700">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Admission Basis (B.Tech)</td>
                                    <td className="px-6 py-4 text-gray-700">JEE Main Score</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Counselling Body</td>
                                    <td className="px-6 py-4 text-gray-700">UPTAC (Uttar Pradesh Technical Admission Counselling)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Official Website</td>
                                    <td className="px-6 py-4 text-[#CB2027] hover:underline"><a href="https://uptac.admissions.nic.in" target="_blank" rel="noreferrer">uptac.admissions.nic.in</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Important Dates */}
                <div className="bg-white shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FaCalendarAlt className="text-[#CB2027]" /> Important Dates (Counselling)
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 border">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date (Tentative)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Registration Starts</td>
                                    <td className="px-6 py-4 text-gray-700">June 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Choice Filling</td>
                                    <td className="px-6 py-4 text-gray-700">July 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Seat Allotment Round 1</td>
                                    <td className="px-6 py-4 text-gray-700">August 2025</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Eligibility Criteria */}
                <div className="bg-white shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FaCheckCircle className="text-[#CB2027]" /> Eligibility Criteria (B.Tech)
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <li><strong>Qualifying Exam:</strong> Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Biotechnology/Biology/Technical Vocational subject.</li>
                        <li><strong>Minimum Marks:</strong> At least 45% marks (40% for SC/ST category) in the above subjects taken together.</li>
                        <li><strong>Entrance Exam:</strong> Must have a valid JEE Main score.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Upsee;
