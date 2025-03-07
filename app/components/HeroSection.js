"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className=" flex h-screen flex-col items-center text-center px-6 py-32 ">
      {/* Background Image Placeholder */}
      <div className=" inset-0 -z-10">
        <Image
          src="/images/vector.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold">
        <span className="bg-gradient-primary bg-clip-text text-transparent">
          AI-Powered Solutions for
        </span>
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold mt-2">
        Effortless Growth
      </h2>

      {/* Subheading */}
      <p className="sm:text-lg md:text-xl mt-4 max-w-2xl">
        Partner with a team that truly cares about your success.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex justify-center space-x-4">
        <Link
          href="/start-project"
          className="bg-themeColor text-secondary px-4 sm:px-6 p-1 rounded-full sm:text-lg font-medium hover:scale-105 duration-300 transition"
        >
          Start your project
        </Link>
        <Link
          href="/our-work"
          className="border-2 text-themeColor border-themeColor px-4 sm:px-6 p-1 rounded-full sm:text-lg font-medium hover:scale-105 duration-300 transition"
        >
          View our work
        </Link>
      </div>
       {/* Floating Icons */}
       <div className="absolute -left-32 bottom-0 lg:block hidden">
        <Image
          src="/images/globe.png" 
          alt="Globe Icon"
          width={100}
          height={100}
        />
      </div>
      <div className="absolute -right-32 top-10 hidden lg:block">
        <Image
          src="/images/person.png" 
          alt="Person Icon"
          width={100}
          height={100}
        />
      </div>
      </div>
    </section>
  );
}
