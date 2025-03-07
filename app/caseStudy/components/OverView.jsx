"use client"
import CountUp from "react-countup";

const stats = [
  { id: 1, value: 75, suffix: "%", label: "User Retention Rate" },
  { id: 2, value: 10000, suffix: "+", label: "AI Queries Resolved" },
  { id: 3, value: 500, suffix: "+", label: "Expense Entries Logged Monthly" },
];

const Overview = () => {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Overview</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        ProFi is a comprehensive finance tracking solution designed to help
        individuals and businesses manage their financial health. It combines
        expense tracking, project management, and client relationship tools
        with an AI-powered chat assistant for intelligent insights and
        personalized advice.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <h3 className="text-4xl font-bold text-gray-800">
              <CountUp end={stat.value} duration={3} />
              {stat.suffix}
            </h3>
            <p className="text-gray-500 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
