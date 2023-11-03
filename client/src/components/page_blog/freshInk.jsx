import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, } from 'react-router-dom';



function IndividualBlogPost() {
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
    window.history.back(); // Go back to the previous page in the browser's history
  };

  

  return (
    <div className="p-4">
      {post ? (
        <div>
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-2">{post.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        
          {/* <div
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
          />
          */}
          <button
            onClick={goBack}
            className="mt-4 bg-blue-500 text-slate-50 px-4 py-2 rounded-full hover-bg-blue-600"
          >
            Go Back
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default IndividualBlogPost;
