import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/header/MainNav'
import Hero from './components/sections/hero';
import Services from './components/sections/Services';
import WhyUs from './components/sections/whyUs';
import Projects from './components/sections/projects';
import Blogs from './components/sections/blogs';
import Footer from './components/sections/footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      <Blogs />
      <Footer />
    </Router>
  );
}

export default App;
