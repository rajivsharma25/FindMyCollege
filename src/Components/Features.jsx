import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Features = () => {
  return (
    <div className='px-4 sm:px-6 mb-10'>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4">
        <div className='flex flex-col items-center justify-center gap-2 w-full mt-10 text-center'>
          <h2 className='text-2xl sm:text-3xl font-semibold'>EXPLORE OUR FEATURES</h2>
          <hr className='bg-red-700 w-16 h-1' />
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
          Explore our comprehensive tools and resources designed to guide you through every step of your college admission journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-4">
          {/* Colleges */}
          <Link to="/colleges" className="sm:row-span-2 sm:col-start-1 relative group border border-gray-200 shadow-lg aspect-[4/2] sm:aspect-square overflow-hidden cursor-pointer block">
            <img src={assets.colleges} alt="Colleges"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:bg-gradient-to-b group-hover:from-red-900/80 group-hover:to-red-900/30">
              <p className="text-white text-xl absolute left-1/2 bottom-6 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">
                Colleges
              </p>
            </div>
          </Link>

          {/* News */}
          <Link to="/news" className="sm:col-start-1 sm:row-start-3 relative group border border-gray-200 shadow-lg aspect-[4/2] -mt-4 overflow-hidden cursor-pointer block">
            <img src={assets.news} alt="News" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:bg-gradient-to-b group-hover:from-red-900/80 group-hover:to-red-900/30">
              <p className="text-white text-xl absolute left-1/2 bottom-6 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">News</p>
            </div>
          </Link>

          {/* Admissions */}
          <Link to="/admissions" className="sm:col-start-2 sm:row-start-1 relative group border border-gray-200 shadow-lg aspect-[4/2] overflow-hidden cursor-pointer block">
            <img src={assets.cutoff} alt="Admissions" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:bg-gradient-to-b group-hover:from-red-900/80 group-hover:to-red-900/30">
              <p className="text-white text-xl absolute left-1/2 bottom-6 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">Admissions</p>
            </div>
          </Link>

          {/* Exams */}
          <Link to="/exams" className="sm:row-span-2 sm:col-start-2 sm:row-start-2 relative group border border-gray-200 shadow-lg aspect-[4/2] sm:aspect-square overflow-hidden cursor-pointer block">
            <img src={assets.exams} alt="Exams" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:bg-gradient-to-b group-hover:from-red-900/80 group-hover:to-red-900/30">
              <p className="text-white text-xl absolute left-1/2 bottom-6 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">Exams</p>
            </div>
          </Link>

          {/* Tools */}
          <Link to="/tools" className="sm:row-span-2 sm:col-start-3 sm:row-start-1 relative group border border-gray-200 shadow-lg aspect-[4/2] sm:aspect-square overflow-hidden cursor-pointer block">
            <img src={assets.tools} alt="Tools" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:bg-gradient-to-b group-hover:from-red-900/80 group-hover:to-red-900/30">
              <p className="text-white text-xl absolute left-1/2 bottom-6 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">Tools</p>
            </div>
          </Link>

          {/* Forum */}
          <Link to="/forum" className="sm:col-start-3 sm:row-start-3 relative group border border-gray-200 shadow-lg aspect-[4/2] -mt-4 overflow-hidden cursor-pointer block">
            <img src={assets.forms} alt="Forum" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:bg-gradient-to-b group-hover:from-red-900/80 group-hover:to-red-900/30">
              <p className="text-white text-xl absolute left-1/2 bottom-6 transform -translate-x-1/2 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">Forum</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Features