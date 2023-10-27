import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Blog from './components/Blogs';
import Project from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
// import ViewBlog from './components/ViewBlog';
// import ViewProject from './components/ViewProject';
import NotFound from './components/Notfound';


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
