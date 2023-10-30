import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blogs';
import Project from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
// import ViewBlog from './pages/ViewBlog';
// import ViewProject from './pages/ViewProject';
import NotFound from './pages/Notfound';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/viewBlog" element={<ViewBlog />} /> */}
          {/* <Route path="/viewProject" element={<ViewProject />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
