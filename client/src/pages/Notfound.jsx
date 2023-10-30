import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
    <h1 className="text-4xl font-extrabold text-gray-900">404 - Page Not Found</h1>
    <p className="text-gray-600">The page you are looking for does not exist.</p>
    <Link to="/" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
      Refresh
    </Link>
  </div>
  );
};

export default NotFound;