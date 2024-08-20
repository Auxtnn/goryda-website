"use client";

import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   button text on form submission
  const [buttonText, setButtonText] = useState("Send Message");

  // success or failure messages
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    } else {
      tempErrors["fullname"] = false; // Reset the error state if it's now valid
    }

    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    } else {
      tempErrors["email"] = false;
    }

    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    } else {
      tempErrors["message"] = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      await fetch("", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            setEmail("");
            setFullname("");
            setMessage("");
          } else {
            // Error occurred while sending email
            throw new Error("Error sending email");
          }
        })
        .catch((error) => {
          console.log(error);
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setButtonText("Send Message");
          return;
        });

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send Message");
    }
    console.log(fullname, email, message);
  };

  return (
    <div id="contact" className="bg-green-500/[3%] py-4 md:pb-6 md:pt-16 pt-10">
      <div className="text-center justify-center items-center text-gray-900 text-base font-normal">
        <span className="text-green-500 pl-4 text-xl md:text-2xl font-semibold tracking-wider">
          Contact
        </span>
        <span className="text-gray-900 text-xl md:text-2xl font-semibold tracking-wider">
          {" "}
          Us
        </span>
        <p className="mt-3 px-4">Want To Talk with Us? Get In Touch</p>
      </div>
      <div className=" flex justify-center items-center">
        <div className="max-w-4xl p-4 md:p-8 flex flex-col md:flex-row">
          <div className="flex-1 md:w-96">
            <div className=" text-start text-gray-900 md:mt-0 mt-2 text-lg font-extrabold tracking-wide">
              Contact Info
            </div>

            <div className="md:mt-8">
              <div className="md:mt-4 space-y-2">
                <div className="flex items-center">
                  <div className="text-neutral-800 text-base font-normal my-4 tracking-wide">
                    <p> 275 Ziks Ave, Fegge, Awka, Anambra State</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <IoCallOutline className="text-base font-bold text-deep-red" />
                  <div className="text-neutral-800 text-base font-normal font-Poppins tracking-wide">
                    +2348025264804
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <IoCallOutline className="text-base font-bold text-deep-red" />
                  <div className="text-neutral-800 text-base font-normal font-Poppins tracking-wide">
                    +2348063296587
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-gry-900 text-lg font-medium font-Poppins tracking-wide">
                Social Handles
              </div>

              <div className="mt-4 flex gap-4">
                <Link
                  href="https://x.com/GorydaApp?s=09"
                  target="_blank"
                  className="text-sm mx-1"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  className="text-sm mx-1"
                  href="https://www.instagram.com/gorydaapp?igsh=ejM0Y3JycGdzNmg4"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link
                  className="text-sm mx-1"
                  href="https://www.facebook.com/profile.php?id=61562512510404"
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="text-start mt-10 md:mt-0 text-gray-900 text-lg font-extrabold tracking-wide">
              Send Us a Message
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mt-6 space-y-4 md:w-96">
                <input
                  type="text"
                  name="fullname"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  placeholder="Enter Your Name"
                  className={`w-full h-12 px-4 bg-white placeholder-gray-900 rounded-md border ${
                    errors.fullname ? "border-red-500" : "border-green-500"
                  } py-3 text-base shadow-one outline-none focus:border-green-500 focus-visible:shadow-none`}
                />
                {errors.fullname && (
                  <p className="text-red-500 text-sm ">
                    Please enter your name.
                  </p>
                )}

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter Your Email"
                  className={`w-full h-12 px-4 bg-white placeholder-gray-900 rounded-md border ${
                    errors.email ? "border-red-500" : "border-green-500"
                  } py-3 text-base shadow-one outline-none focus:border-green-500 focus-visible:shadow-none`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    Please enter a valid email.
                  </p>
                )}

                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Write Your Message"
                  className={`w-full h-32 px-4 bg-white placeholder:pt-2 placeholder-gray-900 rounded-md border ${
                    errors.message ? "border-red-500" : "border-green-500"
                  } py-3 text-base shadow-one outline-none focus:border-green-500 focus-visible:shadow-none`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    Please enter your message.
                  </p>
                )}

                {showSuccessMessage && (
                  <p className="text-green-500 text-sm">
                    Message sent successfully!
                  </p>
                )}
                {showFailureMessage && (
                  <p className="text-red-500 text-sm">
                    Failed to send message. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-2 h-12 px-8 bg-green-500 text-white hover:text-white hover:bg-green-500 hover:border-green-500 border font-bold rounded-md focus:outline-none"
                  disabled={buttonText === "Sending..."} // Disable button when sending
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
