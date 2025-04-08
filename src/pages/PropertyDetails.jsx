import { useParams } from "react-router-dom";
import {
  StarIcon,
  HeartIcon,
  ShareIcon,
  MapIcon,
  CalendarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const PropertyDetails = () => {
  const { id } = useParams();

  // In a real app, this would be fetched from an API based on the id
  const property = {
    id: 1,
    title: "Modern Apartment in Downtown",
    address: "123 Main St, New York, NY 10001",
    price: 2500,
    type: "rent",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    yearBuilt: 2018,
    rating: 4.8,
    description:
      "This stunning modern apartment offers luxury living in the heart of downtown. Features include floor-to-ceiling windows with panoramic city views, a gourmet kitchen with high-end appliances, and a spacious master suite with walk-in closet. Building amenities include 24/7 concierge, fitness center, rooftop terrace, and resident lounge.",
    features: [
      "Floor-to-ceiling windows",
      "Gourmet kitchen with quartz countertops",
      "Hardwood floors throughout",
      "In-unit washer/dryer",
      "Smart home technology",
      "Walk-in closets",
      "Balcony",
    ],
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "(123) 456-7890",
      email: "sarah@realestate.com",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      since: 2015,
    },
    location: {
      lat: 40.7128,
      lng: -74.006,
    },
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Property Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
          <div className="flex items-center mt-2">
            <MapIcon className="h-5 w-5 text-gray-500 mr-1" />
            <span className="text-gray-600">{property.address}</span>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div
            className="relative rounded-xl overflow-hidden mb-4"
            style={{ height: "500px" }}
          >
            <img
              src={property.images[currentImage]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
              >
                <HeartIcon
                  className={`h-5 w-5 ${
                    isFavorite ? "text-red-500 fill-current" : "text-gray-600"
                  }`}
                />
              </button>
              <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                <ShareIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {property.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-20 rounded-md overflow-hidden ${
                  currentImage === index ? "ring-2 ring-indigo-500" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`Property ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Price and Basic Info */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-3xl font-bold text-indigo-600">
                    ${property.price.toLocaleString()}
                  </span>
                  {property.type === "rent" && (
                    <span className="text-gray-500"> / month</span>
                  )}
                </div>
                <div className="flex items-center bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
                  <StarIcon className="h-4 w-4 mr-1" />
                  <span>{property.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-gray-500 text-sm">Bedrooms</div>
                  <div className="text-lg font-semibold">
                    {property.bedrooms}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-500 text-sm">Bathrooms</div>
                  <div className="text-lg font-semibold">
                    {property.bathrooms}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-500 text-sm">Area</div>
                  <div className="text-lg font-semibold">
                    {property.area} sqft
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600">{property.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-indigo-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                {/* In a real app, this would be a map component */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                  <MapIcon className="h-12 w-12" />
                  <span className="ml-2">Property Map</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>

              {/* Agent Info */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{property.agent.name}</h3>
                  <p className="text-gray-600 text-sm">
                    Agent since {property.agent.since}
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-md transition"
                >
                  Send Message
                </button>
              </form>

              {/* Schedule Tour */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-3">Schedule a Tour</h3>
                <div className="flex items-center mb-2">
                  <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-600">Select a date and time</span>
                </div>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mb-4"
                />
                <button
                  type="button"
                  className="w-full bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 px-4 rounded-md transition"
                >
                  Schedule Tour
                </button>
              </div>

              {/* Direct Contact */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-3">Contact Directly</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <UserIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-600">{property.agent.name}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {property.agent.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href={`mailto:${property.agent.email}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {property.agent.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
