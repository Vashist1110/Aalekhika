import React from "react";
import js from "../assets/jslogo.png";
import git from "../assets/gitlogo.png";
import github from "../assets/github.png";
import expresslogo from "../assets/expressjs-icon.svg";
import reactlogo from "../assets/reactlogo.png";
import mongodblogo from "../assets/mongodblogo.png";

export default function Atsocialtech() {
  const techs = [
    {
      id: 1,
      src: js,
      style: "",
    },
    {
      id: 2,
      src: reactlogo,
      style: "",
    },
    {
      id: 3,
      src: mongodblogo,
      style: "",
    },

    {
      id: 4,
      src: expresslogo,
      style: "",
    },
    {
      id: 5,
      src: github,
      style: "",
    },

    {
      id: 6,
      src: git,
      style: "",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black-800 to-white-800">
      <div className="max-w-screen-lg my-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <p>Tech used in this project</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
