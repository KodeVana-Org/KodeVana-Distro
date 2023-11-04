import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, } from 'react-router-dom';
import Bg_img from '../assets/ViewBlog_bg.png'
import '../styles/loadingAnimation.css'

function ViewBlog() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`http://kodevana.com:8002/admin/blog/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost();
  }, [id]);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className=''>
      {post ? (
        <div className="m-3 xs:m-5 sm:m-5 md:m-7 lg:m-10 xl:m-16">
          <h2 className="text-h3 font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-2 text-para">{post.date}</p>
          <div className='text-para' dangerouslySetInnerHTML={{ __html: post.content }} />
          <button
            onClick={goBack}
            className="mt-4 bg-yellow-400 text-black hover:text-white hover:bg-slate-500 px-4 py-2 rounded-full hover-bg-blue-600"
          >
            Go Back
          </button>
        </div>
      ) : (
        <div className="loading-container">
          <div className="loading-dots">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
      )}
      <div>
        <img className='absolute top-0 h-fit w-full -z-50' src={Bg_img} alt="/" />
      </div>
    </div>
  );
}

export default ViewBlog;
