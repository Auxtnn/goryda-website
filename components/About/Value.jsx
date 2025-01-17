import React from "react";
import { MdDriveEta } from "react-icons/md";
import Animation from "../Global/Animation";

const Value = () => {
  return (
    <section className=" bg-gradient-to-b from-white via-green-50 to-white">
      <div className="px-4 lg:w-11/12 mx-auto">
        <h2 className="text-center font-display text-2xl font-bold tracking-tight md:text-[2rem]">
          Our Core Values
        </h2>
        <div className="container py-8 mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Animation>
              <div className="">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                    <MdDriveEta className="mx-auto h-10 w-10 bg-green-500 text-white rounded-3xl p-2" />
                  </div>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                    Reliability
                  </h2>
                  <p className="leading-relaxed text-base">
                    Our commitment is to provide consistent, on-time services
                    that our users can depend on.
                  </p>
                </div>
              </div>
            </Animation>
            <Animation>
              <div className="">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                    <MdDriveEta className="mx-auto h-10 w-10 bg-green-500 text-white rounded-3xl p-2" />
                  </div>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                    Safety First
                  </h2>
                  <p className="leading-relaxed text-base">
                    We implement rigorous safety standards to ensure the
                    well-being of both our riders and customers.
                  </p>
                </div>
              </div>
            </Animation>
            <Animation>
              <div className="">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                    <MdDriveEta className="mx-auto h-10 w-10 bg-green-500 text-white rounded-3xl p-2" />
                  </div>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                    Efficiency & Speed
                  </h2>
                  <p className="leading-relaxed text-base">
                    With advanced tech and optimized routes, we make every ride
                    and delivery quick and convenient.
                  </p>
                </div>
              </div>
            </Animation>
            <Animation>
              <div className="">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                    <MdDriveEta className="mx-auto h-10 w-10 bg-green-500 text-white rounded-3xl p-2" />
                  </div>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                    Customer-centric Experience
                  </h2>
                  <p className="leading-relaxed text-base">
                    We are dedicated to providing an exceptional experience
                    throughout your journey with us.
                  </p>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
