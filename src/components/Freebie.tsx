import NavBar from "./header/MainNav"
import Footer from './sections/footer';
import Ebook from "./sections/freebie/ebook";

function Freebie() {
  return (
    <div>
      <NavBar />
      <Ebook />
      Next Section
      <Footer />
    </div>
  )
}

export default Freebie