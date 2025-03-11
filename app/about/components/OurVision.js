import Image from "next/image";

const OurVision = () => {
  return (
    <section className=" py-14 sm:py-24 px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-4xl font-bold text-themeColor mb-10">Our Vision</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-lg font-semibold">• Making Growth Enjoyable</h3>
              <p className=" mt-5 ">
                We believe the journey of scaling a business should be engaging,
                not grueling. By automating repetitive tasks, we free you to
                focus on creativity, innovation, and genuine human interaction.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">• Democratizing Technology</h3>
              <p className=" mt-5 ">
                Big ideas shouldn’t be limited by budget or expertise. We aim
                to make AI, web, and mobile solutions accessible to anyone ready
                to level up their impact.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">• Putting People First</h3>
              <p className=" mt-5 ">
                We design everything with the end user in mind—ensuring our
                tools are intuitive, user-friendly, and genuinely helpful.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Side - Image + Blue Squares */}
        <div className="relative">
          {/* Background Image (Replace with your own) */}
          <Image
            src="/images/vision.png"
            alt="Vision"
            width={600}
            height={600}
            className="w-full"
          />
          <Image
            src="/images/blue.png"
            alt="Vision"
            width={110}
            height={110}
            className="absolute top-0 hidden sm:block md:hidden lg:block "
          />
          <Image
            src="/images/white.png"
            alt="Vision"
            width={110}
            height={110}
            className="absolute bottom-0 hidden sm:block md:hidden lg:block  "
          />
           <Image
            src="/images/blue.png"
            alt="Vision"
            width={110}
            height={110}
            className="absolute -bottom-14 right-10 hidden sm:block md:hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default OurVision;
