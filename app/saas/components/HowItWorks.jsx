import { ArrowUpRight, RefreshCcw, MonitorSmartphone } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      title: "Sign Up & Setup",
      description:
        "Create your account and follow simple prompts to configure billing or rent details.",
      icon: <ArrowUpRight className="w-8 h-8 " />,
    },
    {
      title: "Automate & Track",
      description:
        "Let the system send invoices, reminders, and maintain records automatically.",
      icon: <RefreshCcw className="w-8 h-8 " />,
    },
    {
      title: "Grow & Customize",
      description:
        "Scale your subscription, add features, or integrate with other apps as needed.",
      icon: <MonitorSmartphone className="w-8 h-8 " />,
    },
  ];

  return (
    <section className="relative">
      <div className="bg-themeColor text-textSecondary min-h-[70vh] flex justify-center items-center py-16 px-6 ">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>

        {/* Steps */}
        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Icon */}
              <div className="">
                {step.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="my-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Image width={30} height={30}
                      className="absolute left-0 top-3/4 lg:block hidden"
                      src="/images/image.png" alt="semicircle" /> 
                      </div>
      <div/>
    </section>
  );
}
