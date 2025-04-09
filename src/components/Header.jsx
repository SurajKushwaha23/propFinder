import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login");

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-indigo-600">PropFinder</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Home
          </Link>
          <Link
            to="/properties"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Properties
          </Link>
          <Link
            to="/agents"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Agents
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => {
              setAuthType("login");
              setIsAuthModalOpen(true);
            }}
            className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
          >
            Login
          </button>
          <button
            onClick={() => {
              setAuthType("register");
              setIsAuthModalOpen(true);
            }}
            className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition"
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 transition py-2"
            >
              Home
            </Link>
            <Link
              to="/properties"
              className="text-gray-700 hover:text-indigo-600 transition py-2"
            >
              Properties
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-indigo-600 transition py-2"
            >
              Agents
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-indigo-600 transition py-2"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-indigo-600 transition py-2"
            >
              Contact
            </Link>
            <div className="flex space-x-3 pt-2">
              <button
                onClick={() => {
                  setAuthType("login");
                  setIsAuthModalOpen(true);
                }}
                className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition flex-1"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setAuthType("register");
                  setIsAuthModalOpen(true);
                }}
                className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition flex-1"
              >
                Register
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <AuthModal
          type={authType}
          onClose={() => setIsAuthModalOpen(false)}
          onSwitch={() =>
            setAuthType(authType === "login" ? "register" : "login")
          }
        />
      )}
    </header>
  );
};

export default Header;
