import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";
import Link from "next/link";
import React, { forwardRef } from "react";

const services = [
  {
    title: "Web & Mobile App Development",
    description: "End-to-end solutions focusing on seamless user experiences",
    color: "text-[#F57713]",
    border: "border-[#F57713]",
    glow: "rgba(245, 119, 19, 0.2)",
    icon: Activity,
    page: "/webDev",
  },
  {
    title: "Generative AI Solutions",
    description: "End-to-end solutions focusing on seamless user experiences",
    color: "text-[#1FA0EE]",
    border: "border-[#1FA0EE]",
    glow: "rgba(31, 160, 238, 0.2)",
    icon: Activity,
    page: "/ai",
  },
  {
    title: "Micro SaaS Products",
    description: "End-to-end solutions focusing on seamless user experiences",
    color: "text-[#FFA2CD]",
    border: "border-[#FFA2CD]",
    glow: "rgba(255, 162, 205, 0.2)",
    icon: Activity,
    page: "/saas",
  },
  {
    title: "Branding Design",
    description: "End-to-end solutions focusing on seamless user experiences",
    color: "text-[#3037B4]",
    border: "border-[#3037B4]",
    glow: "rgba(48, 55, 180, 0.2)",
    icon: Activity,
    page: "/branding",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10 pt-20 sm:py-24 max-w-[90vw] m-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex my-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.page} passHref>
              <Card
                key={index}
                className={`min-w-[300px] min-h-[350px] m-2 pt-12 pb-20 cursor-pointer rounded-lg relative hover:scale-105 transition-all duration-300`}
                style={{
                  background: "white",
                  boxShadow: `0 0 20px ${service.glow}`,
                  border: `1px solid ${service.glow}`,
                }}
              >
                <CardContent>
                  <div
                    className={`${service.color} p-3 rounded-lg inline-block mb-4`}
                    style={{
                      background: service.glow,
                    }}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div
                    className={`mb-4 ${service.color} text-xl font-semibold`}
                  >
                    {service.title}
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 flex items-center absolute bottom-10 text-sm font-medium">
                    <span className={`mr-2 ${service.color}`}>Learn more</span>
                    <span className={`w-5 h-5 ${service.color}`}>&rarr;</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
