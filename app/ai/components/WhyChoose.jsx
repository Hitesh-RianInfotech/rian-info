import React from "react";

const timelineData = [
  {
    title: "1.  Customizable & Scalable",
    description:
      "We tailor our AI tools to fit your exact needs, whether you’re a solopreneur or a fast-growing team.",
    direction: "right",
  },
  {
    title: "2.  Practical Implementation",
    description:
      " We prioritize real-world use cases that deliver immediate ROI.",
    direction: "left",
  },
  {
    title: "3. Ongoing Education & Support",
    description:
      "From tutorials to personalized coaching, we ensure you’re fully equipped to harness AI.",
    direction: "right",
  },
];

const WhyChoose = () => {
  return (
    <section className="text-primary py-14 sm:py-20 px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-start">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Why Choose Rian Infotech’s AI Solutions?
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
          <button className="bg-themeColor m-auto text-sm text-secondary px-4 sm:px-16 p-1.5 rounded-full sm:text-lg font-medium hover:scale-105 duration-300 transition">
            Book Your Personalized Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;