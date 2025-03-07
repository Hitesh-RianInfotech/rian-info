import { Card, CardContent } from "@/components/ui/card";
import { MdGroups2 } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function WhyChoose() {
  const services = [
    {
      title: "Real-World Perspective",
      description: "As small business owners ourselves, we’ve been through the trenches. We know how valuable “cheat codes” can be when you’re short on time and resources.",
      icon: <IoLocationOutline className="text-themeColor w-8 h-8" />
    },
    {
      title: "Comprehensive Approach",
      description: "From micro-SaaS and AI tools to web and mobile development, we offer an all-in-one toolkit for your digital evolution.",
      icon: <MdGroups2 className="text-themeColor w-8 h-8" />
    },
    {
      title: "Ongoing Support & Collaboration",
      description: " We don’t just hand you a product and walk away—we stick around to ensure you’re getting maximum benefit and to keep refining solutions as you grow.",
      icon: <MdOutlineSupportAgent className="text-themeColor w-8 h-8" />
    }
  ];

  return (
    <section 
      className="relative flex flex-col bg-[url('/images/map.png')] bg-cover bg-center items-center justify-center min-h-screen px-6 sm:px-16 py-16" 
    >
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold ">Why Choose Rian Infotech?</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {services.map((service, index) => (
          <Card key={index} className="border border-themeColor cursor-pointer hover:scale-105 duration-300 shadow-lg p-6 py-10 text-center">
            <CardContent className="flex flex-col items-center gap-4">
              {service.icon}
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
