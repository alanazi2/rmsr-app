import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/rms1.jpg')" }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Rashid Alanazi</h1>
        <p className="text-xl mb-4">Full Stack Developer | Programmer</p>
        <div className="flex justify-center space-x-4">
          <a
            href="#about"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-900"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
