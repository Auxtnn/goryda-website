"use client";
import SingleTeam from "./TeamSingle";
import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { teamMembers } from "@/constants";
import Image from "next/image";
import Animation from "../Global/Animation";

const Team = () => {
  return (
    <>
      <section className="pt-10 bg-white ">
        <div className="lg:w-11/12 mx-auto px-4">
          <h2 className="text-center text-dark mb-10 font-display text-xl md:text-2xl font-bold tracking-tight ">
            Meet Our Team
          </h2>

          <div className="grid gap-4 lg:grid-cols-2 grid-cols-1">
            {teamMembers.map((member, index) => (
              <div key={index} className="py-5 px-2 md:px-0 w-full">
                <Animation>

              
                <div className=" w-full" style={{ aspectRatio: "1/1" }}>
                  <Image
                    alt={`team-member-${index}`}
                    className=" rounded-md w-full h-full"
                    src={member.imageSrc}
                    quality={100}
                    height={500}
                    width={500}
                    unoptimized
                  />
                </div>
                </Animation>

                <div className=" flex flex-col justify-start items-start mt-3">
                  <h6 className="my-3 text-left md:text-base font-semibold text-sm text-black  ">
                    {member.name}
                  </h6>
                  <h6 className="text-sm  text-black ">{member.position}</h6>
                  <div className="md:flex-auto text-gold md:flex-row mt-2 flex-row flex"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
