import { Link } from "lucide-react";
import Image from "next/image";

const cardData = [
    {
      title: "Quick Implementation",
      description:
        "No complex onboarding. Get started fast and see results quickly.",
    },
    {
      title: "Easy Scalability",
      description:
        "Upgrade as your user base or client list grows.",
    },
    {
      title: " Direct Support",
      description:
        " We use these tools ourselves, so we know how to optimize them for maximum efficiency.",
    },
  ];
  
  const WhyUs = () => {
    return (
      <section className="relative">
        <div className="px-10 py-10 sm:py-20 lg:px-20 ">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <div className="relative w-fit">
          <h2 className="text-2xl sm:text-4xl font-bold sm:mb-12">Why Micro-SaaS with Rian Infotech?</h2>
          <span className="absolute hidden sm:block left-0 -bottom-1 h-[4px] w-12 rounded-full bg-themeColor"></span>
          </div>
  
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-12 py-10">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`relative p-2 h-[250px] group bg-gray-200 rounded-2xl cursor-pointer hover:scale-105 duration-300 ${
                  index % 3 === 1 ? "md:mt-8" : "md:mt-0"
                }`}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-[#CBD1FF] rounded-2xl scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
  
                {/* Card */}
                <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg min-h-[200px] flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex">
        <button
          className="bg-themeColor m-auto text-secondary px-4 sm:px-14 p-1 rounded-full sm:text-lg font-medium hover:scale-105 duration-300 transition"
        >
          Start Your Free Trial
        </button>
        </div>
              <Image width={30} height={30}
                className="absolute right-0 top-1/4 lg:block hidden"
                src="/images/semiright.png" alt="semicircle" /> 
                </div>
      </section>
    );
  };
  
  export default WhyUs;
  