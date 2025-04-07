import { Share2, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedBlogPost = () => {
  return (
    <section className="w-full mx-auto p-8">
    <div className=" max-w-6xl flex flex-col bg-gradient-to-b from-blue-50 to-white  m-auto shadow-md rounded-2xl p-8 lg:flex-row justify-center items-center gap-10">
<Image className=" lg:max-w-1/3 max-h-[300px] object-cover" width={500} height={500} src="/images/laptop.png" alt="1" />
        <div>
      <p className="text-sm text-gray-400">Featured blog post</p>
      <div className="flex items-center gap-2 text-sm text-purple-600 font-medium mt-2">
        <span>Featured Post</span>
        <Clock className="w-4 h-4 text-gray-400" />
        <span className="text-gray-500">8 min read</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mt-2">
        The Future of Micro SaaS: Trends to Watch in 2024
      </h2>
      <p className="text-gray-600 mt-2">
        Explore the emerging trends shaping the future of Micro SaaS products and how they're revolutionizing business operations.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-blue-100 text-themeColor rounded-full text-sm">#MicroSaaS</span>
        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">#Innovation</span>
        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">#Technology</span>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <Link href="/blogs/1" className="px-6 py-2 bg-themeColor text-white font-medium rounded-full hover:scale-105 duration-300 transition">
          Read More
        </Link>
        <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <Share2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
    </div>
    </section>
  );
};

export default FeaturedBlogPost;
