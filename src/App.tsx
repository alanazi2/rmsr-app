import Header from './Components/Header';
import HomePage from './Components/HomePage';

import Footer from './Components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;