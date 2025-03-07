import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" py-20 bg-white">
      <div className="max-w-6xl  mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        
        {/* Left - Logo */}
        <div className="mb-6 md:mb-0">
            <Image width={200} height={200} 
                  className=" "
                  src="/images/logo.png" alt="img" />
        </div>

        {/* Middle - Quick Links & Services */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold my-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold my-3">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Web Development</a></li>
              <li><a href="#" className="hover:underline">App Development</a></li>
              <li><a href="#" className="hover:underline">AI-Driven Automation</a></li>
              <li><a href="#" className="hover:underline">Customized Software Solutions</a></li>
            </ul>
          </div>
        </div>

        {/* Right - Contact Info & Social Icons */}
        <div className="text-gray-800">
          <h3 className="font-semibold my-3">Contact us</h3>
          <p>Email: info@rianinfotech.com</p>
          <p>Phone: +91-123-456-7890</p>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="text-blue-700 hover:scale-105 duration-300 text-xl"><FaLinkedinIn /></a>
            <a href="#" className="text-blue-500 hover:scale-105 duration-300 text-xl"><FaFacebookF /></a>
            <a href="#" className="text-pink-500 hover:scale-105 duration-300 text-xl"><FaInstagram /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
