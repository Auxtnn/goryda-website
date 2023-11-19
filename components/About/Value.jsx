// Import necessary dependencies
import React from "react";
import { MdDriveEta } from "react-icons/md";

// Define your functional component
const Value = () => {
  return (
    <section className="px-2 py-10 bg-gradient-to-b from-white via-green-50 to-white">
      <div id="features" className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-2xl font-bold tracking-tight md:text-[2rem]">
          Our Core Values
        </h2>
        <div className="md:w-full md:flex md:justify-center md:align-middle w-full">
          <div className="flex-col justify-start items-start md:gap-12 inline-flex mt-10 mx-auto pl-8">

          <div className="md:hidden mb-4" />

            <div className="justify-start items-start md:gap-16 inline-flex md:flex-row flex-col">
              <div className="justify-start items-start flex">
                <div className=" justify-center items-center flex">
                  <div className="self-stretch justify-start items-start inline-flex">
                    <MdDriveEta className="mx-auto h-10 w-10 bg-green-500 text-white rounded-3xl p-2" />
                    <div className="w-7 h-7 relative"></div>
                  </div>
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-zinc-900 text-xl font-semibold font-['Poppins'] tracking-wide">Reliability</div>
                  <div className="w-60 text-zinc-900 text-base font-normal font-['Poppins'] tracking-wide">Our commitment is to provide consistent, on-time services that our users can depend on.</div>
                </div>
              </div>
              <div className="md:hidden mt-4" />
              <div className="justify-start items-start flex">
                <div className=" justify-center items-center flex">
                  <div className="self-stretch justify-start items-start inline-flex">
                    <MdDriveEta className="mx-auto h-10 w-10 bg-green-500 text-white rounded-3xl p-2" />
                    <div className="w-7 h-7 relative"></div>
                  </div>
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-zinc-900 text-xl font-semibold font-['Poppins'] tracking-wide">Safety First</div>
                  <div className="w-60 text-zinc-900 text-base font-normal font-['Poppins'] tracking-wide">We implement rigorous safety standards to ensure the well-being of both our riders and customers</div>
                </div>
              </div>
            </div>

            {/* Add margin between flex items on small screens */}
            <div className="md:hidden mt-4" />

            <div className="justify-start items-start md:gap-16 inline-flex md:flex-row flex-col">
              <div className="justify-start items-start flex">
                <div className=" justify-center items-center flex">
                  <div className="self-stretch justify-start items-start inline-flex">
                    <MdDriveEta className="mx-auto h-10 w-10 bg-green-500 text-white rounded-3xl p-2" />
                    <div className="w-7 h-7 relative"></div>
                  </div>
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-zinc-900 text-xl font-semibold font-['Poppins'] tracking-wide">Efficiency & Speed</div>
                  <div className="w-60 text-zinc-900 text-base font-normal font-['Poppins'] tracking-wide">With advanced tech and optimized routes, we make every ride and delivery quick and convenient.</div>
                </div>
              </div>
              <div className="md:hidden mt-4" />
              <div className="justify-start items-start flex">
                <div className=" justify-center items-center flex">
                  <div className="self-stretch justify-start items-start inline-flex">
                    <MdDriveEta className="mx-auto h-10 w-10 bg-green-500 text-white rounded-3xl p-2" />
                    <div className="w-7 h-7 relative"></div>
                  </div>
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-zinc-900 text-xl font-semibold font-['Poppins'] tracking-wide">Customer-Centric Experience</div>
                  <div className="w-60 text-zinc-900 text-base font-normal font-['Poppins'] tracking-wide">We are dedicated to providing an exceptional experience throughout your journey with us. </div>
                </div>
              </div>
            </div>

    

          </div>
        </div>
      </div>
    </section>
  );
};

// Export the component
export default Value;
