import NavBar from "./sections/MainNav"
import Footer from './sections/footer';
import FreshInt from './sections/blog/freshInk';
import FollowUp from './sections/blog/followUp';
import Blogs from './sections/blog/content';

function Blog() {
  return (
    <div>
      <NavBar />
      <FreshInt />
      <FollowUp />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Blog