import NavBar from "../components/mainNav"
import Heading from "../components/page_about/heading.jsx";
import Content from "../components/page_about/content.jsx";
import Founders from "../components/page_about/founders.jsx";
import Footer from '../components/footer';

function About() {
  return (
    <div>
      <NavBar />
      <Heading />
      <Content />
      <Founders />
      <Footer />
    </div>
  )
}

export default About