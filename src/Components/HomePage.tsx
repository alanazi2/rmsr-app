import React from 'react';

const HomePage: React.FC = () => {
  const certifications = [
    "Bootstrap: Responsive front-end development framework",
    "CSS: Cascading Style Sheets for web design",
    "Document Object Model (DOM): JavaScript API for HTML/XML documents",
    "JavaScript: Front-end and back-end development",
    "MongoDB: NoSQL database management",
    "Node.js: Server-side JavaScript environment",
  ];

  return (
    <main className="p-8 bg-gray-100 text-gray-900">
      <h2 className="text-4xl font-bold mb-4">Certifications</h2>
      <ul className="list-disc list-inside">
        {certifications.map((cert, index) => (
          <li key={index} className="text-lg mb-2">{cert}</li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
