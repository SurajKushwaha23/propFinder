import { useState } from "react";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  StarIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Agents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      experience: "12 years",
      specialty: "Luxury Homes",
      location: "New York",
      rating: 4.9,
      dealsClosed: 245,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      featured: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Commercial Property Specialist",
      experience: "8 years",
      specialty: "Commercial Properties",
      location: "San Francisco",
      rating: 4.8,
      dealsClosed: 182,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Residential Agent",
      experience: "6 years",
      specialty: "First-Time Buyers",
      location: "Miami",
      rating: 4.7,
      dealsClosed: 134,
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      featured: true,
    },
    {
      id: 4,
      name: "David Wilson",
      title: "Investment Consultant",
      experience: "10 years",
      specialty: "Rental Properties",
      location: "Chicago",
      rating: 4.8,
      dealsClosed: 210,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 5,
      name: "Jessica Lee",
      title: "Neighborhood Expert",
      experience: "5 years",
      specialty: "Condos & Townhouses",
      location: "Boston",
      rating: 4.6,
      dealsClosed: 98,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 6,
      name: "Robert Taylor",
      title: "Land Specialist",
      experience: "15 years",
      specialty: "Land & Development",
      location: "Austin",
      rating: 4.9,
      dealsClosed: 176,
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
  ];

  const locations = [
    "All",
    "New York",
    "San Francisco",
    "Miami",
    "Chicago",
    "Boston",
    "Austin",
  ];
  const specialties = [
    "All",
    "Luxury Homes",
    "Commercial Properties",
    "First-Time Buyers",
    "Rental Properties",
    "Condos & Townhouses",
    "Land & Development",
  ];

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.specialty.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "all" ||
      agent.location === activeFilter ||
      agent.specialty === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-12 bg-gray-50">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Expert Agents
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with our professional real estate agents who will guide you
            through every step of your property journey.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 bg-indigo-600 shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search agents..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Location Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FunnelIcon className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                {locations.map((location) => (
                  <option
                    key={location}
                    value={location === "All" ? "all" : location}
                  >
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Specialty Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FunnelIcon className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                {specialties.map((specialty) => (
                  <option
                    key={specialty}
                    value={specialty === "All" ? "all" : specialty}
                  >
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Agents */}
        {filteredAgents.some((agent) => agent.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Featured Agents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAgents
                .filter((agent) => agent.featured)
                .map((agent) => (
                  <div
                    key={agent.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img
                          className="w-full h-48 md:h-full object-cover"
                          src={agent.image}
                          alt={agent.name}
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">
                              {agent.name}
                            </h3>
                            <p className="text-indigo-600">{agent.title}</p>
                          </div>
                          {agent.featured && (
                            <span className="px-2 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>

                        <div className="mt-4 flex items-center">
                          <div className="flex items-center">
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                            <span className="ml-1 text-gray-700">
                              {agent.rating}
                            </span>
                            <span className="mx-2 text-gray-300">|</span>
                            <span className="text-gray-600">
                              {agent.dealsClosed} deals closed
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Experience</p>
                            <p className="font-medium">{agent.experience}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Specialty</p>
                            <p className="font-medium">{agent.specialty}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-medium">{agent.location}</p>
                          </div>
                        </div>

                        <div className="mt-6 flex space-x-3">
                          <a
                            href={`mailto:${agent.name
                              .split(" ")
                              .join(".")
                              .toLowerCase()}@propfinder.com`}
                            className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                          >
                            <EnvelopeIcon className="h-5 w-5 mr-2" />
                            Email
                          </a>
                          <a
                            href={`tel:+1800555${agent.id
                              .toString()
                              .padStart(4, "0")}`}
                            className="flex-1 flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                          >
                            <PhoneIcon className="h-5 w-5 mr-2" />
                            Call
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* All Agents */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">All Agents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents
              .filter(
                (agent) =>
                  !agent.featured ||
                  filteredAgents.filter((a) => a.featured).length === 0
              )
              .map((agent) => (
                <div
                  key={agent.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src={agent.image}
                      alt={agent.name}
                    />
                    {agent.featured && (
                      <span className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {agent.name}
                        </h3>
                        <p className="text-indigo-600 text-sm">{agent.title}</p>
                      </div>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <span className="ml-1 text-gray-700">
                          {agent.rating}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500">Experience</p>
                        <p className="text-sm font-medium">
                          {agent.experience}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Specialty</p>
                        <p className="text-sm font-medium">{agent.specialty}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="text-sm font-medium">{agent.location}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Deals Closed</p>
                        <p className="text-sm font-medium">
                          {agent.dealsClosed}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex space-x-3">
                      <a
                        href={`mailto:${agent.name
                          .split(" ")
                          .join(".")
                          .toLowerCase()}@propfinder.com`}
                        className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm"
                      >
                        <EnvelopeIcon className="h-4 w-4 mr-1" />
                        Email
                      </a>
                      <a
                        href={`tel:+1800555${agent.id
                          .toString()
                          .padStart(4, "0")}`}
                        className="flex-1 flex items-center justify-center px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm"
                      >
                        <PhoneIcon className="h-4 w-4 mr-1" />
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Become an Agent CTA */}
        <div className="mt-16 bg-indigo-700 shadow-md overflow-hidden">
          <div className="px-6 py-18 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-indigo-100 mb-6">
              We're always looking for talented real estate professionals to
              join our network.
            </p>
            <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition font-medium">
              Apply to Become an Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
