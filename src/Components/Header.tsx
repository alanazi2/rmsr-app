import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Rashid Alanazi</h1>
        <p className="text-xl mb-4">Full Stack Developer | Programmer</p>
        <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600">Contact Me</a>
      </div>
    </header>
  );
};

export default Header;
