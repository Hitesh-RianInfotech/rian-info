import Image from "next/image";

const cardData = [
    {
      description:
        "Disconnected systems leading to data silos.",
    },
    {
      description:
        "Manual processes draining time and resources.",
    },
    {
      description:
        " Unclear ROI on new tech investments.",
    },
  ];
  
  const WhyConsulting = () => {
    return (
      <section className="relative">
        <div className="px-10 py-20 lg:px-20 ">
        <div className="max-w-4xl mx-auto ">
        {/* Identifying the Pain Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
          Why Consulting?
                      <span className="absolute left-0 -bottom-1 h-[4px] w-12 rounded-full bg-themeColor"></span>
          </h2>
          <p className="text-textPrimary text-lg mt-5">
            <span>If you’re </span>
            <strong className="font-semibold">
            uncertain about your next technology move            </strong>{" "}
            — or overwhelmed by the idea of AI, new software, or digital transformation —{" "}
            <strong className="font-semibold">Rian Infotech</strong> offers the clarity and direction you need. We partner closely with you to {" "}
            <strong className="font-semibold">identify gaps, prioritize solutions, and chart a feasible path forward.</strong> 
            
          </p>
        </div>
          {/* Title */}
          <div className="relative w-fit">
          <h2 className="text-lg sm:text-xl text-themeColor">Common Challenges We Address</h2>
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
                  <p className="mt-3 text-xl">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
              <Image width={30} height={30}
                className="absolute right-0 top-1/4 lg:block hidden"
                src="/images/semiright.png" alt="semicircle" /> 
                </div>
      </section>
    );
  };
  
  export default WhyConsulting;
  