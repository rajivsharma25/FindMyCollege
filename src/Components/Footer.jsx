import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { assets } from "../assets/assets";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111827] text-gray-300 relative font-sans">
      {/* Newsletter Section */}
      <div className="bg-[#1F2937] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Subscribe to our Newsletter</h3>
            <p className="text-gray-400">Get the latest updates, exam notifications, and college news delivered to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-80 px-4 py-3 bg-[#374151] text-white border border-gray-600 focus:outline-none focus:border-[#CB2027] transition-colors"
            />
            <button className="bg-[#CB2027] hover:bg-[#b01b21] text-white px-6 py-3 font-semibold transition-colors flex items-center gap-2">
              Subscribe <FaPaperPlane className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">

          <div>
            <h3 className="text-sm text-white font-bold uppercase tracking-wider mb-6 border-b-2 border-[#CB2027] inline-block pb-1">COLLEGE</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/iits" className="hover:text-[#CB2027] transition-colors">Explore All IITs</Link></li>
              <li><Link to="/nits" className="hover:text-[#CB2027] transition-colors">Explore All NITs</Link></li>
              <li><Link to="/iiits" className="hover:text-[#CB2027] transition-colors">Explore All IIITs</Link></li>
              <li><Link to="/iisers" className="hover:text-[#CB2027] transition-colors">Explore All IISERs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-white font-bold uppercase tracking-wider mb-6 border-b-2 border-[#CB2027] inline-block pb-1">STATEWISE</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/delhi-ncr" className="hover:text-[#CB2027] transition-colors">Delhi NCR</Link></li>
              <li><Link to="/maharashtra" className="hover:text-[#CB2027] transition-colors">Maharashtra</Link></li>
              <li><Link to="/karnataka" className="hover:text-[#CB2027] transition-colors">Karnataka</Link></li>
              <li><Link to="/uttar-pradesh" className="hover:text-[#CB2027] transition-colors">Uttar Pradesh</Link></li>
              <li><Link to="/andhra-pradesh" className="hover:text-[#CB2027] transition-colors">Andhra Pradesh</Link></li>
              <li><Link to="/telangana" className="hover:text-[#CB2027] transition-colors">Telangana</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-white font-bold uppercase tracking-wider mb-6 border-b-2 border-[#CB2027] inline-block pb-1">EXAM</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/jee-main" className="hover:text-[#CB2027] transition-colors">JEE (Main)</Link></li>
              <li><Link to="/jee-advanced" className="hover:text-[#CB2027] transition-colors">JEE (Advanced)</Link></li>
              <li><Link to="/bitsat" className="hover:text-[#CB2027] transition-colors">BITSAT</Link></li>
              <li><Link to="/mht-cet" className="hover:text-[#CB2027] transition-colors">MHT-CET</Link></li>
              <li><Link to="/upsee" className="hover:text-[#CB2027] transition-colors">UPSEE</Link></li>
              <li><Link to="/wbjee" className="hover:text-[#CB2027] transition-colors">WBJEE</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-white font-bold uppercase tracking-wider mb-6 border-b-2 border-[#CB2027] inline-block pb-1">TOOLS</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/college-finder" className="hover:text-[#CB2027] transition-colors">College Finder</Link></li>
              <li><Link to="/rank-predictor" className="hover:text-[#CB2027] transition-colors">Rank Predictor</Link></li>
              <li><Link to="/college-predictor" className="hover:text-[#CB2027] transition-colors">College Predictor</Link></li>
              <li><Link to="/bitsat-predictor" className="hover:text-[#CB2027] transition-colors">BITSAT Predictor</Link></li>
              <li><Link to="/jac-delhi-predictor" className="hover:text-[#CB2027] transition-colors">JAC Delhi Predictor</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-white font-bold uppercase tracking-wider mb-6 border-b-2 border-[#CB2027] inline-block pb-1">COMPANY</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-[#CB2027] transition-colors">About Us</Link></li>
              <li><Link to="/media-kit" className="hover:text-[#CB2027] transition-colors">Media Kit</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#CB2027] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-[#CB2027] transition-colors">Terms of Use</Link></li>
              <li><Link to="/contact" className="hover:text-[#CB2027] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-4">
            <img src={assets.logo} className="w-40" alt="Logo" />
          </Link>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/FindMyCollege/" className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center hover:bg-[#CB2027] hover:text-white transition-all duration-300">
              <FaFacebookF size={18} />
            </a>
            <a href="https://twitter.com/FindMyCollege" className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center hover:bg-[#CB2027] hover:text-white transition-all duration-300">
              <FaXTwitter size={18} />
            </a>
            <a href="https://www.linkedin.com/company/FindMyCollege/" className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center hover:bg-[#CB2027] hover:text-white transition-all duration-300">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://www.instagram.com/FindMyCollege/" className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center hover:bg-[#CB2027] hover:text-white transition-all duration-300">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} FindMyCollege. All rights reserved.
        </div>
        <div className="text-center mt-2 text-sm text-gray-500">
          Crafted by <span className="text-[#CB2027] font-semibold">Rajiv Sharma</span>
        </div>
      </div>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-[#CB2027] text-white shadow-lg hover:bg-[#b01b21] transition-all duration-300 z-50 transform hover:-translate-y-1 rounded-sm"
        >
          <IoIosArrowUp className="text-xl" />
        </button>
      )}
    </footer>
  );
}
