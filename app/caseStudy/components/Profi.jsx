import React from "react";
import Image from "next/image";

const Profi = () => {
  return (
    <div className="flex flex-col bg-[url('/images/casebg.png')] bg-cover bg-center lg:flex-row items-center justify-between lg:min-h-screen pt-32 py-12 px-4 sm:px-6 lg:pl-16 md:px-16 lg:px-0 overflow-hidden">
      {/* Left Content */}
      <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left mb-20 lg:mb-0">
        <div className="flex gap-6 mb-6 sm:mb-10 justify-center lg:justify-start items-center">
          <span className="text-themeColor">Case study</span>
          <span className="">Profi</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <span className="text-themeColor">ProFi</span> AI-Powered Finance
          Tracking Solution
        </h2>
        <p className="text-base md:text-lg mt-4 max-w-lg">
          Flutter-based mobile application
        </p>
      </div>

      {/* Mobile Phones Display */}
      <div className="relative w-[90vw]  lg:w-3/5 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex justify-center items-center">
        {/* Left Phone */}
        <div className="absolute hover:scale-110 hover:z-20 duration-300 w-32 sm:w-48 md:w-52 lg:w-60 transform -rotate-12 z-0 left-1/2 translate-x-[-120%] sm:-translate-x-10 sm:left-[15%] md:left-[20%] cursor-pointer lg:left-[15%]">
          <div className="relative w-full" style={{ paddingTop: "200%" }}>
            {/* Custom Mobile Frame */}
            <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] shadow-xl border-4 sm:border-8 border-black overflow-hidden">
              {/* Notch */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 h-4 sm:h-5 md:h-6 w-1/2 bg-black rounded-b-xl md:rounded-b-2xl"></div>

              {/* Screenshot content */}
              <div className="h-full w-full overflow-hidden">
                <img
                  src="/images/1.webp"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-fit"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Center Phone */}
        <div className="relative hover:scale-110 hover:z-20 duration-300 w-36 sm:w-52 md:w-56 lg:w-64 z-10 cursor-pointer transform -translate-y-3">
          <div className="relative w-full" style={{ paddingTop: "200%" }}>
            {/* Custom Mobile Frame */}
            <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] shadow-xl border-4 sm:border-8 border-black overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-3 sm:h-5 w-1/2 bg-black rounded-b-xl md:rounded-b-2xl"></div>

              {/* Screenshot content */}
              <div className="h-full w-full overflow-hidden">
                <img
                  src="/images/2.webp"
                  alt="Dashboard Screen"
                  className="w-full h-full object-fit"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Phone */}
        <div className="absolute hover:scale-110 hover:z-20 duration-300 w-32 sm:w-48 md:w-52 lg:w-60 transform rotate-12 z-0 right-1/2 translate-x-[120%] sm:translate-x-10 sm:right-[15%] md:right-[20%] cursor-pointer lg:right-[15%]">
          <div className="relative w-full" style={{ paddingTop: "200%" }}>
            {/* Custom Mobile Frame */}
            <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] shadow-xl border-4 sm:border-8 border-black overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-3 sm:h-5  w-1/2 bg-black rounded-b-xl md:rounded-b-2xl"></div>

              {/* Screenshot content */}
              <div className="h-full w-full overflow-hidden">
                <img
                  src="/images/3.webp"
                  alt="AI Assistant Screen"
                  className="w-full h-full object-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profi;
