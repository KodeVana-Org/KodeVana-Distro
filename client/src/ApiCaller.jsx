import { useState, useEffect } from 'react';
import axios from 'axios';

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




