export default function VisionValues() {
    const visionValues = [
      {
        title: "Empowerment Through Simplicity :",
        description: "We believe even the most advanced tech should feel intuitive. Every solution we build aims to reduce friction and enhance productivity."
      },
      {
        title: "Human-Centric Technology :",
        description: "Tools should amplify human potential, not overshadow it. We design for people first, ensuring each product fits seamlessly into their workflow."
      },
      {
        title: "Collaboration & Care :",
        description: "We don’t just hand you a product and disappear. We partner with our clients—sharing insights, offering support, and celebrating milestones together."
      },
      {
        title: "Fun in the Process :",
        description: "Entrepreneurship is already full of challenges. By simplifying technology, we strive to make your journey more fulfilling and enjoyable—with fewer headaches along the way."
      }
    ];
  
    return (
      <section
        className="relative flex items-center bg-[url('/images/eye.png')] bg-cover bg-center justify-center min-h-screen px-6 sm:px-16 py-16"
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 -z-10 bg-themeColor"></div>
  
        {/* Content Container */}
        <div className="relative z-10 max-w-4xl text-textSecondary text-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Our Vision & Values</h2>
  
          <div className="space-y-10">
            {visionValues.map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg text-textSecondary">• {item.title}</h3>
                <p className="text-textSecondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  