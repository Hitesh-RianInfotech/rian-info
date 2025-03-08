import Image from "next/image";
import React from "react";

const ProjectStructure2 = () => {
  return (
    <section className="relative" >
      <div className="max-w-4xl m-auto w-[90vw]">
        <div className="flex flex-col justify-center items-center gap-10 sm:gap-20 ">
          <div className="flex justify-center items-start sm:gap-10 ">
            <Image
              width={200}
              height={200}
              className=""
              src="/images/mob.png"
              alt="mob"
            />
            <div className="flex flex-col max-w-[250px] m-auto justify-center items-center gap-5">
              <div className="flex items-center gap-4">
                <Image
                  width={50}
                  height={50}
                  className="rotate-180"
                  src="/images/aaa.png"
                  alt="mob"
                />
                <span>Screens</span>
              </div>
              <p>
                Individual screens for different functionalities (e.g.,
                dashboard, clients, projects).
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start sm:gap-10 ">
            <div className="flex flex-col max-w-[250px] m-auto justify-center items-center gap-5">
              <div className="flex items-center gap-4">
                <span>Models</span>
                <Image
                  width={50}
                  height={50}
                  className=""
                  src="/images/aaa.png"
                  alt="mob"
                />
              </div>
              <p>
                Data structures for expenses, projects, clients, and chat
                history.
              </p>
            </div>
            <Image
              width={100}
              height={100}
              className=""
              src="/images/models.png"
              alt="mob"
            />
          </div>
          <div className="flex justify-center items-start sm:gap-10">
            <Image
              width={200}
              height={200}
              className=""
              src="/images/screens.png"
              alt="mob"
            />
            <div className="flex flex-col max-w-[250px] m-auto justify-center items-center gap-5">
              <div className="flex items-center gap-4">
                <Image
                  width={50}
                  height={50}
                  className="rotate-180"
                  src="/images/aaa.png"
                  alt="mob"
                />
                <span>Screens</span>
              </div>
              <p>
                Individual screens for different functionalities (e.g.,
                dashboard, clients, projects).
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 sm:gap-20 my-10 mt-20  sm:justify-between ">
          <div className="flex flex-col justify-center items-start gap-4 max-w-[200px]">
            <h2 className="text-themeColor">Controllers</h2>
            <p>Manages the application's state and logic.</p>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 max-w-[150px]">
            <h2 className="text-themeColor">Bindings</h2>
            <p>Connects controllers and services for dependency injection.</p>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 max-w-[150px]">
            <h2 className="text-themeColor">Utils</h2>
            <p>Utility classes for common functionalities.</p>
          </div>
        </div>
      </div>
      <Image width={400} height={400} className="absolute right-0 top-0 z-[-1] rotate-180 opacity-85" src="/images/pp.png" alt="pp" />
      <Image width={400} height={400} className="absolute left-0 bottom-0 z-[-1]" src="/images/pp.png" alt="pp" />

    </section>
  );
};

export default ProjectStructure2;
