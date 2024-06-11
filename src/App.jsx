import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HappyClients from './components/HappyClients/HappyClients';
import Consultation from './components/Consultation/Consultation';
import Gallery from './components/Gallery/Gallery'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      <About/>
      <Gallery/>
      <Consultation/>
      <HappyClients/>
      <Footer/>
    </div>
  );
}

export default App;
