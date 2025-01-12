import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-4xl font-bold">Rashid Alanazi</h1>
      <p>Riyadh, Saudi Arabia</p>
      <p>Email: <a href="mailto:alanazirashid4@gmail.com" className="text-blue-400">alanazirashid4@gmail.com</a></p>
      <p>Phone: 0503139626</p>
    </header>
  );
};

export default Header;
