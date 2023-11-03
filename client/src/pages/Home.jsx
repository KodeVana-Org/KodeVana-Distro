import NavBar from "../components/mainNav"
import Hero from "../components/page_home/hero.jsx"
import Services from '../components/page_home/services.jsx';
import WhyUs from '../components/page_home/whyUs.jsx';
import Projects from '../components/page_home/projects.jsx';
import Blogs from '../components/page_home/blog.jsx';
import Footer from '../components/footer.jsx';

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Home