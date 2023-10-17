import NavBar from "./sections/MainNav"
import Footer from './sections/footer';
import Heading from "./sections/about/heading";
import Quote from "./sections/about/animateQuote";
import Intro from "./sections/about/intro";
import Circle from "./sections/about/spinningCircle";

function About() {
  return (
    <div>
      <NavBar />
      <Heading />
      <Quote />
      <Circle />
      <Intro />
      <Footer />
    </div>
  )
}

export default About