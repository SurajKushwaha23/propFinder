import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "./SocialIcons"; // You'll need to create these or use another icon library

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Company */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold bg-clip-text text-white">
                PropFinder
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              The best place to find your dream property. We connect buyers with
              sellers and renters with landlords across the country.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-gray-400 hover:text-white transition"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/agents"
                  className="text-gray-400 hover:text-white transition"
                >
                  Agents
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Property Lane, Suite 400
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+18005551234"
                  className="text-gray-400 hover:text-white transition"
                >
                  +1 (800) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@propertyfinder.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  info@propertyfinder.com
                </a>
              </li>
              <li className="flex items-center">
                <ClockIcon className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Mon-Fri: 9am-6pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PropFinder. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
