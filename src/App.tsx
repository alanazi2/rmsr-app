import { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <nav className="bg-zinc-800 text-white p-4 flex justify-center space-x-4">
        <button
          onClick={() => setCurrentPage('home')}
          className={`px-4 py-2 rounded ${
            currentPage === 'home' ? 'bg-blue-500' : 'bg-zinc-700'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage('second')}
          className={`px-4 py-2 rounded ${
            currentPage === 'second' ? 'bg-blue-500' : 'bg-zinc-700'
          }`}
        >
          Projects
        </button>
      </nav>

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'second' && <SecondPage />}

      <Footer />
    </div>
  );
}

export default App;
