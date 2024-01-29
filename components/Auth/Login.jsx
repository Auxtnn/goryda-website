"use client";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
        <div className="side-img"></div>
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md  rounded px-20 pt-6 pb-8 mb-4 "
          >
            <div className="form-logo mr-4 ml-6">
              <img src="/images/1@3x-1.jpg" alt="" />
            </div>
            <div className="block text-gray-500 text-size- font-bold mb-1 p-1 text-xl">
              <h1> Log In To Admin Panel</h1>
            </div>
            <h2 className="block text-gray-500 text-size- font-bold mb-1 pb-8 text-sm">
              Enter Your Email And Password
            </h2>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-500 text-sm font-bold mb-1  "
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-green-500 : '#00cd66', text-xs italic">
                Please input your password.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                className=" bg-green-500 : '#00cd66', hover:bg-black text-white font-bold py-1 px-8  v-100vw rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
