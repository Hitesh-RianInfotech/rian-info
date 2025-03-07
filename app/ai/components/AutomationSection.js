import Image from "next/image";

const AutomationSection = () => {
  return (
    <section className="bg-white px-6 py-16 lg:px-20 relative">
      <div className="max-w-6xl mx-auto flex flex-col ">
        {/* First Row: Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right: Image */}
          <div className="flex justify-center">
            <Image
              width={500}
              height={500}
              src="/images/one.png"
              alt="AI Automation"
              className="max-w-full h-auto"
            />
          </div>
          {/* Left: Text */}
          <div className="max-w-lg m-auto">
            <p className="text-lg text-themeColor">
              Ready to save hours on routine tasks and make smarter data-driven
              decisions?{" "}
            </p>
            <p className="mt-4 text-lg font-medium">
              At Rian Infotech, we bring Generative AI Solutions that transform
              how you launch products, manage data, or engage with customers.{" "}
            </p>
          </div>
        </div>

        {/* Second Row: Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right: Text */}
          <div className="max-w-lg m-auto mt-20">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Key Areas of Impact          
            <span className="absolute left-0 -bottom-1 h-[4px] w-12 rounded-full bg-themeColor"></span>
          </h2>
            <ul className="space-y-5 list-disc ">
              <li> <span className="text-themeColor">Automated Lead Generation:</span> Capture and nurture leads with AI-powered workflows. </li>
              <li><span className="text-themeColor">Smarter Content Creation: </span>  Generate landing pages, social posts, or blog outlines in seconds. </li>
              <li><span className="text-themeColor">Data Insights & Analysis:</span>  Get real-time insights into customer behavior or operational trends.</li>

            </ul>
          </div>
          {/* Left: Image */}
          <div className="flex justify-center ">
            <Image
              width={400}
              height={400}
              src="/images/two.png"
              alt="AI Insights"
              className="absolute bottom-0 right-0"
            />
            <Image
              width={300}
              height={300}
              src="/images/three.png"
              alt="AI Insights"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
