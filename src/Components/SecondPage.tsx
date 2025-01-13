import React from 'react';
import { motion } from 'framer-motion';

const SecondPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-800 text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center p-8"
      >
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-lg mb-8">
          Here are some of the projects I have worked on recently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Project 1", description: "Description of project 1" },
            { title: "Project 2", description: "Description of project 2" },
            { title: "Project 3", description: "Description of project 3" },
          ].map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-700 text-left shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm text-zinc-400">{project.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SecondPage;
