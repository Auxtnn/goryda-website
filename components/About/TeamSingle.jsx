import React from "react";
import DotShape from "./DotShape";
import Image from "next/image";


const SingleTeam = ({
  image,
  details,
  name,
  position,
}) => {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12">
        <div className="w-full items-center md:flex">
          <div className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
            <Image src={image} unoptimized layout="responsive" width={20} height={20} alt="image" className="w-full bg-slate-500 border rounded-xl" />
            <span className="absolute -left-6 -top-6 z-[-1] hidden sm:block">
              <DotShape />
            </span>
            <span className="absolute -bottom-6 -right-6 z-[-1]">
              
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                  stroke="#13C296"
                  strokeWidth="6"
                />
              </svg>
            </span>
          </div>
          <div className="w-full">
            <div>
           
              <p className="mb-11 text-base font-normal italic leading-[1.81] text-body-color sm:text-[22px]">
                {details}
              </p>

              <h4 className="mb-2 text-[22px] font-semibold leading-[27px] text-dark">
                {name}
              </h4>
              <p className="text-base text-green-500">
                {position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;