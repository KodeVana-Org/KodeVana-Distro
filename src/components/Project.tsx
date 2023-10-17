import NavBar from "./sections/MainNav"
import Footer from './sections/footer';
import ProjectNav from "./sections/project/projectNav";
import LatestProject from "./sections/project/crispy";
import Projects from "./sections/project/content";

function Project() {
  return (
    <div>
      < NavBar />
      <ProjectNav />
      <LatestProject />
      <Projects />
      <Footer />
    </div>
  )
}

export default Project