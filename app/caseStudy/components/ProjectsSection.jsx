"use client"
import Link from 'next/link';
import Card from '@/app/components/Card';

const projectsData = [
    {
      title: "Billify",
      description: "Transforming business finances with powerful invoicing, real-time analytics, and customizable templates.",
      image: "/images/laptop.png",
      readTime: "5",
      url: "/blogs/4"
    },
    {
      title: "Shop Now",
      description: "Beyond transactions: an ecommerce platform that puts customer care at the heart of every purchase.",
      image: "/images/mobile.png", 
      readTime: "5",
      url: "/blogs/5"
    },
    {
      title: "Stock Track",
      description: "Track, collect, and manage shop rents effortlessly — property management simplified.",
      image: "/images/saas.png", 
      readTime: "5",
      url: "/blogs/6 "
    }
];

const ProjectsSection = () => {
  return (
    <section className="w-full py-12 bg-[url('/images/casebg.png')] bg-cover bg-center">
      <div className="max-w-6xl w-[90vw] mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-12">
          <span>⌛</span> Other Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              item={project} 
              ctaText="Know More"
              type="project"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;