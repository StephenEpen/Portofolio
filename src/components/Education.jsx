import React from "react";

const Education = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="education">
      <div className="text-center mb-12">
        <h1 className="text-gray-200 text-4xl font-bold">My Education</h1>
        <p className="text-gray-400 mt-2">
          A timeline of my educational background and grades
        </p>
      </div>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2019 - 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            SMA Regina Pacis Bogor
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            As a student
          </p>
        </li>

        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2022 - Present
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Bina Nusantara University
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Computer Science student at Bina Nusantara University, currently enrolled in Software Engineering courses
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Education;
