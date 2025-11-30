import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">CONTACT US</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a question or feedback? We'd love to hear from you. Fill out the form below or reach out to us directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 shadow-sm border border-gray-100 h-full">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-red-50 text-[#CB2027] rounded-full shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                                        <p className="text-gray-600 text-sm">
                                            123 Education Lane, Knowledge Park III,<br />
                                            Greater Noida, Uttar Pradesh 201306
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-red-50 text-[#CB2027] rounded-full shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                                        <p className="text-gray-600 text-sm">
                                            support@findmycollege.com<br />
                                            info@findmycollege.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-red-50 text-[#CB2027] rounded-full shrink-0">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                                        <p className="text-gray-600 text-sm">
                                            +91 98765 43210<br />
                                            (Mon-Fri, 10 AM - 6 PM)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 sm:p-10 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                        <input type="text" id="name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#CB2027] transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                                        <input type="email" id="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#CB2027] transition-colors" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input type="text" id="subject" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#CB2027] transition-colors" placeholder="How can we help?" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea id="message" rows="5" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#CB2027] transition-colors" placeholder="Write your message here..."></textarea>
                                </div>
                                <button type="submit" className="px-8 py-3 bg-[#CB2027] text-white font-bold uppercase tracking-wider hover:bg-[#b01c22] transition-colors shadow-md flex items-center gap-2">
                                    Send Message <FaPaperPlane />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
