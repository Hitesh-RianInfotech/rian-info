import React from "react";
import Image from "next/image";

const Ai = () => {
  return (
    <div className="flex flex-col bg-[url('/images/3.png')] bg-white bg-cover bg-center lg:flex-row items-center justify-between h-screen pt-32  py-16 px-6 md:pl-16">
      {/* Left Content */}
      <div className="lg:w-1/3 text-center lg:text-left">
        <h2 className=" text-3xl sm:text-4xl lg:text-6xl">
        Generative AI Solutions
                </h2>
        <p className=" text-lg mt-4 max-w-lg">
        Advanced AI-driven tools (e.g., an AI-based landing page generator) for automation and data insights
        </p>
        <button className="mt-6 px-6 py-1 sm:py-2 bg-themeColor text-textSecondary rounded-full sm:text-lg font-medium hover:scale-105 duration-300 transition">
        Request a Free Consultation
                </button>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 mt-10 relative lg:mt-0 flex justify-center">
        <Image
          src="/images/Ai.png" 
          alt="Micro SaaS illustration"
          width={800}
          height={800}
          className="w-full z-10"
        />

      </div>
    </div>
  );
};

export default Ai;
