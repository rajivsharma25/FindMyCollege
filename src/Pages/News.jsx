import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const News = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Exams', 'Admissions', 'Colleges', 'Policy'];

    // Mock Data
    const newsData = [
        {
            id: 1,
            title: "JEE Main 2025: Session 1 Registration Extended till December 15",
            excerpt: "NTA has extended the last date for JEE Main 2025 Session 1 registration. Candidates can now apply online until December 15.",
            category: "Exams",
            date: "Nov 28, 2024",
            readTime: "3 min read",
            image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
            featured: true
        },
        {
            id: 2,
            title: "IIT Madras Launches New BS Degree in Electronic Systems",
            excerpt: "IIT Madras has introduced a new 4-year BS degree program in Electronic Systems, accessible to all without JEE scores.",
            category: "Colleges",
            date: "Nov 27, 2024",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
            featured: false
        },
        {
            id: 3,
            title: "NEET UG 2025 Syllabus Revised by NMC",
            excerpt: "The National Medical Commission has released the updated syllabus for NEET UG 2025, reducing several topics from Physics and Chemistry.",
            category: "Exams",
            date: "Nov 26, 2024",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
            featured: false
        },
        {
            id: 4,
            title: "UGC Releases New Guidelines for Foreign University Campuses in India",
            excerpt: "University Grants Commission (UGC) has announced the final regulations for setting up campuses of foreign universities in India.",
            category: "Policy",
            date: "Nov 25, 2024",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
            featured: false
        },
        {
            id: 5,
            title: "BITS Pilani Announces Admissions for MBA Program 2025",
            excerpt: "BITS Pilani has started the application process for its MBA program for the academic year 2025-27. Check eligibility and dates.",
            category: "Admissions",
            date: "Nov 24, 2024",
            readTime: "3 min read",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
            featured: false
        },
        {
            id: 6,
            title: "CBSE Date Sheet 2025 Expected to be Released Soon",
            excerpt: "The Central Board of Secondary Education (CBSE) is expected to release the date sheet for Class 10 and 12 board exams 2025 in December.",
            category: "Exams",
            date: "Nov 23, 2024",
            readTime: "2 min read",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
            featured: false
        }
    ];

    const filteredNews = activeCategory === 'All'
        ? newsData
        : newsData.filter(item => item.category === activeCategory);

    const featuredArticle = newsData.find(item => item.featured);
    // If we are filtering, we might want to show the featured article in the grid if it matches, 
    // or keep it separate. For now, let's keep the featured one separate only if 'All' or category matches.
    // And filter it out from the grid to avoid duplication if it's shown as featured.

    // Logic: 
    // If 'All': Show Featured (if exists) + Others
    // If Category: Show Featured (if matches) + Others (if match)

    const showFeatured = featuredArticle && (activeCategory === 'All' || activeCategory === featuredArticle.category);

    const gridArticles = filteredNews.filter(item => item.id !== (showFeatured ? featuredArticle.id : -1));

    return (
        <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">LATEST EDUCATION NEWS</h1>
                    <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest announcements, exam dates, and educational policy changes.
                    </p>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-sm text-sm font-semibold transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-[#CB2027] text-white border-[#CB2027] shadow-md'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#CB2027] hover:text-[#CB2027]'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Featured Article */}
                {showFeatured && (
                    <div className="mb-12 group cursor-pointer">
                        <div className="relative h-[400px] w-full overflow-hidden shadow-xl">
                            <img
                                src={featuredArticle.image}
                                alt={featuredArticle.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 sm:p-10 w-full md:w-2/3">
                                <span className="inline-block px-3 py-1 bg-[#CB2027] text-white text-xs font-bold uppercase tracking-wider rounded-sm mb-4">
                                    {featuredArticle.category}
                                </span>
                                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-gray-200 transition-colors">
                                    {featuredArticle.title}
                                </h2>
                                <p className="text-gray-300 text-lg mb-6 line-clamp-2">
                                    {featuredArticle.excerpt}
                                </p>
                                <div className="flex items-center text-gray-400 text-sm gap-6">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt />
                                        {featuredArticle.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaClock />
                                        {featuredArticle.readTime}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gridArticles.map((item) => (
                        <div key={item.id} className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#CB2027] text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-gray-500 text-xs mb-3 gap-4">
                                    <div className="flex items-center gap-1">
                                        <FaCalendarAlt className="text-[#CB2027]" />
                                        {item.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaClock className="text-[#CB2027]" />
                                        {item.readTime}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#CB2027] transition-colors line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                                    {item.excerpt}
                                </p>
                                <button className="flex items-center gap-2 text-[#CB2027] font-semibold text-sm group-hover:gap-3 transition-all">
                                    Read More <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {gridArticles.length === 0 && !showFeatured && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No news found in this category.</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default News;
