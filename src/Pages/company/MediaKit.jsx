import React from 'react';
import { FaDownload, FaPalette, FaImages } from 'react-icons/fa';
import { assets } from '../../assets/assets';

const MediaKit = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">MEDIA KIT</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Official brand assets, logos, and guidelines for FindMyCollege.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Logo Assets */}
                    <div className="bg-white p-8 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-red-50 rounded-full text-[#CB2027]">
                                <FaImages className="text-2xl" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Logos</h2>
                        </div>
                        <p className="text-gray-600 mb-8">
                            Download our official logos in various formats (PNG, SVG, EPS). Please do not alter the proportions or colors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#CB2027] text-white font-bold uppercase tracking-wider hover:bg-[#b01c22] transition-colors shadow-md w-full sm:w-auto">
                                <FaDownload /> Download Pack
                            </button>
                        </div>
                        <div className="mt-8 p-6 bg-[#111827] border border-gray-200 flex justify-center">
                            <img src={assets.logo} alt="FindMyCollege Logo" className="h-16" />
                        </div>
                    </div>

                    {/* Brand Colors */}
                    <div className="bg-white p-8 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-red-50 rounded-full text-[#CB2027]">
                                <FaPalette className="text-2xl" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Brand Colors</h2>
                        </div>
                        <p className="text-gray-600 mb-8">
                            Our primary brand color is Red (#CB2027). Use it for primary actions and emphasis.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-[#CB2027] shadow-sm"></div>
                                <div>
                                    <p className="font-bold text-gray-900">Primary Red</p>
                                    <p className="text-gray-500 font-mono">#CB2027</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-[#111827] shadow-sm"></div>
                                <div>
                                    <p className="font-bold text-gray-900">Dark Gray</p>
                                    <p className="text-gray-500 font-mono">#111827</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Company */}
                <div className="bg-white p-8 sm:p-12 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">About FindMyCollege</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        FindMyCollege is India's leading educational portal, dedicated to providing accurate, timely, and comprehensive information about engineering, medical, and other professional courses. Founded in 2025, we have helped millions of students navigate the complex admission process.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-8">
                        <div className="p-4 bg-gray-50">
                            <h3 className="text-3xl font-bold text-[#CB2027] mb-2">10M+</h3>
                            <p className="text-gray-600 font-medium">Annual Visitors</p>
                        </div>
                        <div className="p-4 bg-gray-50">
                            <h3 className="text-3xl font-bold text-[#CB2027] mb-2">500+</h3>
                            <p className="text-gray-600 font-medium">Colleges Covered</p>
                        </div>
                        <div className="p-4 bg-gray-50">
                            <h3 className="text-3xl font-bold text-[#CB2027] mb-2">50+</h3>
                            <p className="text-gray-600 font-medium">Exams Tracked</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MediaKit;
