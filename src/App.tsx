import Header from './components/Header';
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <HomePage />
        <SecondPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
