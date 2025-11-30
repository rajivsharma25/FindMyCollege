import React, { useState } from 'react';
import { FaUniversity, FaSearch } from 'react-icons/fa';

const JacDelhiPredictor = () => {
    const [rank, setRank] = useState('');
    const [category, setCategory] = useState('General');
    const [region, setRegion] = useState('Delhi');
    const [showResults, setShowResults] = useState(false);

    const handlePredict = (e) => {
        e.preventDefault();
        if (rank) setShowResults(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">JAC DELHI PREDICTOR</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600">
                        Predict your chances for DTU, NSUT, IIIT-D, IGDTUW, and DSEU based on JEE Main rank.
                    </p>
                </div>

                <div className="bg-white p-8 shadow-sm border border-gray-100 mb-12">
                    <form onSubmit={handlePredict} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                        <div className="md:col-span-1">
                            <label className="block text-sm font-bold text-gray-900 mb-2">JEE Main Rank</label>
                            <input
                                type="number"
                                value={rank}
                                onChange={(e) => setRank(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#CB2027]"
                                placeholder="Rank"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">Region</label>
                            <select
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#CB2027]"
                            >
                                <option value="Delhi">Delhi Region</option>
                                <option value="Outside Delhi">Outside Delhi</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#CB2027]"
                            >
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
                            <FaSearch /> Predict
                        </button>
                    </form>
                </div>

                {showResults && (
                    <div className="space-y-4 animate-fade-in">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Prediction Results for Rank {rank} ({region})</h3>
                        {[
                            { college: "Delhi Technological University (DTU)", branch: "Mechanical Engineering" },
                            { college: "Netaji Subhas University of Technology (NSUT)", branch: "Instrumentation and Control" },
                            { college: "Indraprastha Institute of Information Technology (IIIT-D)", branch: "CS + Social Sciences" }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-50 text-purple-600 rounded-full shrink-0">
                                        <FaUniversity className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900">{item.college}</h4>
                                        <p className="text-sm text-gray-600">{item.branch}</p>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold uppercase rounded-sm">
                                    Likely
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default JacDelhiPredictor;
