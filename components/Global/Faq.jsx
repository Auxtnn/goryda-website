"use client"

import React, { useState } from "react";
import { faqData } from "@/constants";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

    return (
        <section id="faq" className="flex flex-col justify-center items-center mx-auto">
        <div
          className="bg-white w-4/5 pb-8 pt-10 rounded-lg flex justify-between flex-col md:flex-row">
          <div className="md:w-4/6 w-full my-10 md:mr-20">
           
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-blue text-center md:text-left">
            Frequently Asked <span className="md:block">Questions</span>
          </h1>
        
          <p className="text-center md:text-left">
          Find answers to common questions about our
            services. If you have specific inquiries not covered here,
            please reach out to our support team.
          </p>
          </div>
          <div className="md:w-3/4 w-full">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded shadow-md">
              <div className={`p-4 cursor-pointer mt-2 flex justify-between items-center transition-all ${
                  activeIndex === index ? "bg-white text-black" : "bg-white rounded"
                }`}
                onClick={() => toggleAccordion(index)}>
                <p className="text-lg font-medium text-gray-500">{item.question}</p>
                {activeIndex === index ? (
                  <FaChevronUp className="text-xl" />
                ) : (
                  <FaChevronDown className="text-xl" />
                )}
              </div>
              {activeIndex === index && (
                <div className="p-4 text-black"> 
                  {item.answer}
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
      </section>
    )
}

export default Faq;