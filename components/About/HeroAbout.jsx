import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroAbout = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-r from-white to-green-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center w-full px-4 lg:w-11/12">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-blue text-center md:text-left">
            All You Need to Know
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue text-center md:inline-block md:text-left">
            About Us
          </h2>

          <p className="text-lg text-gray-700 mb-6 mt-4 max-w-[480px] text-center md:text-justify">
          At GoRyda, we're more than just a ride and delivery service – We're your partners in seamless journey and swift connections.
          </p>

          <div className="grid items-center mt-5 md:inline md:mt-5">
            <button>
              <Link href="/support" className="text-white bg-green-500 rounded py-3 px-6 hover:text-green-700 hover:bg-transparent hover:border-green-700 border">
                Contact Us
              </Link>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative md:mt-20 md:-mb-16">
          <Image
            src="/images/about.png"
            alt="about"
            width={600}
            quality={100}
            height={450}
            unoptimized
            className="max-w-full h-auto rounded-lg"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
