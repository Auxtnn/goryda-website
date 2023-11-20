"use client"
import SingleTeam from "./TeamSingle";   
import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const Team = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px] bg-gradient-to-r from-green-100 to-white">
      <h2 className="text-center text-dark mb-10 font-display text-2xl font-bold tracking-tight md:text-[2rem]">
            Meet Our Team
           </h2>
        <div className="container mx-auto">
   
          <Swiper slidesPerView={1} ref={sliderRef}>
            <SwiperSlide>
              <SingleTeam
                image="/images/CEO.png"
               
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat reprehenderit voluptatem!"
                name="Vincent Ugobest"
                position="Founder"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTeam
                image="/images/CEO.png"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat reprehenderit voluptatem!"
                name="Victor"
                position="Business Developer"
              />
            </SwiperSlide>
            <div className="absolute left-0 right-0 z-10 flex items-center justify-center gap-5 sm:bottom-0">
              <div className="cursor-pointer" onClick={handlePrev}>
                <button className="d flex h-[40px] w-[40px] items-center justify-center rounded-full border border-stroke bg-white transition-all hover:border-transparent hover:drop-shadow-testimonial">
                <GrLinkPrevious />
                </button>
              </div>
              <div className="next-arrow cursor-pointer" onClick={handleNext}>
                <button className="d flex h-[40px] w-[40px] items-center justify-center rounded-full border border-stroke bg-white transition-all hover:border-transparent hover:drop-shadow-testimonial">
                <GrLinkNext className="text-green-500" />
                </button>
              </div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Team;


