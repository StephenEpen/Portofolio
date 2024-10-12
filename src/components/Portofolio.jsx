import React, { useState } from "react";
import project21 from "../assets/project2-1.png";
import project22 from "../assets/project2-2.png";
import project23 from "../assets/project2-3.png";
import project24 from "../assets/project2-4.png";
import project31 from "../assets/project3-1.png";
import project32 from "../assets/project3-2.png";
import project33 from "../assets/project3-3.png";
import project34 from "../assets/project3-4.png";
import project35 from "../assets/project3-5.png";
import { AiFillGithub } from "react-icons/ai";
import ShinyEffect from "./ShinyEffect";
import {
  Css3Plain,
  Html5Plain,
  ReactOriginal,
  JavascriptOriginal,
  TailwindcssOriginal,
} from "devicons-react";
import Carousel from "./Carousel";

const projects = [
  {
    img: [project21, project22, project23, project24],
    title: "Bad Code Smell",
    description:
      "The Bad Code Smell website was created as a project assignment for the Code Reengineering course. The purpose of this website is to provide education about code smells.",
    links: {
      site: "https://bad-code-smell-ss.vercel.app/",
      github: "https://github.com/StephenEpen/Bad-Code-Smell",
    },
    language: [ReactOriginal, TailwindcssOriginal],
  },
  {
    img: [project31, project32, project33, project34, project35],
    title: "JETFLIX",
    description:
      "Jetflix is the final project for the Human and Computer Interaction course. The purpose of this project is to create a website featuring movies based on the fundamentals of web development.",
    links: {
      site: "https://jetflix-epen.vercel.app/",
      github: "https://github.com/StephenEpen/JETFLIX",
    },
    language: [Html5Plain, Css3Plain, JavascriptOriginal],
  },
];

const Portofolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portofolio">
      <div className="text-center mb-12">
        <h1 className="text-gray-200 text-4xl font-bold">My Portfolio</h1>
        <p className="text-gray-400 mt-2">A collection of my latest work</p>
      </div>

      <div className="relative flex flex-col md:flex-row">
        <div className="z-10 glass p-6 w-full border-2 max-w-[600px]">
          <div>
            <Carousel resetIndex={currentProject}>
              {projects[currentProject].img.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img
                    src={image}
                    alt={projects[currentProject].title}
                    className="h-30"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <p className="text-gray-200 my-4">
            {projects[currentProject].description}
          </p>

          <div className="flex flex-wrap gap-4 text-4xl mb-4">
            {projects[currentProject].language.map((Icon, index) => (
              <Icon key={index} size={30} />
            ))}
          </div>

          <div className="flex space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={projects[currentProject].links.site}
              className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              View Site
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={projects[currentProject].links.github}
              className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>

        <div className="absolute inset-0">
          <div className="hidden md:block">
            <ShinyEffect left={100} top={0} size={900} />
          </div>
        </div>

        <ul className="z-10 ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-start mt-4 md:gap-1">
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[200px] hover:bg-slate-800 transition duration-300 ${
                currentProject === index ? "bg-slate-900" : ""
              }`}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portofolio;
