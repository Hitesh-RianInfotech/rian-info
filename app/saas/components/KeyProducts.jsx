import Image from "next/image";

export default function KeyProducts() {
    const products = [
      {
        title: "Billify",
        features:
          "Automated invoicing, inventory tracking, payment reminders.",
        audience:
          "Small retailers, service providers, coaches needing simple billing.",
        benefits:
          "Slash invoicing time in half, reduce errors, and get paid faster.",
          image:"/images/vector.png",
      },
      {
        title: "Rent Collection Platform",
        features:
          "Automated rent reminders, secure payment gateways, tenant management.",
        audience:
          "Property managers, landlords, or co-working spaces.",
        benefits:
          "Centralize rent tracking, avoid missed payments, and streamline tenant relations.",
          image:"/images/map.png",

      },
    ];
  
    return (
      <section className="max-w-4xl mx-auto py-16 px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-10 relative inline-block">
          Our Key Products
          <span className="absolute left-0 rounded-full -bottom-1 h-[4px] w-12 bg-themeColor"></span>
        </h2>
  
        {/* Product Cards */}
        <div className="space-y-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } bg-white shadow-lg rounded-xl p-6`}
            >
              {/* Placeholder for Image */}
              <div className="bg-[#F8F9FF] lg:w-2/5 w-full rounded-xl ">
                                      <Image 
                                        width={1000} 
                                        height={1000} 
                                        src={product.image} 
                                        alt="Case study" 
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
  
              {/* Product Info */}
              <div className="w-full sm:w-2/3 p-6">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="mt-5">
                  <strong>Core Features: </strong>
                  {product.features}
                </p>
                <p className="mt-2">
                  <strong>Who It's For: </strong>
                  {product.audience}
                </p>
                <p className="mt-2 mb-5">
                  <strong>Benefits: </strong>
                  {product.benefits}
                </p>
  
                {/* Explore Button */}
                <button className="mt-4 px-10 py-0.5 border border-themeColor duration-300 text-themeColor rounded-full hover:bg-themeColor hover:text-white transition-all">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Testimonial Section */}
        <div className="mt-16 border-l-8 border-[#DBDEFF] max-w-2xl m-auto bg-white shadow-lg rounded-xl px-6 py-10 sm:px-10 sm:py-16  relative">
          <p className="italic">
            "With Billify, we went from manually sending 50+ invoices a month to an automated system that freed up 10 hours each week."
          </p>
          <p className="text-gray-600 text-right mt-4">— Mark D, Agency Owner</p>
          <div className=" text-7xl text-gray-300 absolute top-0 left-6">“</div>

        </div>
      </section>
    );
  }
  