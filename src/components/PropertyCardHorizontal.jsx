import { Link } from "react-router-dom";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import { MapPinIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";

const PropertyCardHorizontal = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-2/5 relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 md:64 object-cover"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {property.featured && (
              <span className="bg-indigo-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                Featured
              </span>
            )}
            <span className="bg-white text-indigo-600 text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm">
              {property.type === "rent" ? "For Rent" : "For Sale"}
            </span>
          </div>

          {/* Favorite Button */}
          <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full backdrop-blur-sm hover:bg-white transition">
            <HeartIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
          </button>
        </div>

        {/* Content Section */}
        <div className="md:w-3/5 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                <Link to={`/property/${property.id}`}>{property.title}</Link>
              </h3>
              <div className="flex items-center mt-1 text-gray-600">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span className="text-sm">{property.address}</span>
              </div>
            </div>

            <div className="flex items-center bg-indigo-50 px-2 py-1 rounded">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <span className="ml-1 text-sm font-medium text-gray-900">
                {property.rating}
              </span>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="flex items-center text-sm text-gray-600">
              <ArrowsPointingOutIcon className="h-4 w-4 mr-1" />
              {property.area} sqft
            </span>
            <span className="flex items-center text-sm text-gray-600">
              <svg
                className="h-4 w-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              {property.bedrooms} Beds
            </span>
            <span className="flex items-center text-sm text-gray-600">
              <svg
                className="h-4 w-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {property.bathrooms} Baths
            </span>
          </div>

          {/* Description */}
          <p className="mt-3 text-gray-600 line-clamp-2">
            Beautiful {property.type === "rent" ? "rental" : "property"} located
            in the heart of the city.
            {property.type === "rent"
              ? " Available immediately."
              : " Ready for quick possession."}
          </p>

          {/* Price & CTA */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
            <div>
              <span className="text-xl font-bold text-indigo-600">
                ${property.price.toLocaleString()}
              </span>
              {property.type === "rent" && (
                <span className="text-gray-500 text-sm"> / month</span>
              )}
            </div>
            <Link
              to={`/property/${property.id}`}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md transition-colors"
            >
              View Details
              <svg
                className="ml-1 h-4 w-4"
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardHorizontal;
