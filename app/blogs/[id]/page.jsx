'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import BlogHeader from './components/BlogHeader';
import BlogContent from './components/BlogContent';
import BlogFooter from './components/BlogFooter';

// Sample blog post data - in a real app, this would come from an API
const blogPosts = [
  {
    id: "1",
    title: "The Future of Micro SaaS: Trends to Watch in 2024",
    introduction: "The Micro SaaS landscape is evolving rapidly, bringing new opportunities and challenges for entrepreneurs and developers. In this comprehensive guide, we'll explore the key trends shaping the future of Micro SaaS in 2024 and beyond.",
    aiIntegration: "Artificial Intelligence is no longer just a buzzword in the SaaS industry. Micro SaaS products are increasingly incorporating AI capabilities to provide more value to their users. From automated customer service to intelligent data analysis, AI is becoming a core component of modern SaaS solutions.",
    noCodeSolutions: "The rise of no-code and low-code platforms is democratizing software development. This trend is particularly significant in the Micro SaaS space, where entrepreneurs can now build and deploy solutions without extensive technical knowledge.",
    verticalSaaS: "Vertical SaaS solutions, focused on specific industries or niches, are gaining traction. This specialization allows for deeper feature sets and better alignment with industry-specific needs.",
    conclusion: "The future of Micro SaaS is bright, with new technologies and approaches making it easier than ever to build and scale successful software businesses. By staying ahead of these trends, entrepreneurs can position themselves for success in this evolving landscape.",
    category: "Technology",
    readTime: "8 min",
    date: "March 15, 2024",
    author: "John Doe",
    authorRole: "Lead Developer @rianinfotech",
    authorBio: "John is a Lead Developer at Rianinfotech with over 10 years of experience in SaaS development. He specializes in building scalable solutions and writing about emerging tech trends.",
    authorImage: "/images/mob.png",
    tags: ["MicroSaaS", "Innovation", "Technology"]
  },
];

// Sample related posts data
const recentPosts = [
  {
    title: "Understanding Modern SaaS Architecture",
    description: "Learn about the key components and best practices for building scalable SaaS applications.",
    image: "/images/models.png",
    readTime: "5",
    url: "/blogs/2"
  },
  {
    title: "The Rise of AI in Customer Service",
    description: "How artificial intelligence is transforming customer support and engagement in SaaS products.",
    image: "/images/vector.webp",
    readTime: "7",
    url: "/blogs/3"
  },
  {
    title: "Pricing Strategies for SaaS Startups",
    description: "Effective pricing models and strategies to maximize revenue and customer satisfaction.",
    image: "/images/laptop.png",
    readTime: "6",
    url: "/blogs/4"
  }
];

/**
 * BlogDetail component displays a full blog post with related articles
 */
const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog data
  const fetchBlogData = useCallback(async () => {
    try {
      setLoading(true);
      
      // Simulate API fetch with a small delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // In a real app, this would be an API call
      const selectedBlog = blogPosts.find((post) => post.id === id) || blogPosts[0];
      
      if (!selectedBlog) {
        setError('Blog post not found');
      } else {
        setBlog(selectedBlog);
        setError(null);
      }
    } catch (err) {
      console.error('Error fetching blog post:', err);
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  // Loading state
  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen bg-[#F8F7FF]'>
        <div className='animate-pulse text-center'>
          <div className='h-8 w-32 bg-gray-300 rounded mb-4 mx-auto'></div>
          <p className='text-gray-600'>Loading blog post...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className='flex justify-center items-center min-h-screen bg-[#F8F7FF]'>
        <div className='text-center p-8 max-w-md'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Oops!</h2>
          <p className='text-gray-600 mb-6'>{error}</p>
          <a href="/blogs" className='px-4 py-2 bg-[#6B4EFF] text-white rounded-lg hover:bg-[#5A3FE0] transition-colors'>
            Back to Blogs
          </a>
        </div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className='bg-[#F8F7FF] min-h-screen'>
      <BlogHeader blog={blog} />
      <BlogContent blog={blog} />
      <BlogFooter posts={recentPosts} />
    </div>
  );
};

export default BlogDetail;