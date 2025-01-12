import Header from './Components/Header';
import HomePage from './Components/HomePage';
import SecondPage from './Components/SecondPage';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <div className="flex-grow">
        <HomePage />
        <SecondPage />
      </div>
      <Footer />
    </div>
  );
};

export default App;