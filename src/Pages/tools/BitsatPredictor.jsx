import React, { useState } from 'react';
import { FaUniversity, FaSearch } from 'react-icons/fa';

const BitsatPredictor = () => {
    const [score, setScore] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handlePredict = (e) => {
        e.preventDefault();
        if (score) setShowResults(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">BITSAT PREDICTOR</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600">
                        Predict your chances of getting into BITS Pilani, Goa, or Hyderabad campuses.
                    </p>
                </div>

                <div className="bg-white p-8 shadow-sm border border-gray-100 mb-12 max-w-2xl mx-auto">
                    <form onSubmit={handlePredict} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">BITSAT Score (out of 390)</label>
                            <input
                                type="number"
                                value={score}
                                onChange={(e) => setScore(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#CB2027]"
                                placeholder="Enter your score"
                                max="390"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#CB2027] text-white font-bold uppercase tracking-wider hover:bg-[#b01c22] transition-colors shadow-md flex items-center justify-center gap-2"
                        >
                            <FaSearch /> Predict Colleges
                        </button>
                    </form>
                </div>

                {showResults && (
                    <div className="space-y-4 animate-fade-in">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Probable Branches based on Score {score}</h3>
                        {[
                            { campus: "BITS Pilani", branch: "B.E. Chemical", cutoff: 280 },
                            { campus: "BITS Goa", branch: "B.E. Electronics & Instrumentation", cutoff: 260 },
                            { campus: "BITS Hyderabad", branch: "B.E. Mechanical", cutoff: 250 }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-full shrink-0">
                                        <FaUniversity className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900">{item.campus}</h4>
                                        <p className="text-sm text-gray-600">{item.branch}</p>
                                        <div className="mt-2 text-xs font-medium text-gray-500">
                                            <span>Est. Cutoff: {item.cutoff}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-sm">
                                    Possible
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default BitsatPredictor;
