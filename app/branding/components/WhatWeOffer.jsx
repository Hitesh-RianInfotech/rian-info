// const WhatWeOffer = () => {
//     return (
//       <section className="relative bg-[#0D47D9] py-16 px-6 lg:px-20 text-white">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="flex items-center space-x-4">
//             <div className="relative w-12 h-12 flex items-center justify-center bg-white bg-opacity-20 rounded-full">
//               <span className="text-3xl font-bold text-white">?</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl font-bold">What We Offer</h2>
//           </div>

//           {/* Main Content */}
//           <div className="mt-10 bg-white text-black rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6 p-8 relative overflow-hidden">
//             {/* Left Content */}
//             <div>
//               <div className="space-y-6">
//                 <p className="text-lg font-semibold text-[#0D47D9]">
//                   1. <span className="font-bold">Tech Roadmaps:</span>
//                   <span className=" font-normal"> Comprehensive audits of your current setups, followed by a tailored plan for modernization.</span>
//                 </p>
//                 <p className="text-lg font-semibold text-gray-400 line-through">
//                   2. <span className="font-bold">Process Optimization:</span>
//                   <span className="text-gray-400 font-normal"> Identify bottlenecks and automate repetitive tasks to free up time for high-value work.</span>
//                 </p>
//                 <p className="text-lg font-semibold text-[#0D47D9]">
//                   3. <span className="font-bold">Implementation & Training:</span>
//                   <span className=" font-normal"> Support you in rolling out new tools, while providing training to ensure adoption and effectiveness.</span>
//                 </p>
//               </div>
//               <div className="mt-6 w-full h-[2px] bg-[#0D47D9]"></div>
//             </div>

//             {/* Right Content - Testimonial */}
//             <div className="bg-white shadow-lg p-6 rounded-lg border-l-8 border-[#DBDEFF]">
//               <h3 className="text-lg font-bold ">
//                 Testimonial
//                 <span className="block w-12 h-[2px] bg-[#0D47D9] mt-1"></span>
//               </h3>
//               <p className="italic  mt-4">
//                 “Before Rian Infotech’s consulting, we were manually tracking all our leads in spreadsheets. Now our CRM automates everything, and we’ve doubled our conversion rate!”
//               </p>
//               <p className="mt-8  text-right">
//                 —David M., Marketing Agency Owner
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

//   export default WhatWeOffer;

import Image from "next/image";
import React from "react";

const WhatWeOffer = () => {
  return (
    <section className=" py-10 sm:py-16 relative">
            <h2 className="text-3xl text-textSecondary m-auto sm:text-5xl text-center mb-10 ">What We Offer</h2>

      <div className="absolute top-0 left-0 w-full h-2/5 z-[-1] bg-themeColor"></div>
      <Image
        width={200}
        height={200}
        className="absolute top-0 left-0 "
        src="/images/waves.png"
        alt="wave"
      />
      <div className="flex w-[90vw] flex-col  lg:flex-row justify-between items-center lg:items-end max-w-6xl m-auto gap-5">
        <div className="bg-white shadow-xl px-6 py-10 space-y-6 max-w-md z-10 relative">
          <p className="text-lg ">
            <span className="font-bold text-themeColor">1. Tech Roadmaps:</span>
            <span className="">
              {" "}
              Comprehensive audits of your current setups, followed by a
              tailored plan for modernization.
            </span>
          </p>
          <p className="text-lg ">
            <span className="font-bold text-themeColor">
              {" "}
              2. Process Optimization:
            </span>
            <span className="">
              {" "}
              Identify bottlenecks and automate repetitive tasks to free up time
              for high-value work.
            </span>
          </p>
          <p className="text-lg">
            <span className="font-bold text-themeColor">
              3. Implementation & Training:
            </span>
            <span className=" ">
              {" "}
              Support you in rolling out new tools, while providing training to
              ensure adoption and effectiveness.
            </span>
          </p>
          <div className="mt-6 w-1/2 m-auto h-[2px] bg-[#0D47D9]"></div>
          <Image
          width={100}
          height={100}
          className="absolute -top-10 -right-32 hidden md:block z-10 "
          src="/images/question.png"
          alt="?"
        />
        </div>

        

        {/* Right Content - Testimonial */}

        <div className="bg-white shadow-lg p-6 rounded-lg border-l-8 max-w-xl border-[#DBDEFF]">
          {" "}
          <h3 className="text-lg font-bold ">
            Testimonial{" "}
            <span className="block w-12 h-[2px] bg-[#0D47D9] mt-1"></span>
          </h3>
          <p className="italic  mt-4">
            “Before Rian Infotech’s consulting, we were manually tracking all
            our leads in spreadsheets. Now our CRM automates everything, and
            we’ve doubled our conversion rate!”
          </p>
          <p className="mt-8  text-right">—David M., Marketing Agency Owner</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
