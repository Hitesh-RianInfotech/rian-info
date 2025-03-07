const cardData = [
  {
    title: "Hands-On Experience",
    description:
      "We started by solving our own operational bottlenecks—like billing and rent collection—through micro-SaaS tools. These solutions became game-changers for coaches and small business owners juggling daily admin.",
  },
  {
    title: "Learning from Coaches",
    description:
      "We’ve grown under the guidance of incredible coaches at every step. Their dedication and impact inspired us to create tools that lighten their technical load, enabling them to keep uplifting others.",
  },
  {
    title: "Passion for Innovation",
    description:
      "With backgrounds in web, mobile, and AI, we constantly explore ways to simplify day-to-day processes. Our approach? Inject a little fun into problem-solving so you spend less time stuck on the mundane and more time leveling up your business.",
  },
];

const RootsAndInspiration = () => {
  return (
    <section className="px-10 py-20 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-12">How We Can Help You</h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-12 py-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`relative p-2 min-h-[280px] group cursor-pointer hover:scale-105 duration-300 ${
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

export default RootsAndInspiration;
