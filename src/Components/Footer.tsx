import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center">
      <p className="mb-4">© 2025 Rashid Alanazi. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400">GitHub</a>
        <a href="mailto:alanazirashid4@gmail.com" className="text-red-400">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
