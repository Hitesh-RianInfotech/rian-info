import Image from "next/image";

const timelineData = [
    {
      title: "Shared Wins",
      description:
        "Coaches focus on helping others reach their potential, and we focus on helping coaches (and small businesses) reach their potential. It’s a partnership built on growth from both sides.",
      direction: "right",
    },
    {
      title: "AI Solutions Like Funnelforcoach.com",
      description:
        "We built an AI-powered landing page generator specifically for coaches, so they can quickly establish an online presence—no coding or design headaches required.",
      direction: "left",
    },
    {
      title: "Human-Centric Tech",
      description:
        "Our solutions are built to enhance the coach-client relationship, not replace it. Technology should amplify human connections, never overshadow them.",
      direction: "right",
    },
  ];
  
  const WhyCoachesMatter = () => {
    return (
      <section className="bg-themeColor text-textSecondary py-14 sm:py-20 px-10 lg:px-20">
        <div className="w-6xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-12">Why Coaches Matter to Us</h2>
  
          {/* Timeline Container */}
          <div className="relative flex flex-col space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full"
              >
                {/* Left Side - Show circle & line if direction is "right" */}
                {item.direction === "right" && (
                  <div className="hidden md:flex items-center relative">
                    <div className="relative flex justify-center items-center">
                      <div className="w-12 h-12 bg-white opacity-20 rounded-full absolute"></div>
                      <div className="w-4 h-4 bg-white rounded-full z-10"></div>
                    </div>
                    <Image width={200} height={200} src="/images/line.png" alt="line" />
                  </div>
                )}
  
                {/* Content */}
                <div className="max-w-2xl p-4 text-left">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-textSecondary opacity-80 mt-2">{item.description}</p>
                </div>
  
                {/* Right Side - Show circle & line if direction is "left" */}
                {item.direction === "left" && (
                  <div className="hidden md:flex items-center relative">
                    <Image className="rotate-180" width={200} height={200} src="/images/line.png" alt="line" />
                    <div className="relative flex justify-center items-center">
                      <div className="w-12 h-12 bg-white opacity-20 rounded-full absolute"></div>
                      <div className="w-4 h-4 bg-white rounded-full z-10"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  
  export default WhyCoachesMatter;
  