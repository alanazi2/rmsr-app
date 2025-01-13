import React from 'react';

const SecondPage: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Training</h2>
        <img
          src="/sss.png"
          alt="Saudi Federation for Cybersecurity, Programming and Drones"
          className="w-40 h-40 mx-auto mb-4"
        />
        <p className="text-lg">
          Software Engineer at the Saudi Federation for Cybersecurity, Programming, and Drones
        </p>
      </div>
    </section>
  );
};

export default SecondPage;
