import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../styles/loadingAnimation.css'

function Content() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          "http://kodevana.com:8002/admin/blog-all"
        );
        setBlogPosts(response.data);
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Parse HTML to plain text
  function convertHtmlToPlainText(html, maxLength) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Extract text content from the parsed HTML
    const text = doc.body.textContent;

    // Limit the text length
    if (maxLength && text.length > maxLength) {
      return text.slice(0, maxLength);
    }

    return text;
  }

  return (
    <div className="mt-10 mx-5 xs:mx-7 sm:mx-5 md:mx-0 lg:mx-7 xl:mx-16 section-gap">
      {loading ? (
        <div className="loading-container">
          <div className="loading-dots">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-7 text-center justify-center">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <div
                key={post.id}
                className="p-7 w-full md:w-1/3 xl:w-1/4 rounded-md cursor-pointer bg-slate-200 overflow-hidden"
              >
                <h3 className="text-h3 mb-2">{post.title}</h3>
                <img
                  className="w-full overflow-hidden"
                  src={post.thumbnail}
                  alt={post.title}
                />
                <p className="text-para mb-5">
                  {convertHtmlToPlainText(post.content, 100)}<span className="text-para"> . . .</span>
                </p>
                <Link
                  to={`/blog/${post._id}`}
                  className="mt-4 bg-yellow-400 text-black hover:text-white px-4 py-2 rounded-full hover:bg-slate-500"
                >
                  Read More
                </Link>
              </div>
            ))
          ) : (
            <div className="text-h3">Stay tuned for our exciting blogs coming up soon!</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Content;
