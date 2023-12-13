import React from "react";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

export default function Home() {
  const navigateToPage = (url) => {
    window.location.href = url;
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-cyan-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row"
      >
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Competitive Programmer
        </h2>

        <div className=" flex flex-col justify-center mx-auto w-full">
          <div>
            <p className="text-gray-500 py-4 max-w-md">
              I like doing competitve programming. Currently I'm exploring web
              development and technologies like React, NextJs, MongoDB..
            </p>
          </div>

          <div className="flex flex-row justify-center ">
            <div className="px-3 cursor-pointer hover:scale-105 duration-200">
              <AiFillLinkedin
                color="white"
                size={50}
                onClick={() =>
                  navigateToPage(
                    "https://www.linkedin.com/in/vashist-tiwari-a302b922b/"
                  )
                }
              />
            </div>
            <div className="px-3 cursor-pointer hover:scale-105 duration-200">
              <FaInstagram color="white" size={50} />
            </div>
            <div className="px-3 cursor-pointer hover:scale-105 duration-200">
              <BsGithub
                color="white"
                size={50}
                onClick={() =>
                  navigateToPage("https://github.com/Vashist1110")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
