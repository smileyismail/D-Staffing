import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { strengthColor, strengthIndicator } from "./passwordStrength";
import SocialAuth from "./SocialAuth";

const SignUp = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [level, setLevel] = useState({});
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function passwordStrength(value) {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  }

  useEffect(() => {
    passwordStrength("");
  }, []);

  function validate() {
    const newErrors = {};

    if (!values.fullName) {
      newErrors.fullName = "Name is required";
    }
    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      console.log(values);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-6 mt-20 bg-white max-w-lg mx-auto rounded-lg drop-shadow-2xl p-10 font-roboto text-gray-800"
    >
      <Link to="/">
        <button className="absolute top-0 left-0 bg-customBlue text-blue-50 font-bold rounded-md px-4 py-2">
          Go to Home
        </button>
      </Link>
      <h4 className="text-2xl font-bold text-gray-800">Sign Up</h4>

      <div className="flex flex-col w-full gap-1">
        <label htmlFor="fullName" className="text-sm text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={values.fullName}
          placeholder="Enter full name"
          onChange={handleChange}
          className="border-gray-400 border-[1px] p-2 rounded-md text-gray-800 focus:outline-none"
        />
        <p className="text-sm text-red-600">{errors && errors.fullName}</p>
      </div>

      <div className="flex flex-col w-full gap-1">
        <label htmlFor="email" className="text-sm text-gray-600">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Enter email address"
          onChange={handleChange}
          className="border-gray-400 border-[1px] p-2 rounded-md text-gray-800 focus:outline-none"
        />
        <p className="text-sm text-red-600">{errors && errors.email}</p>
      </div>

      <div className="flex flex-col w-full gap-1">
        <label htmlFor="password" className="text-sm text-gray-600">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder="Enter password"
          onChange={(e) => {
            handleChange(e);
            passwordStrength(e.target.value);
          }}
          className="border-gray-400 border-[1px] p-2 rounded-md text-gray-800 focus:outline-none"
        />
        <p className="text-sm text-red-600">{errors && errors.password}</p>

        <div className="flex items-center gap-2 mt-1 text-sm">
          <div className={`w-24 h-2 ${level.color} rounded-lg`} />
          <p>{level.label}</p>
        </div>
      </div>

      <div className="text-gray-800">
        Don't have an account?
        <Link
          to="/logIn"
          className="text-customBlue hover:contrast-200 duration-200"
        >
          &nbsp;Log In
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-customBlue text-gray-50 p-2 text-lg rounded-md drop-shadow-xl hover:contrast-200 duration-200 font-medium active:scale-105"
      >
        Sign Up
      </button>

      <div className="w-full flex justify-center items-center gap-2">
        <div className="h-0.5 bg-gray-200 w-full" />
        <p className="whitespace-nowrap text-sm text-gray-500">Sign Up with</p>
        <div className="h-0.5 bg-gray-200 w-full" />
      </div>

      <SocialAuth />
    </form>
  );
};

export default SignUp;
