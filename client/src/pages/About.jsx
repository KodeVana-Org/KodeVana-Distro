import NavBar from "../components/mainNav"
import Heading from "../components/page_about/heading.jsx";
import Content from "../components/page_about/content.jsx";
import Footer from '../components/footer';

function About() {
  return (
    <div>
      <NavBar />
      <Heading />
      <Content />
      <Footer />
    </div>
  )
}

export default About