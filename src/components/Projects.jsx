import React from "react";
import atsocial from "../assets/atsocial.png";
import Atsocialtech from "../projecttech/Atsocialtech.jsx";

export default function Projects() {
  const projects = [
    {
      id: 1,
      src: atsocial,
      demolink: "https://atsocial-ui.vercel.app/",
      serverlink: "https://github.com/Ananttiwari12/ATsocialserver",
      uilink: "https://github.com/Ananttiwari12/AtsocialUI",
    },
  ];

  const navigateToPage = (url) => {
    window.location.href = url;
  };

  return (
    <div
      name="project"
      className=" items-center bg-gradient-to-b from-black to-cyan-800 w-full text-white md:h-screen"
    >
      <div className="mx-w-screen-lg p-4  flex flex-col mx-auto justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {projects.map(({ id, src, demolink, serverlink, uilink }) => (
            <div key={id} className="shadow-md shadow-cyan-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/3 px-5 py-0 m-4 duration-200 hover:scale-105"
                  onClick={() => navigateToPage(serverlink)}
                >
                  server
                </button>
                <button
                  className="w-1/3 px-5 py-0 m-4 duration-200 hover:scale-105"
                  onClick={() => navigateToPage(uilink)}
                >
                  ui
                </button>
                <button
                  className="w-1/3 px-5 py-0 m-4 duration-200 hover:scale-105"
                  onClick={() => navigateToPage(demolink)}
                >
                  demo
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col">
            <Atsocialtech />
          </div>
        </div>
      </div>
    </div>
  );
}
