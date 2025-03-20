"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, memo } from 'react';

/**
 * A reusable Card component that can be used for both blog posts and projects
 * @param {Object} props - Component props
 * @param {Object} props.item - The card data (blog post or project)
 * @param {string} props.item.title - Title of the card
 * @param {string} props.item.description - Description text
 * @param {string} props.item.image - Image URL
 * @param {string} props.item.readTime - Read time in minutes
 * @param {string} props.item.url - URL to navigate to when clicked
 * @param {string} props.ctaText - Call to action text ("Read More" or "Know More")
 * @param {string} props.type - Type of card ("blog" or "project")
 */
const Card = memo(({ item, ctaText = "Read More", type = "blog" }) => {
  const [imageError, setImageError] = useState(false);

  // Validate item data
  if (!item || typeof item !== 'object') {
    return null;
  }

  const { 
    title = 'Untitled', 
    description = '', 
    image, 
    readTime = '5', 
    url = '#' 
  } = item;

  // Handle image loading error
  const handleImageError = () => {
    setImageError(true);
  };

  // Different styling based on card type
  const imageClass = type === 'blog' ? 'object-cover px-2 pt-2' : 'object-cover p-2';
  const descriptionClass = type === 'blog' 
    ? 'text-xs sm:text-sm mb-6 my-2 line-clamp-3' 
    : 'text-gray-600 text-xs sm:text-sm mb-6';
  const titleClass = type === 'blog' ? 'sm:text-xl font-bold mb-3 line-clamp-2' : 'sm:text-xl font-bold mb-3';

  return (
    <div className="flex flex-col h-full hover:scale-105 duration-300 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image container with fixed height */}
      <div className="w-full h-48 relative">
        {image && !imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={imageClass}
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className={titleClass}>{title}</h3>
        <p className={descriptionClass}>{description}</p>

        <div className="flex items-center mt-auto">
          <div className="flex items-center text-gray-500 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm">{readTime} min read</span>
          </div>

          <Link
            href={url}
            className="ml-auto text-themeColor text-sm inline-flex items-center font-medium transition-colors"
            aria-label={`${ctaText} about ${title}`}
          >
            {ctaText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
});

// Display name for debugging
Card.displayName = 'Card';

export default Card; 