import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [values, setValues] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function validate() {
    const newErrors = {};

    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
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
      <h4 className="text-2xl font-bold text-gray-800">Forgot Password</h4>
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

      <div className="text-gray-800">
        <Link
          to="/logIn"
          className="text-customBlue hover:contrast-200 duration-200"
        >
          Log In
        </Link>
        &nbsp;or&nbsp;
        <Link
          to="/signUp"
          className="text-customBlue hover:contrast-200 duration-200"
        >
          Sign Up
        </Link>
      </div>
      <button
        type="submit"
        className="w-full bg-customBlue text-gray-50 p-2 text-lg rounded-md drop-shadow-xl hover:contrast-200 duration-200 font-medium active:scale-105"
      >
        Submit
      </button>
    </form>
  );
};

export default ForgotPassword;
