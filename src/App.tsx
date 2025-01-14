import Header from './Components/Header';
import HomePage from './Components/HomePage';
import SecondPage from './Components/SecondPage';
import Footer from './Components/Footer';

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
