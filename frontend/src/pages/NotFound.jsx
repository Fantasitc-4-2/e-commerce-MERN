import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-center px-6">
      <div className="text-sm text-gray-500 mt-8 mb-20 text-left max-w-6xl mx-auto w-full">
        <Link to="/" className="text-gray-600 hover:text-red-500">
          Home
        </Link>{" "}
        / <span className="text-gray-400">404 Error</span>
      </div>

      {/* 404 Content */}
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-[80px] font-semibold text-black mb-4">
          404 Not Found
        </h1>
        <p className="text-gray-500 mb-8">
          Your visited page not found. You may go home page.
        </p>

        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
}
