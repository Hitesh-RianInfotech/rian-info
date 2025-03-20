import Image from "next/image";

const features = [
  {
    title: "Dashboard and Analytics",
    description: [
      "View a summary of key financial metrics.",
      "Track total expenses, project budgets, and client activity.",
      "Analyze financial trends over different time periods.",
    ],
    color: "text-[#E8A5A5]",
    position: "absolute -top-5 left-[25%]",
    icon: "📊",
  },
  {
    title: "Data Persistence",
    description: [
      "Securely store expense, project, and client data.",
      "Access and manage data offline.",
    ],
    color: "text-[#9B6CD6]",
    position: "absolute top-[3%] right-[10%]",
    icon: "🔒",
  },
  {
    title: "Data Persistence", // Note: Duplicate title from the original
    description: [
      "Securely store expense, project, and client data.",
      "Access and manage data offline.",
    ],
    color: "text-[#7A8DD7]",
    position: "absolute top-[7%] -right-52",
    icon: "🔒",
  },
  {
    title: "Project Management",
    description: [
      "Create and manage projects with details like client, budget, and status.",
      "Track project progress and deadlines.",
      "Assign team members and manage their contributions.",
    ],
    color: "text-[#7A8DD7]",
    position: "absolute top-[15%] -left-20",
    icon: "📁",
  },
  {
    title: "Expense Tracking",
    description: [
      "Log expenses with descriptions, amounts, categories, and dates.",
      "Categorize expenses for analysis and reporting.",
      "Visualize expense trends with charts and graphs.",
      "Analyze expenses by category and time period.",
    ],
    color: "text-[#5C75E6]",
    position: "absolute bottom-0 -left-20",
    icon: "💰",
  },
  {
    title: "Client Relationship Management",
    description: [
      "Store and manage client details, including contact information and company profiles.",
      "Track client interactions and project history.",
      "Filter and sort clients by status and other criteria.",
    ],
    color: "text-[#E7B07F]",
    position: "absolute bottom-[8%] right-[35%]",
    icon: "👥",
  },
  {
    title: "AI-Powered Chat Assistant",
    description: [
      "Ask questions about financial data and receive instant answers.",
      "Get personalized insights and advice based on spending patterns and project budgets.",
      "Communicate with the AI assistant through a user-friendly chat interface.",
    ],
    color: "text-[#97A8EB]",
    position: "absolute bottom-[12%] -right-10",
    icon: "🤖",
  },
];

const KeyFeatures = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-[url('/images/casebg.png')] bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold flex items-start justify-start mb-10">
          <span className="mr-2">⏳</span> Key Features:
        </h2>

        {/* Mobile View - Simple stack */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:hidden">
          {features.map((feature, index) => (
            <div key={index} className="w-full">
              <h3 className={`font-semibold ${feature.color} flex items-center`}>
                <span className="mr-2 text-2xl">{feature.icon}</span>
                {feature.title}
              </h3>
              <ul className="space-y-1 text-gray-600 mt-2">
                {feature.description.map((desc, i) => (
                  <li key={i} className="flex text-sm items-start">
                    <span className="mr-2  text-lg">•</span> {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Desktop View - Fixed layout with background image */}
        <div className="hidden xl:block relative h-[800px] max-w-5xl mx-auto">
          {/* Fixed position background image with set dimensions */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/group.png"
                alt="Features background"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Features with absolute positioning */}
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.position} w-full max-w-xs p-2`}
            >
              <h3 className={`font-semibold ${feature.color} flex items-center`}>
                <span className="mr-2 text-2xl">{feature.icon}</span>
                {feature.title}
              </h3>
              <ul className="space-y-1 text-gray-600 mt-2">
                {feature.description.map((desc, i) => (
                  <li key={i} className="flex text-sm max-w-[200px] items-start">
                    <span className="mr-2 text-lg">•</span> {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;