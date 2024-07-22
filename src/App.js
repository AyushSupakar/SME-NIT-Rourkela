import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import {  Route, Routes } from "react-router-dom"
import Team from './pages/Team/Team';
import Gallary from './pages/Gallary/Gallary';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="our-team" element={ <Team/> } />
        <Route path="gallary" element={ <Gallary/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
