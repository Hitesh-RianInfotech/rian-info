import React from "react";

const Schedule = () => {
  return (
    <>
    <section className="bg-[#F5F6FB] w-full">
    <div className="flex  max-w-4xl px-6 m-auto text-center flex-col justify-center py-10 items-center">
      <div className="text-2xl sm:text-4xl  my-5 sm:my-10 "> Ready to see tangible results from your tech investments? </div>
      <p className=" text-themeColor font-semibold text-2xl sm:text-4xl ">
      Let’s talk and build a strategic roadmap that 
      propels your business forward      </p>
      <button className="my-5 sm:my-10 hover:scale-105 duration-300 bg-themeColor rounded-full px-6 sm:px-10  py-1 sm:py-2 text-textSecondary"> Schedule Your Strategy Session </button>
      </div>
      </section>
    </>
  );
};

export default Schedule;
