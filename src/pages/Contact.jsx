import { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const contactMethods = [
    {
      icon: <MapPinIcon className="w-6 h-6 text-indigo-600" />,
      title: "Our Office",
      details: "23 Property Lane, Ghazipur 400 Uttar Pardesh, UP 100100",
      link: "#map",
      linkText: "View on map",
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-indigo-600" />,
      title: "Phone",
      details: "+91 123456789",
      link: "tel:+91 123456789",
      linkText: "Call now",
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6 text-indigo-600" />,
      title: "Email",
      details: "hello@propertyfinder.com",
      link: "mailto:hello@propertyfinder.com",
      linkText: "Send email",
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-indigo-600" />,
      title: "Working Hours",
      details: "Mon-Fri: 9am-6pm | Sat: 10am-4pm",
      link: "#hours",
      linkText: "See details",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-indigo-100">
            We're here to help you with all your property needs. Reach out and
            our team will get back to you promptly.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600">
                Have questions about properties or need assistance? Our team is
                ready to help you find your dream home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-indigo-50 transition duration-300"
                >
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{method.details}</p>
                      <a
                        href={method.link}
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                      >
                        {method.linkText}
                        <ArrowRightIcon className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Chat */}
            <div className="bg-indigo-600 rounded-xl p-6">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                  <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-indigo-700 " />
                </div>
                <div>
                  <h3 className="text-lg text-white font-semibold mb-1">
                    Live Chat Support
                  </h3>
                  <p className="text-indigo-100 mb-3">
                    Available 24/7 for immediate assistance
                  </p>
                  <button className="inline-flex items-center bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                    Start Chat
                    <ArrowRightIcon className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200">
                Thank you for your message! We'll get back to you within 24
                hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Property Information">
                    Property Information
                  </option>
                  <option value="Schedule a Viewing">Schedule a Viewing</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 border border-transparent rounded-lg shadow-sm text-white font-medium bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-gray-50 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-gray-600 mb-6">
                Our doors are open Monday through Friday from 9am to 6pm. Come
                by for a coffee and let's discuss how we can help with your
                property needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-indigo-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">Headquarters</h3>
                    <p className="text-gray-600">
                      123 Property Lane, Suite 400
                    </p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="h-5 w-5 text-indigo-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 bg-gray-200">
              {/* In a real app, this would be a map component */}
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                <MapPinIcon className="h-12 w-12" />
                <span className="ml-2">Property Finder Location Map</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "How quickly can I expect a response to my inquiry?",
                answer:
                  "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.",
              },
              {
                question:
                  "Do I need to make an appointment to visit your office?",
                answer:
                  "While walk-ins are welcome, we recommend scheduling an appointment to ensure the right team member is available to assist you.",
              },
              {
                question:
                  "What information should I include in my property inquiry?",
                answer:
                  "Please include details about the type of property you're interested in, your budget, preferred locations, and any specific requirements.",
              },
              {
                question: "Do you offer virtual property tours?",
                answer:
                  "Yes, we can arrange virtual tours for most of our listed properties. Just let us know your preferences when you contact us.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition">
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className="h-5 w-5 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
