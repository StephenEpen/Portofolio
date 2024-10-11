import React from 'react'

const data = [
    {
        subject: "OOP",
        grade: "A-"
    },
    {
        subject: "ALGOPROG",
        grade: "B+"
    },
    {
        subject: "DATA STRUCTURE",
        grade: "A"
    },
    {
        subject: "NETWORKING",
        grade: "B+"
    },
    {
        subject: "OOP",
        grade: "A-"
    },
    {
        subject: "ALGOPROG",
        grade: "B+"
    },
    {
        subject: "DATA STRUCTURE",
        grade: "A"
    },
    {
        subject: "NETWORKING",
        grade: "B+"
    }
]

const Score = () => {
  return (
    <section className="max-w-[1200px] mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-200 mb-4">Academic Scores</h2>

      <h3 className="text-xl text-gray-400 mb-2">Current GPA: 3.78/4</h3>
      <h3 className="text-xl text-gray-400 mb-4">Current Semester: 5th</h3>
      
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
  )
}

export default Score
