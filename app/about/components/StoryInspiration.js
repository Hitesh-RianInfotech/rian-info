import React from "react";

const StoryInspiration = () => {
  return (
    <div className=" bg-white py-12 sm:py-20 px-6 md:px-16">
      <h2 className="text-3xl max-w-4xl m-auto md:text-4xl font-semibold text-start mb-10">
        Our Story & Inspiration
      </h2>
      <div className="max-w-4xl m-auto space-y-6">
        {/* Card 1 */}
        <div className="bg-gray-100 rounded-xl border-l-4 border-themeColor px-6 py-10 shadow-sm hover:scale-105 duration-300 cursor-pointer">
          <h3 className="font-semibold text-lg">
            Real-World Perspective
          </h3>
          <p className=" mt-2">
            From the start, we’ve had the privilege of learning from amazing
            coaches who guided us through our own growth challenges. Their
            dedication and impact continue to inspire us to create tech
            solutions that lighten their load—so they can keep uplifting others
            without the hassle of managing cumbersome tasks.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-xl border-l-4 border-themeColor px-6 py-10 shadow-sm hover:scale-105 duration-300 cursor-pointer ">
          <h3 className="font-semibold text-lg ">
            Real-World Beginnings
          </h3>
          <p className=" mt-2">
            We began by solving our own everyday problems—like automating
            billing and rent collection. As we shared these tools, we noticed
            how much time and energy they saved other business owners. That’s
            when we realized our “cheat codes” were not just for us, but for
            anyone looking to{" "}
            <span className="font-semibold">
              streamline operations and scale with confidence.
            </span>
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 rounded-xl border-l-4 border-themeColor px-6 py-10 shadow-sm hover:scale-105 duration-300 cursor-pointer">
          <h3 className="font-semibold text-lg ">
            Passion for Innovation
          </h3>
          <p className=" mt-2">
            Backed by our expertise in web, mobile, and AI development, we
            thrive on transforming complex issues into user-friendly solutions.
            Whether it’s generating AI-powered landing pages for coaches or
            building micro-SaaS platforms that eliminate manual tasks, our goal
            is to make{" "}
            <span className="font-semibold">
              powerful technology accessible and enjoyable
            </span>{" "}
            to use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryInspiration;
