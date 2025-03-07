const cardData = [
  {
    title: "Generative AI Tools",
    description:
      "Like Funnelforcoach.com, which removes the hassle of building landing pages from scratch.",
  },
  {
    title: "Micro-SaaS Products",
    description:
      "Lightweight but powerful solutions to automate billing, rent collection, or any repetitive tasks you’d rather not handle manually.",
  },
  {
    title: "Consulting & Strategy",
    description:
      "Custom roadmaps and expertise to ensure you never feel alone in your tech adoption or digital transformation.",
  },
];

const Help = () => {
  return (
    <section className="px-10 py-20 lg:px-20 bg-[url('/images/bgready.png')] bg-cover bg-center">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-12">How We Can Help You</h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-12 py-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`relative p-2 h-[250px] group cursor-pointer hover:scale-105 duration-300 ${
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
    </section>
  );
};

export default Help;
