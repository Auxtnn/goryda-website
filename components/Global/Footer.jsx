import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const getFullYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 md:pt-16 pb-4 sm:px-6 lg:space-y-10 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex items-center justify-center sm:justify-start">
            <Image
              src="/images/goryda.png"
              alt="logo"
              quality={100}
              height={140}
              width={200}
              className="max-w-full"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-green-500">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="transition hover:opacity-75">Ride</li>

                <li className="transition hover:opacity-75">Drive</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-green-500">Quick Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="#" className="transition hover:opacity-75">
                    Rider App
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition hover:opacity-75">
                    Driver App
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-green-500">Support</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/support" className="transition hover:opacity-75">
                    Contact
                  </Link>
                </li>

                <li className="transition hover:opacity-75">
                  support@goryda.com
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-green-500">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/terms" className="transition hover:opacity-75">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="transition hover:opacity-75"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2 items-center sm:items-start">
          <ul className="flex gap-2">
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=61562512510404"
                target="_blank"
                className="text-green-500 transition hover:opacity-75"
              >
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/gorydaapp?igsh=ejM0Y3JycGdzNmg4"
                target="_blank"
                className="text-green-500 transition hover:opacity-75"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/GorydaApp?s=09"
                target="_blank"
                className="text-green-500 transition hover:opacity-75"
              >
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                target="_blank"
                className="text-green-500 transition hover:opacity-75"
              >
                <SiGmail />
              </Link>
            </li>
          </ul>
          <p className="text-xs text-center sm:text-right">
            &copy; {getFullYear()} GoRyda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
