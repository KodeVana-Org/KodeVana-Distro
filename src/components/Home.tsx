import NavBar from "./header/MainNav"
import Hero from "./sections/home/hero"
import Services from './sections/home/Services';
import WhyUs from './sections/home/whyUs';
import Projects from './sections/home/projects';
import Blogs from './sections/home/blogs';
import Footer from './sections/footer';


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