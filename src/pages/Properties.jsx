import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import SearchFilters from "../components/SearchFilters";
import PropertyCardHorizontal from "../components/PropertyCardHorizontal";

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
  {
    id: 7,
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
  {
    id: 8,
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
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(6);

  // Get current properties
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const handleSearch = (filters) => {
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
    setCurrentPage(1);
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
              {currentProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {currentProperties.map((property) => (
                <PropertyCardHorizontal key={property.id} property={property} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {properties.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-1">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md border ${
                    currentPage === 1
                      ? "border-gray-200 text-gray-400 cursor-not-allowed"
                      : "border-gray-300 text-gray-500 hover:bg-gray-100"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <button
                      key={number}
                      onClick={() => setCurrentPage(number)}
                      className={`px-4 py-2 rounded-md border ${
                        currentPage === number
                          ? "bg-indigo-600 border-indigo-600 text-white"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {number}
                    </button>
                  )
                )}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md border ${
                    currentPage === totalPages
                      ? "border-gray-200 text-gray-400 cursor-not-allowed"
                      : "border-gray-300 text-gray-500 hover:bg-gray-100"
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
