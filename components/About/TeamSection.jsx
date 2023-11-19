import Image from "next/image";
import React from "react";
import { RxDotFilled } from "react-icons/rx"
import { featuresTeam } from "@/constants";


const TeamSection = () => {
 

  return (
    
    // <section
    //   className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    //   id="feature"
    // >
    // <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-green-50 via-green-100 to-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center w-full px-4 lg:w-11/12">
    <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/images/team.png"
              alt="team"
              quality={100}
              height={414}
              width={508}
              unoptimized
              layout="responsive"
            />
          </div>
        </div>
       

        <div className="justify-center mt-16 ml-aut0 w-full lg:w-10/12 mx-10">
            
          <h3 className="text-xl text-center md:text-left mb-6 lg:text-2xl font-bold leading-relaxed text-black-600">
          Who are we?
          </h3>
        <p className="my-4">At GoRyda, we are a dedicated team committed to revolutionizing transportation and delivery services. Here's a glimpse into who we are:</p>   
          <ul className="text-black-500 self-start list-inside ml-2">
        
        {featuresTeam.map((feature, index) => (
           <li className="relative circle-check custom-list inline-flex items-center mb-2 align-middle" key={index}>
           <div className=" -ml-2">
           <RxDotFilled className=" text-green-500 text-2xl" />
           </div>
            {feature}
        </li>
          )
        )}
      </ul>
   
     
        </div>
        
    
      </div>
    </section>
  );
};

export default TeamSection;
