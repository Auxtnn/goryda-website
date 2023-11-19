import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] bg-gradient-to-r from-green-100 to-white">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
             
              <h2 className=" text-2xl font-bold leading-[1.2] md:text-[2rem]">
                Meet Our Team
              </h2>
           
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Vincent"
            profession="Founder"
            imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
          />
          <TeamCard
            name="Ugobest"
            profession="Co-Founder"
            imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
          />
          <TeamCard
            name="Victor"
            profession="Business Developer"
            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
          />
          <TeamCard
            name="Victor"
            profession="Business Developer"
            imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;


