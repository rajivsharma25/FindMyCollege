import React, { useState } from 'react';
import { FaComments, FaFire, FaRegCommentDots, FaRegHeart, FaRegEye, FaPlus, FaSearch } from 'react-icons/fa';

const Forum = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'General', 'Exams', 'Colleges', 'Admissions', 'Counseling'];

  // Mock Data
  const threads = [
    {
      id: 1,
      title: "JEE Main 2025 Strategy: How to score 200+ in 2 months?",
      author: "Rahul Sharma",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      time: "2 hours ago",
      category: "Exams",
      excerpt: "I have completed my syllabus but struggling with mock tests. Can anyone suggest a good revision strategy for the last 2 months?",
      likes: 124,
      replies: 45,
      views: "1.2k",
      tags: ["#JEE2025", "#Strategy"],
      hot: true
    },
    {
      id: 2,
      title: "NIT Trichy vs IIIT Hyderabad for CSE?",
      author: "Ananya Gupta",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      time: "5 hours ago",
      category: "Colleges",
      excerpt: "I am confused between these two top institutes. My main priority is placements and coding culture. Please help!",
      likes: 89,
      replies: 32,
      views: "850",
      tags: ["#CollegeComparison", "#CSE"],
      hot: false
    },
    {
      id: 3,
      title: "Documents required for JoSAA Counseling 2025",
      author: "Vikram Singh",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      time: "1 day ago",
      category: "Counseling",
      excerpt: "Can someone provide a checklist of all the documents required for physical reporting at the allotted institute?",
      likes: 210,
      replies: 88,
      views: "2.5k",
      tags: ["#JoSAA", "#Documents"],
      hot: true
    },
    {
      id: 4,
      title: "Best books for NEET Physics preparation",
      author: "Priya Patel",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      time: "2 days ago",
      category: "Exams",
      excerpt: "Is HC Verma enough for NEET Physics or should I also solve DC Pandey? Need recommendations from seniors.",
      likes: 156,
      replies: 60,
      views: "1.8k",
      tags: ["#NEET", "#Books"],
      hot: false
    },
    {
      id: 5,
      title: "Life at BITS Pilani: A Student's Perspective",
      author: "Arjun Reddy",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      time: "3 days ago",
      category: "Colleges",
      excerpt: "Sharing my experience of the first year at BITS Pilani. From 0% attendance policy to fests, here's everything you need to know.",
      likes: 340,
      replies: 120,
      views: "5k",
      tags: ["#BITSPilani", "#CampusLife"],
      hot: true
    }
  ];

  const filteredThreads = activeCategory === 'All'
    ? threads
    : threads.filter(thread => thread.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">COMMUNITY FORUM</h1>
          <div className="w-20 h-1 bg-[#CB2027] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the conversation! Ask questions, share experiences, and connect with fellow students and experts.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search topics..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#CB2027] shadow-sm"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* New Topic Button */}
            <button className="w-full py-3 bg-[#CB2027] text-white font-bold uppercase tracking-wide hover:bg-[#b01c22] transition-colors shadow-md flex items-center justify-center gap-2">
              <FaPlus /> Start New Topic
            </button>

            {/* Categories */}
            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">Categories</h3>
              <div className="space-y-1">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded-sm ${activeCategory === category
                        ? 'bg-red-50 text-[#CB2027] border-l-4 border-[#CB2027]'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats Widget */}
            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">Forum Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Members</span>
                  <span className="font-bold text-gray-900">12,450</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Threads</span>
                  <span className="font-bold text-gray-900">8,320</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Online Now</span>
                  <span className="font-bold text-green-600">450</span>
                </div>
              </div>
            </div>

          </div>

          {/* Main Feed */}
          <div className="lg:w-3/4 space-y-4">
            {filteredThreads.map(thread => (
              <div key={thread.id} className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start gap-4">
                  <img
                    src={thread.avatar}
                    alt={thread.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-gray-900">{thread.author}</span>
                      <span className="text-xs text-gray-500">• {thread.time}</span>
                      {thread.hot && (
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full">
                          <FaFire /> Hot
                        </span>
                      )}
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                        {thread.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#CB2027] transition-colors cursor-pointer">
                      {thread.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {thread.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center justify-between pt-4 border-t border-gray-50">
                      <div className="flex gap-2">
                        {thread.tags.map((tag, index) => (
                          <span key={index} className="text-xs text-[#CB2027] font-medium hover:underline cursor-pointer">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-6 text-gray-500 text-sm">
                        <div className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                          <FaRegHeart /> {thread.likes}
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                          <FaRegCommentDots /> {thread.replies}
                        </div>
                        <div className="flex items-center gap-1">
                          <FaRegEye /> {thread.views}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredThreads.length === 0 && (
              <div className="text-center py-20 bg-white border border-gray-100">
                <FaComments className="text-6xl text-gray-200 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No discussions found in this category.</p>
                <button className="mt-4 text-[#CB2027] font-semibold hover:underline">
                  Start a new topic
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Forum;
