import React from 'react'
import Profi from './components/Profi'
import Overview from './components/OverView'
import KeyFeatures from './components/KeyFeatures'
import TechnologyStack from './components/TechnologyStack'
import ProjectStructure from './components/ProjectStructure'
import ProjectStructure2 from './components/ProjectStructure2'
import BlogFooter from '../blogs/[id]/components/BlogFooter'
import ProjectsSection from './components/ProjectsSection'

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

const page = () => {
  return (
<>
<Profi/>
<Overview/>
<KeyFeatures/>
<TechnologyStack/>
{/* <ProjectStructure/> */}
{/* <ProjectStructure2/> */}
<ProjectsSection/>
<BlogFooter posts={recentPosts} />
</>
  )
}

export default page