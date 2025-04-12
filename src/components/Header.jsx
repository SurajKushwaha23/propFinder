import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { desktopNavigation, topNavigation, header } from "../constants/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login");

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Header with Contact Info */}
      <div className="bg-indigo-700 text-white">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-2 md:space-x-8 lg:space-x-8  mb-2 md:mb-0">
            <a
              href="tel:+18005551234"
              className="flex items-center hover:text-indigo-200 transition"
            >
              <PhoneIcon className="h-4 w-4 mr-1" />
              <span>{topNavigation.PHONENUMBER}</span>
            </a>
            <a
              href={`mailto:${topNavigation.EMAIL}`}
              className="flex items-center hover:text-indigo-200 transition"
            >
              <EnvelopeIcon className="h-4 w-4 mr-1" />
              <span>{topNavigation.EMAIL}</span>
            </a>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="hover:text-indigo-200 transition">
              {topNavigation.FAQ}
            </a>
            <a href="#" className="hover:text-indigo-200 transition">
              {topNavigation.SUPPORT}
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-extrabold text-indigo-600">
            {header.LOGO}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {desktopNavigation.map((item) => {
            return (
              <Link
                key={item.id}
                to={item.link}
                className="text-gray-700 font-semibold hover:text-indigo-600 transition"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => {
              setAuthType("login");
              setIsAuthModalOpen(true);
            }}
            className="px-4 py-2 font-semibold cursor-pointer text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
          >
            {header.LOGIN}
          </button>
          <button
            onClick={() => {
              setAuthType("register");
              setIsAuthModalOpen(true);
            }}
            className="px-4 py-2 font-semibold bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg cursor-pointer transition"
          >
            {header.REGISTER}
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
            {desktopNavigation.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className="text-gray-700 hover:text-indigo-600 transition py-2"
                >
                  {item.name}
                </Link>
              );
            })}

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
