const data = [
  {
    topic: "• Discovery: ",
    desc: " Initial conversation to understand your business model, challenges, and goals.",
  },
  {
    topic: "• Assessment & Strategy:",
    desc: "We pinpoint areas of improvement and propose a roadmap for tech adoption or upgrades.",
  },
  {
    topic: "• Execution & Iteration:",
    desc: "We assist in implementing recommendations, measuring results, and refining as needed.",
  },
];
export default function Consulting() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-6 relative">
      <div>
        <h2 className="text-xl sm:text-3xl font-bold mt-10 mb-10 relative inline-block">
          Consulting Process
          <span className="absolute left-0 -bottom-1 h-[4px] rounded-full w-12 bg-themeColor"></span>
        </h2>

        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index}>
                <div className="bg-white shadow-md p-3 sm:text-lg"><span className="text-themeColor font-semibold">{item.topic}{" "}</span>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
