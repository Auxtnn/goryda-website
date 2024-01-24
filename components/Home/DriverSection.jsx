import Image from "next/image";
import React from "react";
import DriverAppButton from "../Global/DriverAppButton";
import { FaCheck } from "react-icons/fa6";
import { featuresDriver } from "@/constants";

const DriverSection = () => {
  return (
    <section className="relative py-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center w-full px-4 lg:w-11/12">
        <div className="flex w-full justify-end ">
          <div className="h-full w-full px-2 pb-4">
            <Image
              src="/images/driver.png"
              alt="driver"
              quality={100}
              height={414}
              width={508}
              layout="responsive"
              unoptimized
            />
          </div>
        </div>

        <div className="justify-center ml-aut0 w-full lg:w-9/12">
          <h6 className="lg:text-xl font-bold leading-relaxed text-green-500 text-center md:text-start">
            Are you a driver
          </h6>
          <h3 className="text-xl lg:text-2xl mb-4 font-bold leading-relaxed text-black-600 text-center md:text-start">
            Join Us As a Driver
          </h3>

          <ul className="text-black-500 self-start list-inside ml-2">
            {featuresDriver.map((feature, index) => (
              <li
                className="px-2 relative circle-check custom-list inline-flex items-center mb-6 align-middle"
                key={index}
              >
                <div className="mr-2 -ml-4 mb-5">
                  <FaCheck className=" text-green-500 text-2xl" />
                </div>
                {feature}
              </li>
            ))}
          </ul>

          <DriverAppButton />
        </div>
      </div>
    </section>
  );
};

export default DriverSection;
