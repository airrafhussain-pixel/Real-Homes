import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-md text-center">
        <img
          src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
          alt="404 Not Found"
          className="mx-auto mb-6"
        />
        <Link
          to="/"
          className="inline-block bg-[#1cb3ff] text-white font-bold text-2xl sm:text-3xl px-6 py-3 rounded hover:bg-blue-500 transition-colors"
        >
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
