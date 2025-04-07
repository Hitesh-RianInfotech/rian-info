"use client";
import Link from "next/link";
import Card from "@/app/components/Card";

/**
 * BlogFooter component displays related articles at the bottom of a blog post
 * @param {Object} props - Component props
 * @param {Array} props.posts - Array of related blog post objects
 */
const BlogFooter = ({ posts = [] }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-20 bg-[url('/images/casebg.png')] bg-cover bg-center">
      <div className="max-w-6xl w-[90vw] mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12">
          <span>⌛</span> Related Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              item={post} 
              ctaText="Read More"
              type="blog"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFooter;


