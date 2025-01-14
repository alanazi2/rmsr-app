import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <img
          src="/rms1.jpg"
          alt="Rashid Alanazi"
          className="w-40 h-40 rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold">Rashid Alanazii</h1>
        <p className="text-lg">Programmer | Software Engineer | Web Developer</p>
      </div>
    </header>
  );
};

export default Header;
