import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Product from './components/Product';
import WhatsappGallery from './components/WhatsappGallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <Header />
      <Contact/>
      <About />
      <Gallery/>
      <Services/>
      <Product/>
      <WhatsappGallery/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </>
  );
}

