import React from "react";
import { MdDriveEta } from "react-icons/md";

const Vision = () => {
  return (
    <section className=" px-4 py-10">
      <div id="features" className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold leading-[1.2] md:text-[2rem]">
          Why GoRyda
        </h2>
        <p className="text-center text-base leading-7 md:max-w-2xl md:mx-auto md:px-[10rem]">
          Explore the unique advantages that set GoRyda apart in providing
          exceptional ride services.
        </p>

        <ul className="mt-10 grid  md:px-10 md:gap-16 grid-cols-1 gap-8 text-center md:grid-cols-3">
          <li className="rounded bg-white md:px-6 px-3 py-8 shadow-xl border transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            <MdDriveEta className="mx-auto h-10 w-10 bg-green-500 text-white rounded-3xl p-2" />
            <h3 className="mt-3 font-display font-semibold">
              Tailored Service
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Tailored services to match your unique needs.
            </p>
          </li>
          <li className="rounded bg-white md:px-6 px-3 py-8 shadow-xl bordertransition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ">
            <MdDriveEta className="mx-auto h-10 w-10 bg-green-500 text-white rounded-3xl p-2" />
            <h3 className="mt-3 font-display font-semibold">
              Efficient Transition
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Seamless travel with cutting-edge tech.
            </p>
          </li>
          <li className="rounded bg-white md:px-6 px-3 py-8 shadow-xl border transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            <MdDriveEta className="mx-auto h-10 w-10 bg-green-500 text-white rounded-3xl p-2" />
            <h3 className="mt-3 font-display font-semibold">
              Prompt Deliveries
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Ensuring sustainability in every journey.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Vision;
