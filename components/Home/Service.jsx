import React from "react";
import Image from "next/image"
import { MdDriveEta, MdAirlineSeatLegroomExtra } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb"


const Service = () => {
  return (
  <section className="px-2 py-10" id="services">
    <div className="mx-auto max-w-6xl">
    <h2 className="text-center font-display text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
    The Services we offer
  </h2>
  <p className="text-center text-base leading-7 md:max-w-2xl md:mx-auto px-2">
  Discover a wide range of our services designed to cater to your every need, from convenient rides to efficient deliveries.
  </p>
 
  <ul className="mt-16 grid  md:px-10 md:gap-16 mx-6 grid-cols-1 gap-8 text-center md:grid-cols-3">
    <li className="rounded bg-white md:px-6 px-3 py-8 shadow-md bordertransition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ">

     <Image src={"/images/seat.png"} width={10} height={10} alt="image" unoptimized className="mx-auto h-10 w-10  text-green-500" />
      <h3 className="my-3 font-display font-semibold">Ride</h3>
      <p className="mt-1.5 text-sm leading-6 text-secondary-500">
     Enjoy a stress-free booking and ride with us.
      </p>

    </li>
    <li className="rounded bg-white md:px-6 px-3 py-8 shadow-md border transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">

      <TbTruckDelivery className="mx-auto h-10 w-10 text-green-500" />
      <h3 className="my-3 font-display font-semibold">Courier</h3>
      <p className="mt-1.5 text-sm leading-6 text-secondary-500">
      Deliver your packages safely to desired destination.
      </p>

    </li>
    <li className="rounded bg-white md:px-6 px-3 py-8 shadow-md bordertransition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ">
    <MdDriveEta className="mx-auto h-10 w-10 text-green-500" />
      <h3 className="my-3 font-display font-semibold">Drive</h3>
      <p className="mt-1.5 text-sm leading-6 text-secondary-500">
      Become our driver and get paid delivering rides and packages.
      </p>

    </li>

  </ul>
</div>
</section>

  );
};

export default Service;