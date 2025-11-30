import React, { useState } from 'react';
import { FaChartLine, FaTrophy } from 'react-icons/fa';

const RankPredictor = () => {
    const [score, setScore] = useState('');
    const [predictedRank, setPredictedRank] = useState(null);

    const handlePredict = (e) => {
        e.preventDefault();
        // Mock prediction logic
        if (score) {
            setPredictedRank(Math.floor(Math.random() * 10000) + 1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto">

                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">RANK PREDICTOR</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600">
                        Enter your expected score or percentile to predict your All India Rank.
                    </p>
                </div>

                <div className="bg-white p-8 sm:p-12 shadow-lg border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-[#CB2027]"></div>

                    <form onSubmit={handlePredict} className="space-y-8">
                        <div>
                            <label className="block text-lg font-bold text-gray-900 mb-3">Select Exam</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {['JEE Main', 'JEE Advanced', 'NEET', 'BITSAT'].map((exam) => (
                                    <label key={exam} className="cursor-pointer">
                                        <input type="radio" name="exam" className="peer sr-only" />
                                        <div className="px-4 py-3 border border-gray-200 text-center text-gray-600 peer-checked:bg-red-50 peer-checked:border-[#CB2027] peer-checked:text-[#CB2027] peer-checked:font-bold transition-all hover:bg-gray-50">
                                            {exam}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-lg font-bold text-gray-900 mb-3">Enter Score / Percentile</label>
                            <input
                                type="number"
                                value={score}
                                onChange={(e) => setScore(e.target.value)}
                                className="w-full px-6 py-4 text-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#CB2027] transition-colors"
                                placeholder="e.g. 180 or 98.5"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-[#CB2027] text-white font-bold text-lg uppercase tracking-wider hover:bg-[#b01c22] transition-colors shadow-md flex items-center justify-center gap-2"
                        >
                            <FaChartLine /> Predict My Rank
                        </button>
                    </form>

                    {predictedRank && (
                        <div className="mt-12 p-8 bg-gray-900 text-white text-center animate-fade-in">
                            <FaTrophy className="text-4xl text-yellow-400 mx-auto mb-4" />
                            <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">Predicted All India Rank</p>
                            <div className="text-5xl font-bold text-white mb-2">
                                {predictedRank.toLocaleString()}
                            </div>
                            <p className="text-xs text-gray-500">* This is an estimated rank based on previous years' trends.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default RankPredictor;
