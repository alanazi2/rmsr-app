import React from 'react';

const SecondPage: React.FC = () => {
  const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
  ];

  return (
    <section className="p-8 bg-white text-gray-900">
      <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
      <ul className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg bg-gray-200 p-4 rounded-lg shadow">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default SecondPage;
