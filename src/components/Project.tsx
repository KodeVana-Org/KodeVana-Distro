import NavBar from "./sections/MainNav"
import Footer from './sections/footer';
import ProjectNav from "./sections/project/projectNav";
import LatestProject from "./sections/project/latestProject";
import Projects from "./sections/project/content";

function Project() {
  return (
    <div>
      < NavBar />
      <LatestProject />
      <ProjectNav />
      <Projects />
      <Footer />
    </div>
  )
}

export default Project