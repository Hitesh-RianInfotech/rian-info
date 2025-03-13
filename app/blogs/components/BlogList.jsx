"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClockCircle, AiOutlineShareAlt } from "react-icons/ai"; // Share Icon
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"; // Bookmark Icons
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi"; // View Icons

const blogPosts = [
  {
    id: 1,
    title: "Understanding Modern SaaS Architecture",
    description:
      "Learn about the key components and best practices for building scalable SaaS applications.",
    category: "Technology",
    readTime: "5 min",
    tags: ["#Architecture", "#Cloud", "#Backend"],
    author: "John Doe",
    date: "Mar 15, 2024",
    authorImage: "/images/laptop.png",
    blogImage: "/images/3.png",
    popularity: 98,
  },
  {
    id: 2,
    title: "Scaling Your Micro SaaS Business",
    description:
      "Discover strategie   Discover strategies to scale your micro SaaS business while maintaining product quality and user experience.Discover strategies to scale your micro SaaS business while maintaining product quality and user experience.s to scale your micro SaaS business while maintaining product quality and user experience.",
    category: "Business",
    readTime: "7 min",
    tags: ["#MicroSaaS", "#Growth", "#Strategy"],
    author: "Jane Smith",
    date: "Mar 10, 2024",
    authorImage: "/images/mob.png",
    blogImage: "/images/vector.webp",
    popularity: 120,
  },
  {
    id: 3,
    title: "The Future of AI in SaaS",
    description:
      "How artificial intelligence is transforming the SaaS industry and what to expect in the coming years.",
    category: "AI",
    readTime: "6 min",
    tags: ["#AI", "#SaaS", "#MachineLearning"],
    author: "Alex Brown",
    date: "Mar 8, 2024",
    authorImage: "/images/vector.webp",
    blogImage: "/images/map.png",
    popularity: 150,
  },
];

const BlogList = () => {
  const [view, setView] = useState("grid");
  const [sortOption, setSortOption] = useState("Latest");
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  // Sorting Logic
  const sortedPosts = [...blogPosts].sort((a, b) => {
    if (sortOption === "Latest") return new Date(b.date) - new Date(a.date);
    if (sortOption === "Oldest") return new Date(a.date) - new Date(b.date);
    if (sortOption === "Popular") return b.popularity - a.popularity;
    return 0;
  });

  // Bookmark Toggle
  const toggleBookmark = (postId) => {
    setBookmarkedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
          <span className="">Sort by:</span>
          <select
            className="px-2 py-1 border rounded-full cursor-pointer"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Latest">Latest</option>
            <option value="Popular">Popular</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-3">
          <span className="text-gray-600">View:</span>
          <button
            className={`p-2 rounded-full ${
              view === "grid" ? "bg-blue-100 text-themeColor" : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setView("grid")}
          >
            <HiOutlineViewGrid className="w-5 h-5" />
          </button>
          <button
            className={`p-2 rounded-full ${
              view === "list" ? "bg-blue-100 text-themeColor" : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setView("list")}
          >
            <HiOutlineViewList className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Blog List */}
      <div
        className={`grid ${
          view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "grid-cols-1 gap-6"
        }`}
      >
        {sortedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white mb-10 relative shadow-md hover:scale-105 duration-300 rounded-xl overflow-hidden"
          >
            {/* Blog Image */}
            <Image
              width={400}
              height={400}
              src={post.blogImage}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              {/* Category & Read Time */}
                <div className="flex items-center gap-3">
                  <span className="text-sm sm:text-base text-themeColor">{post.category}</span>
                  <div className="flex items-center gap-1">
                  <AiOutlineClockCircle className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div></div>

                 {/* Bookmark & Share Icons */}
                 <div className="flex gap-4 absolute top-4 right-4">
                  
                  <button>
                    <AiOutlineShareAlt className="text-gray-400 hover:scale-125 duration-300 w-5 h-5" />
                  </button>
                  <button onClick={() => toggleBookmark(post.id)}>
                    {bookmarkedPosts.includes(post.id) ? (
                      <BsBookmarkFill className="text-themeColor hover:scale-110 duration-300 w-5 h-5" />
                    ) : (
                      <BsBookmark className="text-gray-400 w-5 h-5 hover:scale-110 duration-300" />
                    )}
                  </button>
                </div>

              {/* Title & Description */}
              <h2 className="text-lg line-clamp-2 overflow-hidden font-bold my-2">{post.title}</h2>
              <p className="text-xs line-clamp-3 overflow-hidden sm:text-sm font-light mt-1">{post.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-light">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author & Actions */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <Image
                    width={100}
                    height={100}
                    src={post.authorImage}
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                <Link href={`/blogs/${post.id}`} className="text-themeColor font-medium flex items-center gap-1">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center my-5">
        <button className="px-6 py-2 text-sm sm:text-base bg-blue-100 text-themeColor font-medium rounded-full hover:scale-105 duration-300 transition">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default BlogList;
