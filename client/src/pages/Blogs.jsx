import NavBar from "../components/mainNav"
// import RecentBlog from '../components/page_blog/freshInk.jsx';
import FollowUp from '../components/page_blog/followUp.jsx';
import Blogs from '../components/page_blog/content.jsx';
import Footer from '../components/footer';

function Blog() {
  return (
    <div>
      <NavBar />
      {/* <RecentBlog /> */}
      <FollowUp />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Blog