"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Button, TextInput } from "@/components/Global";
import toast from "react-hot-toast";
import Image from "next/image";
import axios from "axios";
import { ValidationSchema } from "./ValidationSchema";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.post(
        "", // Your API URL here
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            Authorization: "", // Your Authorization header here
          },
        }
      );
      console.log("Login response:", response); // For debugging
      toast.success("Login successful.");
      resetForm();
    } catch (error) {
      if (error.response) {
        const errorMessage =
          error.response.data.message || "An error occurred while logging in";
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred while logging in");
      }
    } finally {
      setIsLoading(false); // Stop loading, whether success or error
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
        <div className="w-full max-w-md">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={ValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, handleChange, errors }) => (
              <Form className="bg-white shadow-md rounded-md px-6 pb-4 mb-4">
                <div className="flex justify-center mx-auto">
                  <Image
                    src="/images/goryda.png"
                    alt="image"
                    quality={100}
                    height={120}
                    width={120}
                    className="max-w-full"
                  />
                </div>
                <div className="block text-gray-500 font-bold mb-1 p-1 text-xl text-center">
                  <h1>Log In To Admin Panel</h1>
                </div>
                <h2 className="block text-center text-gray-500 font-bold mb-1 pb-8 text-sm">
                  Enter Your Email And Password
                </h2>

                <div className="mb-4 w-full">
                  <TextInput
                    type="text"
                    name="email"
                    label="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    errors={errors}
                  />
                </div>

                <div className="mb-6">
                  <TextInput
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter admin password"
                    onChange={handleChange}
                    errors={errors}
                  />
                </div>

                <div className="flex items-center justify-center">
                  <Button
                    loading={isLoading || isSubmitting}
                    disabled={isLoading || isSubmitting}
                    type="submit"
                    btnText="Login"
                    className="border-green-500 w-full bg-green-500 text-[16px] text-white leading-[24px] font-medium"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
