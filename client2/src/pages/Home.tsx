import HomeHero from "../components/HomeHero";
import HomeWorks from "../components/HomeWorks";
import HomeServices from "../components/HomeServices";
import HomeAbout from "../components/HomeAbout";
import HomeContact from "../components/HomeContact";

function Home() {
  return (
    <div className="font-Jost dark:text-white dark:bg-black">
      <HomeHero />
      <HomeWorks />
      <HomeServices />
      <HomeAbout />
      <HomeContact />
    </div>
  );
}

export default Home;
