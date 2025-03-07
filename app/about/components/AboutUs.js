import Image from "next/image";

const AboutUs = () => {
  return (
    <section className=" mb-10 py-10 mt-24 ">
      <div className=" mx-auto w-[90vw] m-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold">About us</h2>
          <p className="text-lg ">
            At Rian Infotech, we believe building a business should be fun and
            challenging— never bogged down by repetitive tasks or baffling
            technology.
          </p>
          <p className="text-lg text-textPrimary">
            We see tech as the ultimate{" "}
            <span className="font-semibold">cheat code, </span>
            helping you overcome hurdles faster and level up your business with
            less stress.
          </p>
          <p className="text-lg text-textPrimary">
            Founded by computer science engineers{" "}
            <span className="text-themeColor font-medium">Anisha Gupta</span>{" "}
            and{" "}
            <span className="text-themeColor font-medium">Rishav Shankar</span>,
            our mission is to empower small businesses and coaches with
            purpose-driven solutions that let them focus on what truly matters:{" "}
            <span className="text-themeColor">
              transforming lives and enjoying the ride.
            </span>
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full  flex justify-center lg:justify-end">
          {/* Floating Images */}
           <Image width={500} height={500} src="/images/saas.png" alt="image" />
           
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
