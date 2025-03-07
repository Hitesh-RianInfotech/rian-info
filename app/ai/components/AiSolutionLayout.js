import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AISolutionsLayout = () => {
  const solutions = [
    {
      title: "No Design Skills Needed:",
      description: "Simply input your niche, and the system creates a tailored funnel page."
    },
    {
      title: "A/B Testing & Analytics:",
      description: "Optimize page layouts and copy automatically for better conversions."
    },
    {
      title: " Integrated Payment & Scheduling:",
      description: "Streamlined solution for client bookings and payments."
    }
  ];

  return (
    <div className="min-h-screen bg-themeColor p-6 md:p-12 sm:py-16  flex flex-col justify-center items-center">
      
      <h2 className="text-3xl max-w-xl md:text-4xl text-textSecondary mb-16 text-center">
      AI-Driven Landing Page Generator
      for Coaches & Consultants      </h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Circle Container */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white flex items-center justify-center flex-shrink-0">
          <span className="text-textSecondary md:text-xl text-center">
          Signature Offering <br/>—<br />Funnelforcoach.com
          </span>
        </div>

        {/* Services Container */}
        <div className="flex-1 space-y-6 w-full max-w-xl">
          {solutions.map((solution, index) => (
            <div key={index} className="relative flex items-center">
              {/* Connector Line */}
              <div className="hidden lg:block absolute left-0 top-1/2 w-24 h-px bg-white  -translate-x-28"></div>
              <div className="hidden lg:block absolute left-0  w-4 h-4  bg-white rounded-full -translate-x-28"></div>
              
              <Card className="w-full bg-transparent rounded-full border-white border-b-8 ">
                <CardContent className="p-6">
                  <h3 className="text-textSecondary text-xl font-semibold mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-textSecondary/80 text-sm">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISolutionsLayout;