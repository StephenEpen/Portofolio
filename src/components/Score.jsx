import React from 'react';
import { Download } from 'react-feather';

const data = [
  {
      subject: "Algorithm and Programming",
      grade: "B+"
  },
  {
      subject: "Program Design Methods",
      grade: "A-"
  },
  {
      subject: "Data Structures",
      grade: "A"
  },
  {
      subject: "Artificial Intelligence",
      grade: "A"
  },
  {
      subject: "Database Technology",
      grade: "A"
  },
  {
      subject: "Object Oriented Programming",
      grade: "A"
  },
  {
      subject: "Computer Networks",
      grade: "A"  
  },
  {
      subject: "Software Engineering",
      grade: "A"
  },
  {
      subject: "Code Reengineering",
      grade: "A-"
  },
  {
      subject: "Pattern Software Design",
      grade: "A"
  },
  {
      subject: "Agile Software Development",
      grade: "A"
  }
]

const transcript = "/files/transcript.pdf"

const Score = () => {
  return (
    <section className="max-w-[1200px] mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-200 mb-4">Academic Gradess</h2>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
        <div>
          <h3 className="text-xl text-gray-400 mb-1">Current GPA: 3.78/4</h3>
          <h3 className="text-xl text-gray-400 mb-4 sm:mb-0">Current Semester: 5th</h3>
        </div>
        <a
          href={transcript}
          download="transcript.pdf"
          className="flex gap-2 glass px-4 py-2 text-white rounded transition duration-300"
        >
          <Download size={20}/>
          Download Transcript
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="glass rounded-lg p-4 text-center text-gray-200 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-lg font-bold">{item.subject}</div>
            <div className="text-sm text-gray-400 mt-2">Grade: {item.grade}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Score;
