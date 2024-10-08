import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-cyan-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg  h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">You can leave a message here..</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/c4e38bdc-7fed-41de-b51f-8fc326aaf567"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
