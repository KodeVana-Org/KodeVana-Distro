// import AboutHero from "../components/HomeAbout";
import AboutTeam from "../components/AboutTeam";
import AboutProcess from "../components/AboutProcess";

function About() {
  return (
    <div className="dark:text-white dark:bg-black">
      <AboutTeam />
      <AboutProcess />
    </div>
  );
}

export default About;
