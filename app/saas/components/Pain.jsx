import Image from "next/image";

export default function Pain() {
    return (
      <section className="w-full relative">
      <div className="max-w-4xl mx-auto py-16 px-6 ">
        {/* Identifying the Pain Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Identifying the Pain
            <span className="absolute left-0 -bottom-1 h-[4px] w-12 rounded-full bg-themeColor"></span>
          </h2>
          <p className="text-textPrimary text-lg mt-5">
            <strong className="font-semibold">
              Tired of repetitive tasks slowing you down?
            </strong>{" "}
            Micro-SaaS products from Rian Infotech tackle those specific, everyday
            challenges—so you don’t have to. Our specialized platforms, like{" "}
            <strong className="font-semibold">Billify</strong> for billing and{" "}
            <strong className="font-semibold">Rent Collection</strong> for
            property management, deliver{" "}
            <strong className="font-semibold">plug-and-play efficiency</strong>{" "}
            without the overhead of large-scale enterprise software.
          </p>
        </div>
  
        {/* What Makes Micro-SaaS Different? */}
        <div>
          <h2 className="text-2xl font-bold mt-10 mb-10 relative inline-block">
            What Makes Micro-SaaS Different?
            <span className="absolute left-0 -bottom-1 h-[4px] rounded-full w-12 bg-themeColor"></span>
          </h2>
  
          <div className="space-y-4">
            {[
              "Lightweight and targeted—no bloated features you’ll never use.",
              "Affordable subscription models—pay only for what you need.",
              "Quick to implement—start automating in days, not months.",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white shadow-md px-4 py-2 flex items-center space-x-3 "
              >
                <span className="text-themeColor text-2xl">•</span>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <Image width={30} height={30}
        className="absolute left-0 top-1/4 lg:block hidden"
        src="/images/semileft.png" alt="semicircle" />  
        <Image width={100} height={100}
        className="absolute right-0 top-1/3 hidden lg:block"
        src="/images/dot.png" alt="dots" /> 
            </div>
            </section>
    );
  }
  