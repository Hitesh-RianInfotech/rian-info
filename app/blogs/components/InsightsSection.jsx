"use client"
import { useState } from "react";
import { Search } from "lucide-react";

const InsightsSection = () => {
  const tags = ["AI", "Cloud", "DevOps", "Security", "Frontend", "Backend", "Mobile", "Data"];
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <section className="w-full relative bg-gradient-to-b from-blue-50 to-white py-16 text-center">
      <div className="max-w-6xl mx-auto px-4 py-16 ">
        <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Our Latest Insights <br />
          <span className="text-black">& Stories</span>
        </h2>
        <p className="text-gray-600 my-6">
          Discover the latest trends, insights, and innovations in SaaS and technology
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {tags.map((tag, index) => (
            <span key={index} className="px-4 py-2 border border-gray-300 rounded-full text-sm text-themeColor cursor-pointer hover:scale-105 duration-300 transition">
              #{tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => setSearchVisible(!searchVisible)}
          className="absolute top-20 sm:right-10 right-4 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition"
        >
          <Search className="text-themeColor w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default InsightsSection;
