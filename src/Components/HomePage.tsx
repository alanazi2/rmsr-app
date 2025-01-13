import React from 'react';

const HomePage: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <img
          src="/imia.jpg"
          alt="University Logo"
          className="w-32 h-32 mx-auto mb-4"
        />
        <p className="text-lg">
          Programming Technology from Imam Muhammad Bin Saud Islamic University - June 2024
        </p>
      </div>
    </section>
  );
};

export default HomePage;
