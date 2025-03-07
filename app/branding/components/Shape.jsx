import React from "react";
import Image from "next/image";

const Shape = () => {
  return (
    <div className="flex flex-col bg-[url('/images/purple.png')] bg-white bg-cover bg-center lg:flex-row items-center justify-between h-screen pt-32  py-16 lg:pl-16">
      {/* Left Content */}
      <div className=" max-w-xl text-center lg:text-left px-4">
        <h2 className=" text-3xl sm:text-4xl lg:text-6xl">
        Shape Your Future with Tech Consulting & Strategy
                        </h2>
        <p className=" text-lg my-8 max-w-lg">
        From workflow audits to digital transformation roadmaps—let’s take your operations to the next level        </p>
        <button className=" px-6 py-1 sm:py-2 bg-themeColor text-textSecondary rounded-full sm:text-lg font-medium hover:scale-105 duration-300 transition">
        Book a Strategy Session
                        </button>
      </div>

      {/* Right Image */}
      <div className="relative overflow-hidden lg:w-full mt-14 lg:mt-0 ">
  {/* Base Image (Bottom Layer) */}
  <Image
    src="/images/consulting.png"
    alt="Micro SaaS illustration"
    width={3000}
    height={3000}
    className="w-full"
  />

  {/* Second Image (Middle Layer) */}
  <Image
    src="/images/rr.png"
    alt="Overlay Image 1"
    width={3000}
    height={3000}
    className="w-full absolute top-0 left-0 z-10"
  />

  {/* Third Image (Top Layer) */}
  <Image
    src="/images/rt.png"
    alt="Overlay Image 2"
    width={3000}
    height={3000}
    className="w-full absolute -top-10 left-0 z-20"
  />
</div>

    </div>
  );
};

export default Shape;
