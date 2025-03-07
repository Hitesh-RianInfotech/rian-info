import React from "react";
import Image from "next/image";

const Developement = () => {
  return (
    <div className="flex flex-col bg-[url('/images/orange.png')]  bg-white bg-cover bg-center lg:flex-row items-center justify-between h-screen pt-32  py-16 px-6 md:px-16">
      {/* Left Content */}
      <div className="lg:w-1/3 flex flex-col items-center lg:items-start  text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl">
        Web & Mobile App Development       </h2>
        <p className=" text-lg mt-4 max-w-lg">
        Build custom, user-focused websites and apps that drive growth and set you apart.        </p>
        <button className="mt-6 px-6 py-1 sm:py-2 bg-themeColor text-textSecondary rounded-full sm:text-lg font-medium hover:scale-105 duration-300 transition">
        Schedule a Free Consultation</button>
      </div>

      {/* Right Image */}
      <div className="lg:w-3/5 mt-10 lg:mt-0 flex justify-center">
        <Image
          src="/images/laptop.png" 
          alt="Micro SaaS illustration"
          width={600}
          height={600}
          className="w-full max-w-3xl"
        />
      </div>
    </div>
  );
};

export default Developement;
