import NavBar from "../components/mainNav"
import Heading from "../components/page_about/heading.jsx";
import Quote from "../components/page_about/animateQuote.jsx";
import Circle from "../components/page_about/spinningCircle.jsx";
import Intro from "../components/page_about/intro.jsx";
import Founder from "../components/page_about/founders.jsx";
import Footer from '../components/footer';

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