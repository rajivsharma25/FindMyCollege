import React from 'react';
import { FaBullseye, FaLightbulb, FaUsers } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto bg-white p-8 sm:p-12 shadow-sm border border-gray-100">

                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">ABOUT US</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600">
                        Empowering students to make informed career decisions since 2015.
                    </p>
                </div>

                <div className="space-y-12 text-gray-700 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <FaLightbulb className="text-[#CB2027]" /> Who We Are
                        </h2>
                        <p className="mb-4">
                            FindMyCollege is India's leading educational portal, dedicated to providing accurate, timely, and comprehensive information about engineering, medical, and other professional courses. We understand that the transition from school to college is a critical phase in a student's life, filled with confusion and anxiety.
                        </p>
                        <p>
                            Our platform serves as a one-stop destination for exam notifications, college rankings, admission processes, and counseling guidance. We bridge the gap between students and their dream colleges by simplifying complex information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <FaBullseye className="text-[#CB2027]" /> Our Mission
                        </h2>
                        <p>
                            To democratize access to educational information and ensure that no deserving student misses out on an opportunity due to lack of awareness. We strive to bring transparency to the admission process and empower students with the right tools and data to plan their future.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <FaUsers className="text-[#CB2027]" /> Meet The Team
                        </h2>
                        <p className="mb-8">
                            We are a passionate team of engineers, educators, and content creators who have been through the same rigorous process. Our collective experience allows us to empathize with students and address their specific pain points effectively.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Team Member 1 */}
                            <div className="bg-gray-50 p-6 text-center hover:shadow-md transition-shadow border border-gray-100 group">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="Rajiv Sharma"
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-sm group-hover:ring-2 group-hover:ring-[#CB2027] transition-all"
                                />
                                <h3 className="text-xl font-bold text-gray-900">Rajiv Sharma</h3>
                                <p className="text-[#CB2027] font-medium text-sm mb-3">Founder & CEO</p>
                                <p className="text-sm text-gray-600">
                                    Visionary leader with a passion for education technology and student mentorship.
                                </p>
                            </div>

                            {/* Team Member 2 */}
                            <div className="bg-gray-50 p-6 text-center hover:shadow-md transition-shadow border border-gray-100 group">
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="Aditi Mishra"
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-sm group-hover:ring-2 group-hover:ring-[#CB2027] transition-all"
                                />
                                <h3 className="text-xl font-bold text-gray-900">Aditi Mishra</h3>
                                <p className="text-[#CB2027] font-medium text-sm mb-3">Head of Content</p>
                                <p className="text-sm text-gray-600">
                                    Expert in curriculum analysis and creating simplified educational content.
                                </p>
                            </div>

                            {/* Team Member 3 */}
                            <div className="bg-gray-50 p-6 text-center hover:shadow-md transition-shadow border border-gray-100 group">
                                <img
                                    src="https://randomuser.me/api/portraits/men/86.jpg"
                                    alt="Vikram Kumar"
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-sm group-hover:ring-2 group-hover:ring-[#CB2027] transition-all"
                                />
                                <h3 className="text-xl font-bold text-gray-900">Vikram Kumar</h3>
                                <p className="text-[#CB2027] font-medium text-sm mb-3">Tech Lead</p>
                                <p className="text-sm text-gray-600">
                                    Ensuring a seamless and fast digital experience for millions of users.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        </div>
    );
};

export default About;
