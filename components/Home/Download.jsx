"use client"

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
    <section className="max-w-screen-xl mt-8 mb-2 sm:mt-14 sm:mb-4 px-6 sm:px-8 lg:px-16 mx-auto">
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
            You can explore the features that we provide with fun and have their own functions each feature.
          </p>
          <div className="md:my-4 flex flex-col md:flex-row md:mx-0 mx-auto space-y-4 md:space-y-0 md:justify-start justify-center md:px-0 px-8">
          {/* <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse"> */}
            <Link href="#" className="w-full md:mr-6 sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <Image className="me-3" src={"/images/andriod.png"} height={25} width={25} />
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs sm:text-sm">Get it on</div>
                <div className="mt-1 text-sm sm:text-base font-semibold">Google Play</div>
              </div>
            </Link>
            
            <Link href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <BsApple className="text-2xl text-white me-3" />
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs sm:text-sm">Download on the</div>
                <div className="mt-1 text-sm sm:text-base font-semibold">App Store</div>
              </div>
            </Link>
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

