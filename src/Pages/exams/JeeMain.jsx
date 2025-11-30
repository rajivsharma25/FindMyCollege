import React from 'react';
import { FaCalendarAlt, FaCheckCircle, FaBook, FaInfoCircle } from 'react-icons/fa';

const JeeMain = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="bg-white shadow-sm border-l-4 border-[#CB2027] p-8 mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">JEE (Main) 2025</h1>
                    <p className="text-lg text-gray-600">Joint Entrance Examination – Main</p>
                </div>

                {/* About Section */}
                <div className="bg-white shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FaInfoCircle className="text-[#CB2027]" /> About JEE Main
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The Joint Entrance Examination (JEE) Main is a national-level engineering entrance exam conducted by the National Testing Agency (NTA). It serves as a gateway for admission to undergraduate engineering programs (B.E./B.Tech.) at NITs, IIITs, other Centrally Funded Technical Institutions (CFTIs), and institutions/universities funded/recognized by participating State Governments.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        It is also an eligibility test for JEE (Advanced), which is conducted for admission to IITs.
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
                                    <td className="px-6 py-4 text-gray-700">National Testing Agency (NTA)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Exam Frequency</td>
                                    <td className="px-6 py-4 text-gray-700">Twice a year (January & April)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Exam Mode</td>
                                    <td className="px-6 py-4 text-gray-700">Computer Based Test (Online)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Duration</td>
                                    <td className="px-6 py-4 text-gray-700">3 Hours</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50">Official Website</td>
                                    <td className="px-6 py-4 text-[#CB2027] hover:underline"><a href="https://jeemain.nta.nic.in" target="_blank" rel="noreferrer">jeemain.nta.nic.in</a></td>
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
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session 1 (Jan)</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session 2 (Apr)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Registration Starts</td>
                                    <td className="px-6 py-4 text-gray-700">November 2024</td>
                                    <td className="px-6 py-4 text-gray-700">February 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Admit Card Release</td>
                                    <td className="px-6 py-4 text-gray-700">January 2025</td>
                                    <td className="px-6 py-4 text-gray-700">March 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Exam Dates</td>
                                    <td className="px-6 py-4 text-gray-700">Jan 24 - Feb 1, 2025</td>
                                    <td className="px-6 py-4 text-gray-700">April 1 - 15, 2025</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">Result Declaration</td>
                                    <td className="px-6 py-4 text-gray-700">February 2025</td>
                                    <td className="px-6 py-4 text-gray-700">April 2025</td>
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
                        <li><strong>Age Limit:</strong> No age limit for appearing in JEE Main.</li>
                        <li><strong>Qualifying Exam:</strong> Candidates must have passed Class 12th or equivalent examination in 2023, 2024, or appearing in 2025.</li>
                        <li><strong>Subjects:</strong> Physics and Mathematics are compulsory subjects along with Chemistry/Biology/Biotechnology/Technical Vocational Subject.</li>
                        <li><strong>Number of Attempts:</strong> Candidates can appear for JEE Main for three consecutive years.</li>
                    </ul>
                </div>

                {/* Exam Pattern */}
                <div className="bg-white shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FaBook className="text-[#CB2027]" /> Exam Pattern (Paper 1 - B.E./B.Tech)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-3">Sections</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Mathematics</li>
                                <li>Physics</li>
                                <li>Chemistry</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-3">Questions & Marks</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Total Questions:</strong> 90 (30 per subject)</li>
                                <li><strong>To Attempt:</strong> 75 (25 per subject)</li>
                                <li><strong>Total Marks:</strong> 300</li>
                                <li><strong>Marking:</strong> +4 for correct, -1 for incorrect</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JeeMain;
