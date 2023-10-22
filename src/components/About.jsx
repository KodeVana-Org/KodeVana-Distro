import NavBar from "./sections/navBar"
import Heading from "./sections/about/heading.jsx";
import Quote from "./sections/about/animateQuote.jsx";
import Circle from "./sections/about/spinningCircle.jsx";
import Intro from "./sections/about/intro.jsx";
import Founder from "./sections/about/founders.jsx";
import Footer from './sections/footer';

function About() {
  return (
    <div>
      <NavBar />
      <Heading />
      <Quote />
      <Circle />
      <Intro />
      <Founder />
      <Footer />
    </div>
  )
}

export default About