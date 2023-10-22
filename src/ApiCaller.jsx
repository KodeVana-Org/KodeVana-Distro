import { useState, useEffect } from 'react';
import axios from 'axios';

// Recent Blog
export const RecentBlog = () => {
  const [recentBlog, setRecentBlog] = useState([]);
  const callGetRecentBlog = () => {
    axios.get('http://localhost:8002/api/getRecentBlog')
      .then((response) => {
        setRecentBlog(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving recent blog:', error);
      });
  };
  useEffect(() => {
    callGetRecentBlog();
  }, []);
  return recentBlog;
};

// All Blogs
export const AllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const callGetAllBlogs = () => {
    axios.get('http://localhost:8002/api/getAllBlogs')
      .then((response) => {
        setAllBlogs(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving all blogs:', error);
      });
  };
  useEffect(() => {
    callGetAllBlogs();
  }, []);
  return allBlogs;
};

// Recent Project
export const RecentProject = () => {
  const [recentProject, setRecentProject] = useState([]);
  const callGetRecentProject = () => {
    axios.get('http://localhost:8002/api/getRecentProject')
      .then((response) => {
        setRecentProject(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving recent Project:', error);
      });
  };
  useEffect(() => {
    callGetRecentProject();
  }, []);
  return recentProject;
};

// Recent ThreeProjects
export const RecentThreeProjects = () => {
  const [recentThreeProjects, setRecentThreeProjects] = useState([]);
  const callGetRecentThreeProjects = () => {
    axios.get('http://localhost:8002/api/getRecentThreeProjects')
      .then((response) => {
        setRecentThreeProjects(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving recent ThreeProjects:', error);
      });
  };
  useEffect(() => {
    callGetRecentThreeProjects();
  }, []);
  return recentThreeProjects;
};

// All Projects
export const AllProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const callGetAllProjects = () => {
    axios.get('http://localhost:8002/api/getAllProjects')
      .then((response) => {
        setAllProjects(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving all Projects:', error);
      });
  };
  useEffect(() => {
    callGetAllProjects();
  }, []);
  return allProjects;
};

// All Founders
export const AllFounders = () => {
  const [allFounders, setAllFounders] = useState([]);
  const callGetAllFounders = () => {
    axios.get('http://localhost:8002/api/getAllFounders')
      .then((response) => {
        setAllFounders(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving all Founders:', error);
      });
  };
  useEffect(() => {
    callGetAllFounders();
  }, []);
  return allFounders;
};

// Add Visitor
// export const AddVisitor = () => {
//   // Generate a timestamp
//   const timestamp = new Date().toISOString();
//     axios.post('http://localhost:8002/api/addVisitor', { timestamp, count: 1 })
//     .then((response) => {
//       console.log("User added succesfully");
//     })
//     .catch((error) => {
//       console.error('Error adding new visitor:', error);
//     });
//   };
//   useEffect(() => {
//     callGetAllFounders();
//   }, []);
// };




