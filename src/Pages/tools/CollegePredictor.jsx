import React, { useState } from 'react';
import { FaUniversity, FaSearch } from 'react-icons/fa';

const CollegePredictor = () => {
    const [rank, setRank] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handlePredict = (e) => {
        e.preventDefault();
        if (rank) setShowResults(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">COLLEGE PREDICTOR</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600">
                        Enter your rank to find the best colleges you can get into.
                    </p>
                </div>

                <div className="bg-white p-8 shadow-sm border border-gray-100 mb-12">
                    <form onSubmit={handlePredict} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">Exam Rank</label>
                            <input
                                type="number"
                                value={rank}
                                onChange={(e) => setRank(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#CB2027]"
                                placeholder="Enter your rank"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">Category</label>
                            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#CB2027]">
                                <option>General</option>
                                <option>OBC-NCL</option>
                                <option>SC</option>
                                <option>ST</option>
                                <option>EWS</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#CB2027] text-white font-bold uppercase tracking-wider hover:bg-[#b01c22] transition-colors shadow-md flex items-center justify-center gap-2"
                        >
                            <FaSearch /> Find Colleges
                        </button>
                    </form>
                </div>

                {showResults && (
                    <div className="space-y-4 animate-fade-in">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Probable Colleges based on Rank {rank}</h3>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="bg-white p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-50 text-green-600 rounded-full shrink-0">
                                        <FaUniversity className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900">National Institute of Technology, Warangal</h4>
                                        <p className="text-sm text-gray-600">Computer Science and Engineering</p>
                                        <div className="mt-2 flex gap-4 text-xs font-medium text-gray-500">
                                            <span>Quota: OS</span>
                                            <span>Category: General</span>
                                            <span>Closing Rank: {parseInt(rank) + item * 100}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-sm">
                                    High Chance
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default CollegePredictor;
