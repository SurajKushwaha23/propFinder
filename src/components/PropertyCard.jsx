import { Link } from "react-router-dom";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
            <HeartIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        {property.featured && (
          <div className="absolute top-3 left-3 bg-indigo-600 text-white px-2 py-1 rounded text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">
            {property.title}
          </h3>
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">
              {property.rating}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-1">{property.address}</p>

        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="text-indigo-600 font-bold">${property.price}</span>
            {property.type === "rent" && (
              <span className="text-gray-500 text-sm"> / month</span>
            )}
          </div>
          <div className="flex space-x-2">
            <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
              {property.bedrooms} Beds
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
              {property.bathrooms} Baths
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
              {property.area} sqft
            </span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link
            to={`/property/${property.id}`}
            className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
