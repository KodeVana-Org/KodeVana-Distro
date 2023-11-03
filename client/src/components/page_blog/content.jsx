import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);
  console.log("blogPosts:", blogPosts);

  return (
    <div className="mt-10 mx-20 section-gap">

      <div className="flex flex-wrap gap-1 text-center justify-evenly">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <div
              key={post.id}
              className="mt-10 w-1/4 rounded-md cursor-pointer"
            >
              <h3 className="text-h3 mb-2">{post.title}</h3>
              <Img
                className="w-full overflow-hidden"
                src={post.thumbnail}
                alt={post.title}
              />
              <p className="text-para mb-5">{convertHtmlToPlainText(post.content, 100)}...</p>
              <Link to={`/blog/${post._id}`} className="mt-4 bg-yellow-400 text-slate-50 px-4 py-2 rounded-full hover:bg-slate-500">
                Read More
              </Link>
            </div>
          ))
        ) : (
          <div className="text-h3">Stay tune for our exciting blogs coming up soon!</div>
        )}
      </div>

    </div>
  );
}
function convertHtmlToPlainText(html, maxLength) {
  // Create a DOMParser to parse the HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Extract text content from the parsed HTML
  const text = doc.body.textContent;

  // Limit the text length to a maximum length (e.g., maxLength)
  if (maxLength && text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }

  return text;
}
export default Content;
