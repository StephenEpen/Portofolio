import React, { useState } from "react";
import project1 from "../assets/project1.png";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.jpeg";
import { AiFillGithub } from "react-icons/ai";
import ShinyEffect from "./ShinyEffect";
import {
  Css3Plain,
  Html5Plain,
  JavaOriginal,
  MysqlOriginalWordmark,
  ReactOriginal,
  JavascriptOriginal,
} from "devicons-react";
import Carousel from "./Carousel";
import { ChevronLeft, ChevronRight } from "react-feather";

const projects = [
  {
    img: [project1, image2, image3, image4],
    title: "Project #1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore possimus fugit tempora iure ex ullam.",
    links: {
      site: "#",
      github: "#",
    },
    language: [Html5Plain, Css3Plain],
  },
  {
    img: [project1],
    title: "Project #2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore possimus fugit tempora iure ex ullam.",
    links: {
      site: "#",
      github: "#",
    },
    language: [JavaOriginal, MysqlOriginalWordmark],
  },
  {
    img: [project1],
    title: "Project #3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore possimus fugit tempora iure ex ullam.",
    links: {
      site: "#",
      github: "#",
    },
    language: [ReactOriginal, JavascriptOriginal],
  },
];

const Portofolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const [slide, setSlide] = useState(0)
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
                  className="w-full h-80 object-cover rounded-lg"
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
              href={projects[currentProject].links.site}
              className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              View Site
            </a>
            <a
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

        <ul className="z-10 ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${
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
