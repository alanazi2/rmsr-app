import React from 'react';

type Education = {
  degree: string;
  institution: string;
  date: string;
};

type Certification = {
  name: string;
};

const education: Education = {
  degree: "Programming Technology",
  institution: "Imam Muhammad Bin Saud Islamic University",
  date: "June 2024",
};

const certifications: Certification[] = [
  { name: "Bootstrap: Responsive front-end development framework" },
  { name: "CSS: Cascading Style Sheets for web design" },
  { name: "Document Object Model (DOM): JavaScript API for HTML/XML documents" },
  { name: "JavaScript: Front-end and back-end development" },
  { name: "MongoDB: NoSQL database management" },
  { name: "Node.js: Server-side JavaScript environment" },
  { name: "Project Management in Technology" },
  { name: "Application Security: Best practices for securing software applications" },
  { name: "IT Support: Fundamental IT skills for troubleshooting and support" },
  { name: "Design Thinking: Innovative approach to problem-solving and user-centered design" },
];

const HomePage: React.FC = () => {
  return (
    <main className="p-4">
      <h2 className="text-2xl font-semibold">Education</h2>
      <p className="mb-4">{education.degree} from {education.institution}, {education.date}</p>

      <h2 className="text-2xl font-semibold">Certifications</h2>
      <ul className="list-disc list-inside">
        {certifications.map((cert, index) => (
          <li key={index}>{cert.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
