import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HappyClients from './components/HappyClients/HappyClients';
import Consultation from './components/Consultation/Consultation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      <About/>
      <Consultation/>
      <HappyClients/>
      <Footer/>
    </div>
  );
}

export default App;
