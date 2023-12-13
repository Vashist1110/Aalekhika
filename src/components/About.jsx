import React from "react";

export default function About() {
  return (
    <div
      name="About"
      className=" flex flex-row w-full h-screen bg-gradient-to-b from-cyan-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm a third year student doing B.Tech in Electronics and Communication
          Engineering form NIT Bhopal. During the first two years in my college
          I've explored competitve programming and now I'm trying my hands on
          web development and Machine Learning.
        </p>
      </div>
    </div>
  );
}
