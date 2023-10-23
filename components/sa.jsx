"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav className="p-4 border relative">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/images/goryda.png"
                alt="VPN Illustration"
                quality={100}
                height={40}
                width={120}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-16 pr-10">
                  <Link href="/about" className="hover:text-green-500">
              About
            </Link>
            <div className="relative group">
              <button className="hover:text-green-500 group">Services</button>
            </div>
            <div className="relative group">
              <button className="hover:text-green-500 group">FAQ</button>
            </div>
            <Link href="/support" className="hover:text-green-500">
              Support
            </Link>
            <Link
              href="/support"
              className="hover:text-green-500 bg-green-500 text-white rounded py-2 px-4 hover:bg-transparent hover:border-green-700 border"
            >
              Book Ride
            </Link>
          </div>
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <FaTimes
                className="text-2xl text-green-500 cursor-pointer"
                onClick={toggleMobileMenu}
              />
            ) : (
              <FaBars
                className="text-2xl text-green-500 cursor-pointer"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="md:hidden text-center py-4 bg-white fixed inset-y-0 right-0 z-10 p-4 w-64"
              onClick={closeMobileMenu}
            >
              <Link href="/about" className="block mb-4 text-2xl hover:text-green-500">
                About
              </Link>
              <Link href="/services" className="block mb-4 text-2xl hover:text-green-500">
                Services
              </Link>
              <Link href="/faq" className="block mb-4 text-2xl hover-text-green-500">
                FAQ
              </Link>
              <Link href="/support" className="block mb-4 text-2xl hover-text-green-500">
                Support
              </Link>
              <Link
                href="/book-ride"
                className="block bg-green-500 text-white rounded py-2 px-4 hover-bg-transparent hover-border-green-700 border text-2xl"
              >
                Book Ride
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
