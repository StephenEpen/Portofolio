import React from "react";
import project1 from "../assets/project1.png";
import {
  CPlain,
  CsharpPlain,
  Css3Plain,
  DotnetcoreOriginal,
  Html5Plain,
  JavaOriginal,
  JavascriptOriginal,
  LaravelOriginal,
  MysqlOriginalWordmark,
  ReactOriginal,
  TailwindcssOriginal,
} from "devicons-react";

const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center mt-12 sm:mt-16 lg:mt-24"
      id="about"
    > 
      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div
          className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg
                 rounded-lg"
        >
          <img
            src={project1}
            alt="project 1"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-300 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          quas.
        </p>
        <div className="flex flex-wrap gap-4 text-4xl ">
          <Html5Plain colored size="30" />
          <Css3Plain colored size="30" />
          <ReactOriginal colored size="30" />
          <JavascriptOriginal colored size="30" />
          <JavaOriginal colored size="30" />
          <MysqlOriginalWordmark colored size="30" />
          <LaravelOriginal colored size="30" />
          <DotnetcoreOriginal colored size="30" />
          <CPlain colored size="30" />
          <CsharpPlain colored size="30" />
          <TailwindcssOriginal colored size="30" />
        </div>
      </div>
    </div>
  );
};

export default About;
