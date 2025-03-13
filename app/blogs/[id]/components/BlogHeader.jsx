'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClockCircle, AiOutlineShareAlt } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';

const BlogHeader = ({ blog }) => {
  // Helper function to get tag color based on index
  const getTagColor = (index) => {
    const colors = [
      { bg: 'bg-[#EBE8FF]', text: 'text-[#6B4EFF]' },
      { bg: 'bg-[#FFE8F7]', text: 'text-[#FF4ECD]' },
      { bg: 'bg-[#E8FFF3]', text: 'text-[#3EFF3F]' }
    ];
    return colors[index % colors.length];
  };

  return (
    <section className='bg-gradient-to-b from-blue-100 to-white pt-20 pb-10'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Navigation icons */}
        <div className='flex justify-between items-center mb-8'>
          <button className='h-8 w-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-sm'>
            <BiArrowBack className='w-5 h-5' />
          </button>
          <div className='flex gap-2'>
            <button className=' h-8 w-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-sm'>
              <BsBookmark className='w-4 h-4' />
            </button>
            <button 
              className='h-8 w-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-sm'
            >
              <AiOutlineShareAlt className='w-5 h-5' />
            </button>
          </div>
        </div>

        {/* Blog Header */}
        <div className='mb-8'>
          <div className='flex flex-wrap items-center gap-4 text-xs mb-4'>
            <span className='text-themeColor bg-white px-4 py-1 rounded-full font-medium'>{blog.category}</span>
            <span className='flex items-center bg-white gap-1 px-4 py-1 rounded-full'>
              <AiOutlineClockCircle className='w-4 h-4' />
              {blog.readTime}
            </span>
            <span className='px-4 py-1 bg-white rounded-full'>{blog.date}</span>
          </div>
          
          <h1 className='text-3xl md:text-5xl font-bold max-w-2xl text-black mb-6'>
            {blog.title}
          </h1>
          
          <div className='flex flex-wrap gap-3 mb-8'>
            {blog.tags.map((tag, index) => {
              const { bg, text } = getTagColor(index);
              return (
                <span key={index} className={`px-4 py-1 rounded-full text-sm font-medium ${bg} ${text}`}>
                  #{tag}
                </span>
              );
            })}
          </div>
          
          <div className='flex bg-white w-fit rounded-2xl px-6 py-2 items-center gap-3'>
            <div className='relative w-12 h-12 rounded-full overflow-hidden border'>
              <Image 
                src={blog.authorImage}
                alt={blog.author} 
                fill
                sizes="48px"
                className='object-cover'
              />
            </div>
            <div>
              <p className='font-medium'>{blog.author}</p>
              <p className='text-sm font-light'>{blog.authorRole}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;