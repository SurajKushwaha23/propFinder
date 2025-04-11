import { useState } from "react";

const SearchFilters = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    priceRange: [0, 1000000],
    bedrooms: "",
    bathrooms: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setFilters((prev) => ({ ...prev, priceRange: newPriceRange }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Button");
    onSearch(filters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md pb-4">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Location */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="City, State, or ZIP"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-600"
              value={filters.location}
              onChange={handleChange}
            />
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              name="type"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-600"
              value={filters.type}
              onChange={handleChange}
            >
              <option value="">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bedrooms
            </label>
            <select
              name="bedrooms"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-600"
              value={filters.bedrooms}
              onChange={handleChange}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Bathrooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bathrooms
            </label>
            <select
              name="bathrooms"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-600"
              value={filters.bathrooms}
              onChange={handleChange}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition"
            >
              Search
            </button>
          </div>
        </div>

        {/* Price Range Slider */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range: ${filters.priceRange[0].toLocaleString()} - $
            {filters.priceRange[1].toLocaleString()}
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="1000000"
              step="10000"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="w-full h-2 bg-indigo-300 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="1000000"
              step="10000"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="w-full h-2 bg-indigo-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;
