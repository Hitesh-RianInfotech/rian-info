"use client";
export default function Benefits() {
  const features = [
    {
      id: 1,
      title: "Full-Cycle Expertise",
      description:
        "Design, development, testing, launch, and ongoing support—all under one roof.",
    },
    {
      id: 2,
      title: "Seamless Integration",
      description:
        "Integrate third-party services (payment gateways, CRMs, etc.) to streamline operations.",
    },
    {
      id: 3,
      title: "Secure & Scalable",
      description:
        "We build on robust frameworks that prioritize data security and high-performance.",
    },
    {
      id: 4,
      title: "Dedicated Support",
      description:
        "Our team is with you post-launch, offering updates, maintenance, and feature enhancements.",
    },
  ];

  return (
    <section className="bg-themeColor relative text-textSecondary py-28 pb-40 md:py-16  mb-40 min-h-[80vh] flex justify-center items-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 flex items-center justify-start gap-2">
          <span>⏳</span> Benefits & Features
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white/10 p-6 md:py-12 rounded-2xl shadow-md text-left hover:scale-105 duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-3">
                {feature.id}. {feature.title}
              </h3>
              <p className="text-sm md:my-10 opacity-80">{feature.description}</p>
              <span className="block mt-4 text-lg">→</span>
            </div>
          ))}
        </div>
      </div>

      <div className="my-12 border-l-8 w-[90vw] absolute -bottom-60 border-[#DBDEFF] text-primary max-w-2xl m-auto bg-white shadow-lg rounded-xl px-6 py-10 sm:px-10 sm:py-12 ">
        <h2 className=" font-bold mb-8 relative inline-block">
          Case Study Snippet{" "}
          <span className="absolute left-0 -bottom-1 h-[4px] w-12 rounded-full bg-themeColor"></span>
        </h2>
        <p className="italic">
        “We needed an e-commerce mobile app for our boutique. Rian Infotech delivered an intuitive design and integrated it with our inventory system. Our sales grew by 40% within the first two months.”{" "}
        </p>
        <p className="text-gray-600 text-right mt-4">—Alice P., Boutique Owner</p>
      </div>
    </section>
  );
}
