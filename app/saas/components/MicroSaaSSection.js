import React from "react";
import Image from "next/image";

const MicroSaaSSection = () => {
  return (
    <div className="flex flex-col bg-[url('/images/2.png')]  bg-white bg-cover bg-center lg:flex-row items-center justify-between lg:h-screen pt-32  py-16 px-6 md:px-16">
      {/* Left Content */}
      <div className="lg:w-1/3 flex flex-col items-center lg:items-start  text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl">
        Automate Your  Tasks with Our Micro-SaaS Solutions        </h2>
        <p className=" text-lg mt-4 max-w-lg">
        Eliminate manual bottlenecks and focus on what truly matters—growing your business.
        </p>
        <button className="mt-6 px-6 py-1 sm:py-2 bg-themeColor text-textSecondary rounded-full sm:text-lg font-medium hover:scale-105 duration-300 transition">
        See How it Works        </button>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <Image
          src="/images/saas1.png" 
          alt="Micro SaaS illustration"
          width={500}
          height={300}
          className="w-full max-w-xl"
        />
      </div>
    </div>
  );
};

export default MicroSaaSSection;
