import NavBar from "./sections/navBar"
import Hero from "./sections/home/hero.jsx"
import Services from './sections/home/services.jsx';
import WhyUs from './sections/home/whyUs.jsx';
import Projects from './sections/home/projects.jsx';
import Blogs from './sections/home/blog.jsx';
import Footer from './sections/footer.jsx';


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