import Header from './Components/Header';
import HomePage from './Components/HomePage';
import SecondPage from './Components/SecondPage';
import Footer from './Components/Footer';

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
