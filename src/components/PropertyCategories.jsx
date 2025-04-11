import { Link } from "react-router-dom";
import {
  HomeIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  MapIcon,
  HomeModernIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { propertyCategories } from "../constants/data";

const iconComponents = {
  HomeIcon,
  HomeModernIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  BuildingLibraryIcon,
  MapIcon,
};

const PropertyCategories = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Properties
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover your perfect home across our diverse categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyCategories.map((category) => {
            const IconComponent = iconComponents[category.icon];

            return (
              <Link
                to={`/properties?category=${category.slug}`}
                key={category.slug}
                className="group relative block h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/30"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <span className="ml-3 px-2 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
                      {category.count} listings
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>

                  {/* Hover Button */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="inline-flex items-center px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-md">
                      Browse Properties
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/properties"
            className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
          >
            View All Categories
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
