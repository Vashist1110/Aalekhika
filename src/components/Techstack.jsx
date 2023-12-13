import React from "react";
import html from "../assets/htmllogo.png";
import css from "../assets/csslogo.png";
import js from "../assets/jslogo.png";
import git from "../assets/gitlogo.png";
import github from "../assets/github.png";
import expresslogo from "../assets/expressjs-icon.svg";
import nodejslogo from "../assets/node-js-svgrepo-com.svg";
import reactlogo from "../assets/reactlogo.png";
import mongodblogo from "../assets/mongodblogo.png";
import mysqllogo from "../assets/mysql-official.svg";

export default function Techstack() {
  const techs = [
    {
      id: 1,
      src: html,
      style: "",
    },
    {
      id: 2,
      src: css,
      style: "",
    },
    {
      id: 3,
      src: js,
      style: "",
    },
    {
      id: 4,
      src: reactlogo,
      style: "",
    },
    {
      id: 5,
      src: mongodblogo,
      style: "",
    },
    {
      id: 6,
      src: mysqllogo,
      style: "",
    },
    {
      id: 7,
      src: expresslogo,
      style: "",
    },
    {
      id: 8,
      src: github,
      style: "",
    },

    {
      id: 9,
      src: nodejslogo,
      style: "",
    },
    {
      id: 10,
      src: git,
      style: "",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-cyan-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg my-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500">
            Tech used
          </p>
        </div>

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
