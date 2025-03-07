import Image from "next/image";

const cardData = [
  {
    title: "Custom Development",

    description: "From concept to deployment, our team crafts solutions tailored to your business",
  },
  {
    title: "Future-Ready Architecture",

    description: "We plan for scalability so your app can handle growth without a hitch",
  },
  {
    title: "Exceptional User Experience",
    description: "Through human-centric design, we ensure your digital product delights users and keeps them coming back.",
  },
];

const Problem = () => {
  return (
    <section className="relative">
      <div className="px-10 py-20 lg:px-20 ">
        <div className="max-w-4xl mx-auto ">
          {/* Identifying the Pain Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 relative inline-block">
              Problem Statement & Solution Overview
              <span className="absolute left-0 -bottom-1 h-[4px] w-12 rounded-full bg-themeColor"></span>
            </h2>
            <p className=" sm:text-lg mt-5">
              <strong>Running a growing business often means juggling outdated systems, clunky websites, or basic apps that don’t scale.</strong>
              <span className="">
              At Rian Infotech, we specialize in end-to-end web and mobile application development, ensuring you get a product that’s robust, user
              friendly, and primed for your unique goals.
              </span>
            </p>
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
                <p className="mt-3 font-semibold ">{card.title}</p>
                  <p className="mt-3 ">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          width={30}
          height={30}
          className="absolute right-0 top-1/4 lg:block hidden"
          src="/images/semiright.png"
          alt="semicircle"
        />
      </div>
    </section>
  );
};

export default Problem;
