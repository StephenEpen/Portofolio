import React from "react";
import { TypeAnimation } from "react-type-animation";
import profilepic from "../assets/profilepic.png";
import ShinyEffect from "./ShinyEffect";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:md-32 pt-24">
      <div className="max-w-[800px] p-4 md:p-0 lg:p-6">
        <p className="text-gray-200 md:text-5xl text-3xl tracking-tight mb-2">
          HEY, I AM <br />
          <span className="">Stephen</span> <br />
          <TypeAnimation
            sequence={["Software Developer", 1000, "Web Designer", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>
        <h2 className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quod!
        </h2>

        <div className="flex flex-row gap-4 md:gap-6 mb-4 md:mb-0">
          <button className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl">
            Download CV
          </button>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-12 h-12 mt-6 p-2 border border-gray-400 rounded-xl flex items-center justify-center"
          >
            <AiFillGithub size={30} />
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-12 h-12 mt-6 p-2 border border-gray-400 rounded-xl flex items-center justify-center"
          >
            <AiFillLinkedin size={30} />
          </a>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden md:overflow-visible">
        <div className="hidden md:block">
          <ShinyEffect left={100} top={200} size={1400} />
        </div>
        <ShinyEffect left={-100} top={0} size={1200} />
      </div>

      <div className="relative flex justify-center items-center">
        <div className="absolute z-0 w-[300px] md:w-[500px]">
        <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            className="opacity-80"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "rgb(80, 167, 199)" }} />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(61, 108, 164)" }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M470.5,285.5Q467,321,446.5,349.5Q426,378,400,399Q374,420,346.5,441Q319,462,284.5,458Q250,454,218.5,449Q187,444,148.5,443.5Q110,443,88,413.5Q66,384,41,355Q16,326,15,288Q14,250,14.5,212Q15,174,50,152Q85,130,106.5,106Q128,82,150.5,47.5Q173,13,211.5,19Q250,25,282,39Q314,53,355.5,50.5Q397,48,406.5,88.5Q416,129,450,151.5Q484,174,479,212Q474,250,470.5,285.5Z"
            >
              <animate
                attributeName="d"
                dur="20000ms"
                repeatCount="indefinite"
                values="
                M470.5,285.5Q467,321,446.5,349.5Q426,378,400,399Q374,420,346.5,441Q319,462,284.5,458Q250,454,218.5,449Q187,444,148.5,443.5Q110,443,88,413.5Q66,384,41,355Q16,326,15,288Q14,250,14.5,212Q15,174,50,152Q85,130,106.5,106Q128,82,150.5,47.5Q173,13,211.5,19Q250,25,282,39Q314,53,355.5,50.5Q397,48,406.5,88.5Q416,129,450,151.5Q484,174,479,212Q474,250,470.5,285.5Z;
                
                M473,285Q466,320,447.5,350Q429,380,402.5,401.5Q376,423,351.5,454.5Q327,486,288.5,472.5Q250,459,218.5,452Q187,445,145,448.5Q103,452,82,419.5Q61,387,60,349.5Q59,312,50,281Q41,250,36.5,214.5Q32,179,47.5,146.5Q63,114,90,90.5Q117,67,150.5,56.5Q184,46,217,36.5Q250,27,285,30Q320,33,347.5,55.5Q375,78,394.5,104.5Q414,131,446.5,153.5Q479,176,479.5,213Q480,250,473,285Z;

                M470.5,285.5Q467,321,446.5,349.5Q426,378,400,399Q374,420,346.5,441Q319,462,284.5,458Q250,454,218.5,449Q187,444,148.5,443.5Q110,443,88,413.5Q66,384,41,355Q16,326,15,288Q14,250,14.5,212Q15,174,50,152Q85,130,106.5,106Q128,82,150.5,47.5Q173,13,211.5,19Q250,25,282,39Q314,53,355.5,50.5Q397,48,406.5,88.5Q416,129,450,151.5Q484,174,479,212Q474,250,470.5,285.5Z;
                "
              />
            </path>
          </svg>
        </div>

        <img
          src={profilepic}
          className="relative z-10 w-[300px] md:w-[500px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
