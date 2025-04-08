import SearchFilters from "./SearchFilters";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Modern house"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Find Your Dream Home Today
          </h1>
          <p className="text-xl mb-8">
            Discover the perfect property that matches your lifestyle and budget
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
              Browse Properties
            </button>
            <button className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium transition">
              List Your Property
            </button>
          </div>
        </div>
      </div>

      {/* Search Filters */}
      <div className="relative z-10  px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SearchFilters onSearch={(filters) => console.log(filters)} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
