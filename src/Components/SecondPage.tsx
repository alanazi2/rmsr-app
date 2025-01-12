import React from 'react';

type Skill = {
  name: string;
};

const skills: Skill[] = [
  { name: "JavaScript" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "SQL" },
  { name: "Bootstrap" },
  { name: "DOM Manipulation" },
  { name: "jQuery" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MongoDB" },
  { name: "MySQL" },
  { name: "Git" },
  { name: "GitHub" },
];

const SecondPage: React.FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold">Technical Skills</h2>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index}>{skill.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default SecondPage;
