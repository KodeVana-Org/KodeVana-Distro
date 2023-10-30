import NavBar from "../components/mainNav"
import LatestProject from "../components/page_project/latestProject.jsx";
import ProjectNav from "../components/page_project/projectNav.jsx";
import Projects from "../components/page_project/content.jsx";
import Footer from '../components/footer';

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