import Image from "next/image";
import React from "react";

const RianInfotech = () => {
  return (
    <section className="relative bg-themeColor flex justify-center items-center min-h-[60vh] py-10 px-6">
        <Image width={300} height={300} 
        className="absolute  -left-20 bottom-10"
        src="/images/waves.png" alt="waves"
        />
      <div className="max-w-3xl text-center text-textSecondary sm:text-xl leading-relaxed">
        <p>
          At <span className="font-bold">Rian Infotech,</span> we believe{" "}
          <span className="font-bold">
            growing a business should be both challenging and fun
          </span>
          —never bogged down by tedious tasks or confusing technology.
        </p>

        <p className="mt-4">
          Founded by computer science engineers{" "}
          <span className="font-bold">Anisha Gupta</span> and{" "}
          <span className="font-bold">Rishav Shankar,</span> our company is on a
          mission to empower{" "}
          <span className="font-bold">
            small businesses, coaches, and fast-growing teams
          </span>{" "}
          with practical “cheat codes” for everyday challenges.
        </p>

        <p className="mt-4">
          We free them to{" "}
          <span className="font-bold">focus on what truly matters:</span>{" "}
          transforming lives, innovating, and enjoying the entrepreneurial
          journey.
        </p>
      </div>
    </section>
  );
};

export default RianInfotech;
