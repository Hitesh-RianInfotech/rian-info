import React from "react";

const features = [
  {
    title: "Ease of Integration",
    description:
      "Seamlessly connect our SaaS products with your existing tools and workflows in minutes, with robust APIs and plug-and-play simplicity.",
  },
  {
    title: "Scalability",
    description:
      "Our solutions grow with your business, handling increased data and user demands without compromising performance or speed.",
  },
  {
    title: "Affordability",
    description:
      "Budget-friendly plans ensure you only pay for what you need, with no hidden costs or long-term commitments.",
  },
  {
    title: "Customizability",
    description:
      "Tailor features, branding, and functionalities to suit your unique business needs with our modular design.",
  },
  {
    title: "Security & Compliance",
    description:
      "Protect your data with advanced encryption, regular updates, and compliance with industry regulations like GDPR and HIPAA.",
  },
  {
    title: "Automation",
    description:
      "Save time with AI-driven insights, automated workflows, and smart notifications for enhanced efficiency.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[url('/images/bgready.png')] bg-cover bg-center px-10 py-20 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-12">Features</h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-12 py-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-2 h-[300px] group cursor-pointer hover:scale-105 duration-300 ${
                index % 3 === 1 ? "md:mt-8" : "md:mt-0"
              }`}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-[#CBD1FF] rounded-2xl scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>

              {/* Card */}
              <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg min-h-[240px] flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
