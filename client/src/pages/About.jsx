import NavBar from "../components/mainNav"
import Heading from "../components/page_about/heading.jsx";
import Quote from "../components/page_about/animateQuote.jsx";
import Footer from '../components/footer';

function About() {
  return (
    <div>
      <NavBar />
      <Heading />
      <Quote />
      <Footer />
    </div>
  )
}

export default About