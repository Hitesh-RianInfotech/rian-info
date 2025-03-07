import { Card, CardContent } from "@/components/ui/card";
import { LineChart } from "lucide-react"; // You can change the icon

export default function WhoWeServe() {
  const services = [
    {
      title: "Small Business Owners & Entrepreneurs",
      description: "Wearing multiple hats, they need straightforward tools that deliver tangible ROI.",
      icon: <LineChart className="text-themeColor w-8 h-8" />
    },
    {
      title: "Coaches & Consultants",
      description: "Busy guiding clients, they benefit from time-saving automation and hassle-free digital funnels.",
      icon: <LineChart className="text-themeColor w-8 h-8" />
    },
    {
      title: "Fast-Growing Startups & Remote Teams",
      description: "Eager for rapid deployment of cutting-edge tools without an overcomplicated tech stack.",
      icon: <LineChart className="text-themeColor w-8 h-8" />
    }
  ];

  return (
    <section 
      className="relative flex flex-col bg-[url('/images/map.png')] bg-cover bg-center items-center justify-center min-h-screen px-6 sm:px-16 py-16" 
    >
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold ">Who We Serve</h2>
        <p className=" mt-2">
          We proudly empower small businesses worldwide, especially those:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {services.map((service, index) => (
          <Card key={index} className="border hover:scale-105 duration-300 cursor-pointer border-themeColor shadow-lg p-6 py-10 sm:py-14 text-center">
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
