import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <SecondPage />
      <Footer />
    </div>
  );
};

export default App;
