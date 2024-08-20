"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsApple } from "react-icons/bs";

const Download = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Change the breakpoint as needed
    };

    // Initial check for screen size on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const smallScreenImagePath = "/images/phone2.png";
  const largeScreenImagePath = "/images/phone.png";

  return (
    <section
      className="lg:w-11/12 mt-16 mb-2 sm:mt-14 sm:mb-4 px-4 mx-auto"
      id="download"
    >
      <h2 className="text-center font-display text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
        Download Our Apps
      </h2>
      <div className="text-center rounded mt-4">
        <span className="text-white rounded-s bg-green-500 py-2 px-6 font-display text-[1rem] font-semibold tracking-tight">
          Rider
        </span>
        <span className="text-[#191a1a] rounded-e drive py-2 px-6 font-display text-[1rem] font-semibold tracking-tight">
          Driver
        </span>
      </div>
      <div className="bg-green-500 rounded-xl items-center md:grid md:grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 my-12">
        <div className="link flex flex-col w-full md:w-10/12 lg:ml-20">
          {/* <h3 className="text-white my-10 md:text-[2.25rem] text-3xl font-medium text-black-600 text-center md:text-start">
           
          </h3> */}
          <h1 className="text-2xl md:text-3xl md:my-3 my-8 text-white text-center md:text-left">
            Download app & <span className="md:inline block">get started</span>
          </h1>
          <p className="text-white text-[1rem] hidden md:block">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <div className="flex flex-col gap-4 md:mt-6">
            <div className="flex md:flex-row flex-col items-center gap-4">
              <a href="#" aria-label="Download on Google Play Store">
                <Image
                  className="w-36 h-auto"
                  src={"/images/play.jpg"}
                  height={100}
                  width={100}
                  alt="image"
                />
              </a>
              <a href="#" aria-label="Download on App Store">
                <Image
                  className="w-36 h-auto"
                  src={"/images/app.jpg"}
                  height={100}
                  width={100}
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 mx-auto md:flex md:justify-end md:my-8">
          <Image
            src={isSmallScreen ? smallScreenImagePath : largeScreenImagePath}
            alt="download"
            quality={100}
            height={600}
            width={550}
            unoptimized
            layout="responsive"
            className="md:px-2 px-10 md:mt-0 mt-20 sm:h-full sm:w-full h-40"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
