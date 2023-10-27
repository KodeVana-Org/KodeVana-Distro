import NavBar from "./sections/navBar"
import RecentBlog from './sections/blog/freshInk.jsx';
import FollowUp from './sections/blog/followUp.jsx';
import Blogs from './sections/blog/content.jsx';
import Footer from './sections/footer';

function Blog() {
  return (
    <div>
      <NavBar />
      <RecentBlog />
      <FollowUp />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Blog