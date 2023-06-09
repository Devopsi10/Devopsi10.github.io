import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import React, { useState } from "react";
import axios from "axios";

const About = () => {

  axios.get("http://localhost:3000/about").then((res) => {
    console.log(res.data);
  });

  return (
    <nav className="flex justify-between p-2">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 " />
        </Link>
        <h4 className="font-montserrat ">Omar Huseynov</h4>
      </div>
      <div className="flex items-center">
        <Link
          to="/"
          className="font-montserrat text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-montserrat bg-slate-200 text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          About me
        </Link>
        <Link
          to="/projects"
          className="font-montserrat text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="font-montserrat text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default About;
