import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoSend } from "react-icons/io5";


export default function Footer() {
  return (
    <footer className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 items-start">
        
        {/* Left - Logo and Email Subscription */}
        <div className="mb-8 md:mb-0 md:max-w-xs">
          <Image width={150} height={150} 
                className="mb-4"
                src="/images/logo.png" alt="img" />
          
          {/* Email Subscription */}
          <div className="mt-4">
            <h3 className="sm:text-lg font-semibold text-themeColor mb-2">Stay Updated</h3>
            <p className="text-sm  mb-3">Subscribe to our newsletter for the latest insights and updates.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className=" pl-1 pr-4 py-1 border  rounded-md w-fit focus:outline-none"
              />
              <button className=" text-themeColor text-2xl hover:scale-105 duration-300 rounded-full">
              <IoSend />
              </button>
            </div>
          </div>
        </div>

        {/* Middle - Quick Links & Services */}
        <div className="grid grid-cols-2 gap-8 mb-8 md:mb-0">
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
        <div className="">
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