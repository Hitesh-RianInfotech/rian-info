import React from "react";

const Project = () => {
  return (
    <>
    <section className="bg-[#F5F6FB] w-full">
    <div className="flex max-w-5xl px-6 m-auto text-center flex-col justify-center py-10 items-center">
      <div className="text-2xl text-themeColor font-semibold sm:text-4xl  my-5 sm:my-10 "> Ready to bring your web or mobile project to life? </div>
      <p className=" text-2xl sm:text-4xl ">
      Take the first step and let’s explore your ideas together   </p>
      <button className="my-5 sm:my-10 hover:scale-105 duration-300 bg-themeColor rounded-full px-6 sm:px-10  py-1 sm:py-2 text-textSecondary"> Get Started Now</button>
      </div>
      </section>
    </>
  );
};

export default Project;
