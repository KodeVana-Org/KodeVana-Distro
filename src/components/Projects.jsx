import NavBar from "./sections/navBar"
import LatestProject from "./sections/project/latestProject.jsx";
import ProjectNav from "./sections/project/projectNav.jsx";
import Projects from "./sections/project/content.jsx";
import Footer from './sections/footer';

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