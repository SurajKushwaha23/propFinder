import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import SearchFilters from "../components/SearchFilters";

const allProperties = [
  {
    id: 1,
    title: "Modern Apartment in Downtown",
    address: "123 Main St, New York, NY",
    price: 2500,
    type: "rent",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Villa with Ocean View",
    address: "456 Beach Blvd, Miami, FL",
    price: 1200000,
    type: "sale",
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3200,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Cozy Studio in Arts District",
    address: "789 Art Ave, Los Angeles, CA",
    price: 1800,
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Spacious Family Home",
    address: "101 Suburb Ln, Austin, TX",
    price: 450000,
    type: "sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Penthouse with City Views",
    address: "202 Skyline Dr, Chicago, IL",
    price: 3500,
    type: "rent",
    bedrooms: 2,
    bathrooms: 2.5,
    area: 1800,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    featured: true,
  },
  {
    id: 6,
    title: "Charming Cottage",
    address: "303 Country Rd, Portland, OR",
    price: 325000,
    type: "sale",
    bedrooms: 2,
    bathrooms: 1,
    area: 1500,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    featured: false,
  },
];

const Properties = () => {
  const [properties, setProperties] = useState(allProperties);
  const [viewMode, setViewMode] = useState("grid");

  const handleSearch = (filters) => {
    // In a real app, this would be an API call with the filters
    const filtered = allProperties.filter((property) => {
      // Filter by location
      if (
        filters.location &&
        !property.address.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }
      // Filter by type
      if (filters.type && property.type !== filters.type) {
        return false;
      }
      // Filter by price
      if (
        property.price < filters.priceRange[0] ||
        property.price > filters.priceRange[1]
      ) {
        return false;
      }
      // Filter by bedrooms
      if (filters.bedrooms && property.bedrooms < parseInt(filters.bedrooms)) {
        return false;
      }
      // Filter by bathrooms
      if (
        filters.bathrooms &&
        property.bathrooms < parseInt(filters.bathrooms)
      ) {
        return false;
      }
      return true;
    });
    setProperties(filtered);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">
            Browse Properties
          </h1>
          <p className="text-xl text-indigo-100">
            We're here to help you with all your property needs. Reach out and
            our team will get back to you promptly.
          </p>
        </div>
      </div>
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Search Filters */}
          <div className="mb-8">
            <SearchFilters onSearch={handleSearch} />
          </div>

          {/* View Options */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-gray-600">
                {properties.length} properties found
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md ${
                  viewMode === "grid"
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md ${
                  viewMode === "list"
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Properties List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col md:flex-row"
                >
                  <div className="md:w-1/3">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {property.title}
                      </h3>
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-600">
                          {property.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mt-1">
                      {property.address}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <span className="text-indigo-600 font-bold">
                          ${property.price.toLocaleString()}
                        </span>
                        {property.type === "rent" && (
                          <span className="text-gray-500 text-sm">
                            {" "}
                            / month
                          </span>
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
                      <a
                        href={`/property/${property.id}`}
                        className="inline-block text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {properties.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="px-4 py-2 rounded-md bg-indigo-600 text-white">
                  1
                </button>
                <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">
                  2
                </button>
                <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">
                  3
                </button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">
                  8
                </button>
                <button className="p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          )}

          {/* No results */}
          {properties.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                No properties found
              </h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => setProperties(allProperties)}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Properties;
