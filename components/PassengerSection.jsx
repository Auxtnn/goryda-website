import Image from "next/image";
import React from "react";
import DriverAppButton from "./DriverAppButton";
import { FaCheck } from "react-icons/fa6"
import { featuresPassenger } from "@/constants";


const PassengerSection = () => {

  return (
    <section className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="feature">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
       
        <div className="justify-center mr-auto w-full lg:w-9/12">
        <h6 className="lg:text-xl font-bold leading-relaxed text-green-500">
            Do you need a ride?
          </h6>
          <h3 className="text-xl lg:text-2xl mb-4 font-bold leading-relaxed text-black-600">
            Become a Passenger
          </h3>
          
          <ul className="text-black-500 self-start list-inside ml-2">
        
        {featuresPassenger.map((feature, index) => (
           <li className="relative circle-check custom-list inline-flex items-center mb-6 align-middle" key={index}>
           <div className="mr-2 -ml-4 mb-5">
           <FaCheck className=" text-green-500 text-2xl" />
           </div>
        {feature}
        </li>
          )
        )}
      </ul>
      <DriverAppButton />
        </div>
        
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/images/passenger.png"
              alt="VPN Illustrasi"
              quality={100}
              height={414}
              width={508}
              unoptimized
            />
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default PassengerSection;
