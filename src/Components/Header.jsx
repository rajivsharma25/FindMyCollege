import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from 'react-icons/rx';
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaChevronRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { assets } from '../assets/assets';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  return (
    <div className={`w-full z-50 py-1 flex justify-center items-center px-4 transition-all duration-300 ${isHome ? `fixed top-0 left-0 ${isScrolled ? 'bg-[#242F42] shadow-md' : 'bg-transparent'}` : 'sticky top-0 bg-[#242F42] shadow-md'}`}>
      <div className="w-full max-w-7xl flex justify-between items-center">
        <div className="lg:hidden">
          <GiHamburgerMenu
            onClick={() => setVisible(true)}
            size={24}
            className="text-white cursor-pointer"
          />
        </div>

        <Link to="/">
          <img
            src={assets.logo}
            className="w-32 mx-auto cursor-pointer"
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-[14px] text-gray-200 mx-auto">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-white font-semibold" : "hover:text-white transition"}>Home</NavLink>
          <NavLink to="/colleges" className={({ isActive }) => isActive ? "text-white font-semibold" : "hover:text-white transition"}>Colleges</NavLink>
          <NavLink to="/exams" className={({ isActive }) => isActive ? "text-white font-semibold" : "hover:text-white transition"}>Exams</NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? "text-white font-semibold" : "hover:text-white transition"}>Courses</NavLink>
          <NavLink to="/admissions" className={({ isActive }) => isActive ? "text-white font-semibold" : "hover:text-white transition"}>Admissions</NavLink>
          <NavLink to="/news" className={({ isActive }) => isActive ? "text-white font-semibold" : "hover:text-white transition"}>News</NavLink>
          <NavLink to="/forum" className={({ isActive }) => isActive ? "text-white font-semibold" : "hover:text-white transition"}>Forum</NavLink>
          <NavLink to="/tools" className={({ isActive }) => isActive ? "text-white font-semibold" : "hover:text-white transition"}>Tools</NavLink>
        </ul>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-4 py-2 bg-transparent border border-[#CB2027] text-[#CB2027] text-sm font-semibold rounded hover:bg-[#CB2027] hover:text-white transition-all">
            Chat with Us
          </button>
          <button className="px-4 py-2 bg-[#CB2027] border border-[#CB2027] text-white text-sm font-semibold rounded hover:bg-[#b01c22] transition-all">
            Call Now
          </button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setVisible(false)}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] sm:w-[350px] bg-[#111827] z-50 transition-transform duration-300 ease-out shadow-2xl ${visible ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">

          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-800">
            <img src={assets.logo} className="w-28" alt="Logo" />
            <button
              onClick={() => setVisible(false)}
              className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <RxCross2 className="text-2xl" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-5">
            <div className='relative'>
              <input
                className='w-full bg-[#1F2937] text-gray-200 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#CB2027] transition-all'
                type="text"
                placeholder="Search colleges, exams..."
              />
              <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg' />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-2">
            <div className="flex flex-col space-y-1">
              {[
                { name: 'Home', path: '/' },
                { name: 'Colleges', path: '/colleges' },
                { name: 'Exams', path: '/exams' },
                { name: 'Courses', path: '/courses' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'News', path: '/news' },
                { name: 'Forum', path: '/forum' },
                { name: 'Tools', path: '/tools' }  
              ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setVisible(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${isActive
                      ? 'bg-[#CB2027]/10 text-[#CB2027] font-medium'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                  <FaChevronRight className="text-xs opacity-50" />
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="p-5 border-t border-gray-800">
            <div className="flex flex-col gap-3">
              <button className="w-full py-3 bg-transparent border border-[#CB2027] text-[#CB2027] text-sm font-semibold rounded hover:bg-[#CB2027] hover:text-white transition-all">
                Chat with Us
              </button>
              <button className="w-full py-3 bg-[#CB2027] border border-[#CB2027] text-white text-sm font-semibold rounded hover:bg-[#b01c22] transition-all">
                Call Now
              </button>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 mb-4 text-center">Follow us on</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/FindMyCollege" className="text-gray-400 hover:text-[#CB2027] transition-colors"><FaFacebookF size={18} /></a>
              <a href="https://twitter.com/FindMyCollege" className="text-gray-400 hover:text-[#CB2027] transition-colors"><FaXTwitter size={18} /></a>
              <a href="https://www.linkedin.com/company/FindMyCollege/" className="text-gray-400 hover:text-[#CB2027] transition-colors"><FaLinkedinIn size={18} /></a>
              <a href="https://www.instagram.com/FindMyCollege/" className="text-gray-400 hover:text-[#CB2027] transition-colors"><FaInstagram size={18} /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
