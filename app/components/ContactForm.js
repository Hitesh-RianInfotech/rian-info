import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="flex flex-col w-[90vw] lg:w-full m-auto justify-between items-center lg:flex-row  lg:h-screen overflow-hidden">
      {/* Left Section */}
      <div className="bg-themeColor relative lg:h-screen text-textSecondary mb-5 lg:mb-0 gap-20 flex flex-col justify-center items-center p-10 w-full lg:w-1/4">
        <h2 className="text-3xl font-bold text-start">
          Get in touch with us.
        </h2>
        <Image width={200} height={200} 
        className="hidden lg:block "
        src="/images/dots.png" alt="img" />
        <Image width={200} height={200} 
        className="absolute lg:top-[35%] lg:-right-5 -top-16 -z-10 "
        src="/images/rectangle.png" alt="img" />
      </div>

      {/* Right Section */}
      <div className="flex p-8 w-full lg:w-3/5 m-auto">
        <form className="space-y-6 w-full">
          <Input
            type="text"
            placeholder="Enter your name"
            className="w-full h-16"
          />
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full h-16"
          />
          <Textarea placeholder="Message" className="w-full h-60" />
          <button className=" px-10 py-1 rounded-full bg-themeColor hover:scale-105 duration-300 text-textSecondary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
