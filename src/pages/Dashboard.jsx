import { lazy, useState } from "react";
import { Link } from "react-router-dom";
import {
  BellIcon,
  CogIcon,
  HomeIcon,
  UserIcon,
  BookmarkIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
const Profile = lazy(() => import("./Profile"));
const Settings = lazy(() => import("./Settings"));

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("properties");
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      status: "active",
      views: 124,
      saved: 18,
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Luxury Villa with Ocean View",
      status: "pending",
      views: 89,
      saved: 12,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Cozy Studio in Arts District",
      status: "active",
      views: 76,
      saved: 5,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ]);

  const [savedProperties, setSavedProperties] = useState([
    {
      id: 4,
      title: "Spacious Family Home",
      price: 450000,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "Penthouse with City Views",
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">Premium Member</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("properties")}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-lg ${
                    activeTab === "properties"
                      ? "bg-indigo-100 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <HomeIcon className="w-5 h-5 mr-3" />
                  My Properties
                </button>
                <button
                  onClick={() => setActiveTab("saved")}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-lg ${
                    activeTab === "saved"
                      ? "bg-indigo-100 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <BookmarkIcon className="w-5 h-5 mr-3" />
                  Saved Properties
                </button>
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-lg ${
                    activeTab === "profile"
                      ? "bg-indigo-100 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <UserIcon className="w-5 h-5 mr-3" />
                  Profile Settings
                </button>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-lg ${
                    activeTab === "notifications"
                      ? "bg-indigo-100 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <BellIcon className="w-5 h-5 mr-3" />
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-lg ${
                    activeTab === "settings"
                      ? "bg-indigo-100 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <CogIcon className="w-5 h-5 mr-3" />
                  Account Settings
                </button>
              </nav>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <button className="w-full text-left text-red-600 hover:text-red-800 px-4 py-2 rounded-lg hover:bg-red-50">
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "properties" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">My Properties</h2>
                  <Link
                    to="/add-property"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  >
                    Add New Property
                  </Link>
                </div>

                <div className="space-y-6">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden"
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
                          <h3 className="text-xl font-semibold">
                            {property.title}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              property.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {property.status === "active"
                              ? "Active"
                              : "Pending"}
                          </span>
                        </div>

                        <div className="flex items-center mt-4 space-x-6">
                          <div className="flex items-center">
                            <svg
                              className="w-5 h-5 text-gray-500 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                            <span className="text-gray-600">
                              {property.views} views
                            </span>
                          </div>
                          <div className="flex items-center">
                            <HeartIcon className="w-5 h-5 text-gray-500 mr-2" />
                            <span className="text-gray-600">
                              {property.saved} saved
                            </span>
                          </div>
                        </div>

                        <div className="mt-6 flex space-x-3">
                          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                            Edit
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition">
                            View Details
                          </button>
                          {property.status === "active" ? (
                            <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition">
                              Deactivate
                            </button>
                          ) : (
                            <button className="px-4 py-2 border border-green-300 text-green-700 rounded-lg hover:bg-green-50 transition">
                              Activate
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "saved" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Saved Properties</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {savedProperties.map((property) => (
                    <div
                      key={property.id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">
                          {property.title}
                        </h3>
                        <div className="mt-2">
                          <span className="text-indigo-600 font-bold">
                            ${property.price.toLocaleString()}
                          </span>
                          {property.price < 10000 && (
                            <span className="text-gray-500 text-sm">
                              {" "}
                              / month
                            </span>
                          )}
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex-1">
                            Contact Agent
                          </button>
                          <button className="p-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition">
                            <HeartIcon className="w-5 h-5 text-red-500 fill-current" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>

                <form className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                          <img
                            src="https://randomuser.me/api/portraits/women/32.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800">
                          Change Photo
                        </button>
                      </div>
                    </div>
                    <div className="md:w-2/3 space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          defaultValue="Sarah Johnson"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          defaultValue="sarah@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          defaultValue="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Bio
                        </label>
                        <textarea
                          rows="3"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          defaultValue="Real estate enthusiast and property investor."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Notifications</h2>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between">
                      <h3 className="font-medium">New message from agent</h3>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-gray-600 mt-1">
                      John Doe sent you a message about your property listing.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg bg-indigo-50">
                    <div className="flex justify-between">
                      <h3 className="font-medium">
                        Property viewing scheduled
                      </h3>
                      <span className="text-sm text-gray-500">1 day ago</span>
                    </div>
                    <p className="text-gray-600 mt-1">
                      A viewing has been scheduled for your Downtown Apartment
                      on Friday at 2 PM.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between">
                      <h3 className="font-medium">
                        New property matches your criteria
                      </h3>
                      <span className="text-sm text-gray-500">3 days ago</span>
                    </div>
                    <p className="text-gray-600 mt-1">
                      A new property in Miami that matches your saved search
                      criteria has been listed.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

                <form className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Change Password
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium mb-4">
                      Notification Preferences
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="email-notifications"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label
                          htmlFor="email-notifications"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Email Notifications
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="sms-notifications"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="sms-notifications"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          SMS Notifications
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="promotional-emails"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label
                          htmlFor="promotional-emails"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Promotional Emails
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                      Save Settings
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
