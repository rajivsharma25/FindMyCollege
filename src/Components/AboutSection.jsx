import React from 'react';
import { FaUniversity, FaBookOpen, FaUserGraduate } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <div className="py-16 px-4 sm:px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <div className='flex flex-col items-center justify-center gap-2 w-full mb-3 text-center'>
                    <h2 className='text-2xl sm:text-3xl uppercase font-semibold'>Why Find My College?</h2>
                    <hr className='bg-red-700 w-16 h-1' />
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Your one-stop destination for all college admission related queries. We provide unbiased, accurate, and up-to-date information to help you make informed career decisions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-red-100 rounded-full text-[#CB2027]">
                                <FaUniversity size={32} />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Top Colleges</h3>
                        <p className="text-gray-600">
                            Explore detailed information about top engineering, medical, and management colleges across India.
                        </p>
                    </div>

                    <div className="bg-white p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-red-100 rounded-full text-[#CB2027]">
                                <FaBookOpen size={32} />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Exam Updates</h3>
                        <p className="text-gray-600">
                            Stay updated with the latest notifications, dates, and patterns for major entrance exams like JEE, NEET, and more.
                        </p>
                    </div>

                    <div className="bg-white p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-red-100 rounded-full text-[#CB2027]">
                                <FaUserGraduate size={32} />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Admission Guidance</h3>
                        <p className="text-gray-600">
                            Get expert advice and tools like Rank Predictors and College Finders to simplify your admission process.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
