"use client"
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary depending on complexity, but our agile approach ensures steady progress and transparency.",
  },
  {
    question: "Can I request new features post-launch?",
    answer:
      "Timelines vary depending on complexity, but our agile approach ensures steady progress and transparency.",
  },
  {
    question: "Do you handle hosting and domain setup?",
    answer:
      "Timelines vary depending on complexity, but our agile approach ensures steady progress and transparency.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState();

  return (
    <div className="max-w-5xl mx-auto my-10 p-6">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={` p-4 sm:p-10 rounded-lg  shadow-md transition-all ${
                isOpen ? "border-themeColor border shadow-lg" : ""
              }`}
            >
              <button
                className="flex justify-between items-center w-full text-lg"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{index + 1}. {faq.question}</span>
                {isOpen ? (
                  <FaChevronDown className="text-themeColor transition-transform duration-200 rotate-180" />
                ) : (
                  <FaChevronRight className=" transition-transform duration-200" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
