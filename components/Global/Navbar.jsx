"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TfiClose } from "react-icons/tfi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close the menu if clicked outside the menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.mobile-menu')) {
        closeMobileMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <header>
      <nav className="p-1 border">
        <div className="container mx-auto flex justify-between items-center relative">
          <div>
            <Link href="/">
              <Image
                src="/images/goryda.png"
                alt="image"
                quality={100}
                height={50}
                width={120}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-16 pr-2">
            <Link href="/about" className="hover:text-green-500 ">
              About
            </Link>
          
           
            <Link href="/#services" className="hover:text-green-500">
              Services
            </Link>

            <Link href="/#faq" className="hover:text-green-500">
              FAQ
            </Link>
            <Link href="/support" className="hover:text-green-500">
              Support
            </Link>
            <Link
              href="#"
              className=" bg-green-500 text-white rounded py-3 px-4 hover:bg-green-600 "
            >
              Get the App
            </Link>
          </div>
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <TfiClose
                className="text-2xl text-green-500 cursor-pointer"
                onClick={toggleMobileMenu}
              />
            ) : (
              <HiOutlineBars3BottomRight
                className="text-3xl text-green-500 cursor-pointer"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed top-20 right-0 w-64 h-full bg-white z-50 mobile-menu"
            >
              <div className="text-center py-8">
                <Link
                  href="/about"
                  className="block mb-4 mt-2 hover:text-green-500"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="/#services"
                  className="block mb-4 hover:text-green-500"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <Link
                  href="/#faq"
                  className="block mb-4 hover-text-green-500"
                  onClick={closeMobileMenu}
                >
                  FAQ
                </Link>
                <Link
                  href="/support"
                  className="block mb-4 hover-text-green-500"
                  onClick={closeMobileMenu}
                >
                  Support
                </Link>
                <Link
                  href="#"
                  className="block mx-4 bg-green-500 text-white rounded py-3 px-4 hover-bg-transparent hover-border-green-700 border"
                  onClick={closeMobileMenu}
                >
                  Get the App
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;

