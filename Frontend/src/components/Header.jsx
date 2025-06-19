import React from "react";
import { Link } from "react-router-dom"; // Optional if you're using React Router

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600">TestBoard</h1>
        <nav className="space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Home
          </Link>
          <Link
            to="/signin"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
