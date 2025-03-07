import React from "react";

const CTASection = () => {
  return (
    <>
    <section className=" bg-[#F5F6FB] ">
    <div className="flex max-w-5xl px-6 m-auto text-center flex-col justify-center py-10 items-center">
      <div className="text-2xl sm:text-4xl  my-5 sm:my-10 "> Stop wasting hours on admin tasks.</div>
      <p className=" font-semibold text-themeColor text-2xl sm:text-4xl ">
      Switch to Micro-SaaS platforms that grow with you, 
      without the hefty price tag of enterprise tools.
      </p>
      <button className="my-5 sm:my-10 hover:scale-105 duration-300 bg-themeColor rounded-full px-6 sm:px-10  py-1 sm:py-2 text-textSecondary">Automate Your Operations Today</button>
      </div>
      </section>
    </>
  );
};

export default CTASection;
