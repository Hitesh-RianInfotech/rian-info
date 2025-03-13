import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const BlogFooter = ({ posts = [] }) => {
  // Handle empty posts array
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="max-w-6xl w-[90vw] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-themeColor mb-12">Related Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Extracted BlogCard component for better organization
const BlogCard = ({ post }) => {
  const [imageError, setImageError] = useState(false);

  // Handle image loading error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="flex flex-col h-full hover:scale-105 duration-300 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image container with fixed height */}
      <div className="w-full h-48  relative">
        {post.image && !imageError ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover px-2 pt-2"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="sm:text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-xs sm:text-sm  mb-4 line-clamp-3">{post.description}</p>
        
        <div className="flex items-center mt-auto">
          <div className="flex items-center text-gray-500 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className='text-sm'>{post.readTime} min read</span>
          </div>
          
          <Link 
            href={post.url || "#"} 
            className="ml-auto text-themeColor inline-flex items-center font-medium transition-colors"
            aria-label={`Read more about ${post.title}`}
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogFooter;
