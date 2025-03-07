"use client"
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const caseStudies = [
  {
    title: "Tools like Billify simplify billing, inventory, and rent collection.",
    category: "Case study",
    description: "Lorem ipsum dolor sit amet consectetur. Placerat pellentesque eu sagittis vel at tortor diam dignissim ut. Cras nisi orci ullamcorper id elementum aliquam. Elit blandit ac elementum nunc proin. Nec blandit nibh mauris tincidunt mauris fames lacus sed.",
    image: "/images/vector.webp"
  },
  {
    title: "Tools like Billify simplify billing, inventory, and rent collection.",
    category: "Case study",
    description: "Lorem ipsum dolor sit amet consectetur. Placerat pellentesque eu sagittis vel at tortor diam dignissim ut. Cras nisi orci ullamcorper id elementum aliquam. Elit blandit ac elementum nunc proin. Nec blandit nibh mauris tincidunt mauris fames lacus sed.",
    image: "/images/map.png"
  },
  {
    title: "Tools like Billify simplify billing, inventory, and rent collection.",
    category: "Case study",
    description: "Lorem ipsum dolor sit amet consectetur. Placerat pellentesque eu sagittis vel at tortor diam dignissim ut. Cras nisi orci ullamcorper id elementum aliquam. Elit blandit ac elementum nunc proin. Nec blandit nibh mauris tincidunt mauris fames lacus sed.",
    image: "/images/logo.png"
  }
];

export default function CaseStudies() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: false,
    loop: true,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="pt-16 lg:py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center sm:mb-10">
          Look what we have served already
        </h2>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-4">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="flex-[0_0_90%] md:flex-[0_0_60%] "
              >
                <Card 
                  className={`p-5 transition-all cursor-pointer duration-500 my-24 lg:my-16  rounded-2xl ${
                    selectedIndex === index 
                      ? 'scale-[1.2] shadow-lg' 
                      : 'scale-[0.8] opacity-70 bg-gray-50/50'
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                      <div className="bg-[#F8F9FF] h-full lg:w-2/5 w-full  rounded-xl overflow-hidden">
                        <Image 
                          width={500} 
                          height={500} 
                          src={study.image} 
                          alt="Case study" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className=" flex flex-col justify-center  lg:w-3/5">
                        <div className="inline-block px-4 py-1 rounded-full text-themeColor bg-[#F8F9FF] text-xs sm:text-sm font-medium mb-4 w-fit">
                          {study.category}
                        </div>
                        <h3 className="sm:text-2xl font-bold mb-4 ">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 mb-6 text-xs sm:text-base">
                          {study.description}
                        </p>
                        <button 
                          className="border text-themeColor border-themeColor px-10 py-0.5 rounded-full text-xs sm:text-sm font-medium hover:bg-themeColor duration-300 hover:text-textSecondary w-fit"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}