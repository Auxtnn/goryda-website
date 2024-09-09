"use client";

import React, { useState } from "react";
import { Form, Formik } from "formik";
import TextInput from "@/components/Global/TextInput";
import Button from "@/components/Global/Button";
import { ValidationSchema } from "./ValidationSchema";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "@/components/Global/Loader";

const Forgot = () => {
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChangePassword = async (values, { resetForm }) => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.post(
        "",
        {
          password: values.password,
        },
        {
          headers: {
            Authorization: "",
          },
        }
      );
      console.log("Change password response:", response); // For debugging
      toast.success("Password successfully changed.");
      resetForm();
    } catch (error) {
      if (error.response) {
        const errorMessage =
          error.response.data.message || "An error occurred changing password";
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred changing password");
      }
    } finally {
      setIsLoading(false); // Stop loading, whether success or error
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={ValidationSchema}
        onSubmit={handleChangePassword}
      >
        {({ handleChange, errors, submitForm }) => (
          <Form className="flex flex-col gap-4">
            <TextInput
              type="password"
              name="password"
              label="New password"
              placeholder="Enter new password"
              onChange={handleChange}
              errors={errors}
            />
            <TextInput
              type="password"
              name="confirmPassword"
              label="Confirm new password"
              placeholder="Confirm new password"
              onChange={handleChange}
              errors={errors}
            />
            <div>
              <Button
                onClick={submitForm}
                disabled={isLoading}
                type="submit"
                btnText={isLoading ? <Loader /> : "Reset password"}
                className="bg-blue100 text-[16px] text-white leading-[24px] font-medium py-2 px-4 rounded-md transition-transform duration-200 ease-in-out transform active:scale-95 focus:outline-none"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forgot;
