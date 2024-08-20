"use client";

import React, { useState } from "react";
import { faqData } from "@/constants";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split faqData into two columns
  const leftColumn = faqData.slice(0, 4);
  const rightColumn = faqData.slice(4, 8);

  const renderFaqItem = (item, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg transition-all mb-4"
    >
      <div
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={() => toggleAccordion(index)}
      >
        <p className="text-base font-medium text-gray-700">{item.question}</p>
        {activeIndex === index ? (
          <FaChevronUp className="text-base text-black" />
        ) : (
          <FaChevronDown className="text-base text-gray-500" />
        )}
      </div>
      {activeIndex === index && (
        <div className="p-4 text-sm text-gray-700 bg-white">{item.answer}</div>
      )}
    </div>
  );

  return (
    <section id="faq" className="max-w-6xl mx-auto p-6">
      <div className="text-center">
        <h1 className="text-lg md:text-2xl font-bold text-green-500 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-gray-600 mb-8">
          Find answers to common questions about our services. If you have
          specific inquiries not covered here, please reach out to our support
          team.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {/* Left Column */}
        <div>{leftColumn.map((item, index) => renderFaqItem(item, index))}</div>

        {/* Right Column */}
        <div>
          {rightColumn.map((item, index) => renderFaqItem(item, index + 4))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
