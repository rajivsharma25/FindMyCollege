import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 font-sans">
            <div className="text-center">
                <div className="flex justify-center mb-6">
                    <FaExclamationTriangle className="text-6xl text-[#CB2027]" />
                </div>
                <h1 className="text-6xl sm:text-8xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                    Oops! The page you are looking for does not exist. It might have been moved or deleted.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#CB2027] text-white font-bold uppercase tracking-wider rounded-sm hover:bg-[#b01c22] transition-colors shadow-md"
                >
                    <FaHome /> Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
