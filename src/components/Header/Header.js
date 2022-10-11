import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="p-1 bg-gray-700 text-gray-100">
      <div className="container flex justify-between h-16 mx-auto px-6">
        <Link className="flex items-center p-2">
          <h1 className="text-rose-700 font-bold text-2xl">quickQuiz</h1>
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link className="flex items-center px-4 -mb-1" to="/home">
              Home
            </Link>
          </li>
          <li className="flex">
            <Link className="flex items-center px-4 -mb-1" to="/statistics">
              Statistics
            </Link>
          </li>
          <li className="flex">
            <Link className="flex items-center px-4 -mb-1" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
