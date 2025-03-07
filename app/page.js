import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import VisionValues from "./components/VisionValues";
import WhoWeServe from "./components/WhoWeServe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
<HeroSection/>
<Services/>
<CaseStudies/>
<Testimonials/>
<VisionValues/>
<WhoWeServe/>
<ContactForm/>
   </>
  );
}
