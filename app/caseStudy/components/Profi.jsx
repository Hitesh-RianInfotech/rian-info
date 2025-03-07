import React from "react";
import Image from "next/image";

const Profi = () => {
  return (
    <div className="flex flex-col bg-[url('/images/casebg.png')]  bg-white bg-cover bg-center lg:flex-row items-center justify-between h-screen pt-32  py-16 px-6 lg:pl-16 md:px-16 lg:px-0">
      {/* Left Content */}
      <div className="lg:w-1/3 flex flex-col items-center lg:items-start  text-center lg:text-left">
      <div className="flex gap-6 mb-10 sm:mb-20 justify-center items-center ">
      <span className="text-themeColor ">Case study</span><span className="">Profi</span></div>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl">
        <span className="text-themeColor"> ProFi </span> AI-Powered Finance Tracking Solution     </h2>
        <p className=" text-lg mt-4 max-w-lg">
        Flutter-based mobile application     </p>
      </div>

      {/* Right Image */}
      <div className="lg:w-3/5  mt-10 lg:mt-0 flex justify-end">
        <Image
          src="/images/mobile.png" 
          alt="Micro SaaS illustration"
          width={600}
          height={600}
          className="w-full max-w-3xl"
        />
      </div>
    </div>
  );
};

export default Profi;
