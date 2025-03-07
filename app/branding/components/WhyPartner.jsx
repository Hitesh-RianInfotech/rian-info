import Image from "next/image";
import React from "react";

const timelineData = [
  {
    title: "1.   Holistic Perspective",
    description:
      "Our expertise in AI, micro-SaaS, and development means solutions are fully integrated—no piecemeal fixes.",
    direction: "right",
  },
  {
    title: "2.  Collaborative Approach",
    description:
      "We co-create strategies with you, respecting your team’s insights and culture.",
    direction: "left",
  },
  {
    title: "3. Measurable Outcomes",
    description:
      "From day one, we focus on KPIs like time saved, cost reductions, or revenue growth.",
    direction: "right",
  },
];

const WhyPartner = () => {
  return (
    <section className="relative">
        <div className="text-primary py-14 sm:py-20 px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-start">
        <h2 className="text-3xl sm:text-4xl font-bold">
        Why Partner with Rian Infotech?
                </h2>
        <div className="w-12 h-[4px] bg-themeColor rounded-full mt-2 mb-10 sm:mb-20"></div>

        <div className="relative flex flex-col space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="flex items-center justify-center w-full">
              {item.direction === "right" && (
                <div className="hidden md:flex items-center relative">
                  <div className="relative flex justify-center items-center">
                    <div className="w-20 h-20 bg-themeColor opacity-20 rounded-full absolute"></div>
                    <div className="w-4 h-4 bg-themeColor rounded-full z-10"></div>
                  </div>
                  <div className="w-40 lg:w-60 h-[2px] bg-themeColor"></div>
                  <div className="w-0 h-0 border-l-8 border-l-themeColor border-y-4 border-y-transparent"></div>
                </div>
              )}

              <div className="max-w-2xl p-4 text-left">
                <h3
                  className={`text-xl text-themeColor font-semibold ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  {item.title}
                </h3>
                <p className=" max-w-lg bg-white shadow-sm p-2 mt-2">
                  {item.description}
                </p>
              </div>

              {item.direction === "left" && (
                <div className="hidden md:flex items-center relative">
                  <div className="w-0 h-0 border-r-8 border-r-themeColor border-y-4 border-y-transparent"></div>
                  <div className="w-40 lg:w-60 h-[2px] bg-themeColor"></div>
                  <div className="relative flex justify-center items-center">
                    <div className="w-20 h-20 bg-themeColor opacity-20 rounded-full absolute"></div>
                    <div className="w-4 h-4 bg-themeColor rounded-full z-10"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full mt-10 sm:mt-16 flex">
          <button className="bg-themeColor m-auto text-sm text-secondary px-4 sm:px-16 p-1 rounded-full sm:text-lg font-medium hover:scale-105 duration-300 transition">
          Get Your Customized Plan
                    </button>
        </div>
      </div>
      </div>
      <Image width={200} height={200} className="absolute md:block hidden top-0 right-0" src="/images/dots2.png" alt="dots" />
      <Image width={100} height={100} className="absolute md:block hidden top-3/4 left-0" src="/images/dot.png" alt="dots" />

    </section>
  );
};

export default WhyPartner;