import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Img } from 'react-image';

interface BlogPost {
  id: number;
  title: string;
  thumbnail: string;
  content: string;
  date: string;
}

function Content() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/blog/getAllPosts');
        setBlogPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="mx-2 xs:mx-7 sm:mx-10 md:mx-14 lg:mx-24 xl:mx-40 flex flex-wrap gap-1 section-gap justify-evenly">
      <h2 className="text-3xl font-semibold mb-4"></h2>
      {loading ? (
        <div className="text-center mt-8">Loading...</div>
      ) : (
        blogPosts.length === 0 ? (
          // Render this message when there are no blog posts
          <div className="text-center mt-8 text-gray-500">No blog posts found.</div>
        ) : (
          <div className="gmt-10 w-full xs:w-full sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 rounded-md bg-slate-900 cursor-pointer">
            {blogPosts.map((post) => (
              <div key={post.id}>
                <Img
                  className="w-full overflow-hidden"
                  src={post.thumbnail}
                  alt={post.title}
                />
                <h3 className="py-3 text-h3 text-white">{post.title}</h3>
                <p>{post.content.slice(0, 100)}...</p>
                <button
                  onClick={() => openPost(post)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        )
      )}
      {selectedPost && (
        <div className="bg-white p-4 shadow-md">
          <h2 className="py-3 text-h3 text-white">{selectedPost.title}</h2>
          <p className="text-slate-400">{selectedPost.date}</p>
          <Img
            className="w-full overflow-hidden"
            src={selectedPost.thumbnail}
            alt={selectedPost.title}
          />
          <p>{selectedPost.content}</p>
          <button
            onClick={closePost}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover-bg-blue-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};


export default Content