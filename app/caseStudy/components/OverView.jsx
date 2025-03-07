"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Import hook

const stats = [
  { id: 1, value: 75, suffix: "%", label: "User Retention Rate" },
  { id: 2, value: 10000, suffix: "+", label: "AI Queries Resolved" },
  { id: 3, value: 500, suffix: "+", label: "Expense Entries Logged Monthly" },
];

const beforeAfterData = [
  { id: 1, text: "Loream Ipsum 01" },
  { id: 2, text: "Loream Ipsum 01" },
  { id: 3, text: "Loream Ipsum 01" },
  { id: 4, text: "Loream Ipsum 01" },
  { id: 5, text: "Loream Ipsum 01" },
];

const Overview = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 }); // Detect visibility

  return (
    <section ref={ref} className="py-12 sm:py-20 px-6 text-center bg-[url('/images/halfbg.png')] bg-cover">
      <div className="max-w-5xl m-auto">
        {/* Overview Text */}
        <h2 className="text-3xl font-bold text-start mb-6">Overview</h2>
        <p className="text-start sm:text-lg mx-auto">
          ProFi is a comprehensive finance tracking solution designed to help individuals and businesses manage their financial health. It combines expense tracking, project management, and client relationship tools with an AI-powered chat assistant for intelligent insights and personalized advice.
        </p>

        {/* Stats Section */}
        <div className="mt-10 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white shadow-lg z-10 rounded-lg p-6 py-10 text-center">
              <h3 className="text-4xl font-bold">
                {inView ? <CountUp end={stat.value} duration={3} /> : 0}
                {stat.suffix}
              </h3>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
          <Image className="absolute -top-10 left-1/2 hidden md:block" width={200} height={200} src="/images/dots.png" alt="img" />
        </div>

        {/* Before & After Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Before Rian Infotech */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 md:py-16">
            <h3 className="text-xl sm:text-2xl sm:text-start font-bold text-red-500 mb-4 sm:mb-8">
              Before Rian Infotech
            </h3>
            <ul className="text-left space-y-2">
              {beforeAfterData.map((item) => (
                <li key={item.id} className="flex justify-center sm:justify-start items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* After Rian Infotech */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 md:py-16">
            <h3 className="text-xl sm:text-2xl sm:text-start font-bold text-green-500 mb-4 sm:mb-8">
              After Rian Infotech
            </h3>
            <ul className="text-left space-y-2">
              {beforeAfterData.map((item) => (
                <li key={item.id} className="flex justify-center sm:justify-start items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
