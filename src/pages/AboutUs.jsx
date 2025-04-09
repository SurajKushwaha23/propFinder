import {
  BuildingOfficeIcon,
  UserGroupIcon,
  ChartBarIcon,
  HeartIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Real estate expert with 15+ years of experience in property management and investment.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Tech enthusiast building innovative solutions for the real estate industry.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Sales",
      bio: "Helping clients find their dream homes for over a decade.",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Property Specialist",
      bio: "Local market expert with in-depth neighborhood knowledge.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ];

  const stats = [
    {
      id: 1,
      name: "Properties Listed",
      value: "10,000+",
      icon: BuildingOfficeIcon,
    },
    { id: 2, name: "Happy Clients", value: "5,000+", icon: UserGroupIcon },
    { id: 3, name: "Cities Covered", value: "50+", icon: MapPinIcon },
    { id: 4, name: "Years Experience", value: "12+", icon: ChartBarIcon },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="About Us"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About PropFinder
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
            Connecting people with their perfect properties since 2010
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Founded in 2010, PropFinder began as a small local real estate
                agency with a vision to revolutionize property search. Today,
                we're a leading platform serving clients across the country.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                Our journey started when our founder, Sarah Johnson, recognized
                the need for a more transparent and user-friendly property
                search experience. What began as a simple idea has grown into a
                comprehensive platform that helps thousands find their dream
                homes every year.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <img
                    className="rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Our team working"
                    width={1184}
                    height={1376}
                  />
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <span className="ml-2">
                      Our team at the 2018 National Real Estate Conference
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <stat.icon
                      className="h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Mission
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Making property search simple and transparent
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We believe everyone deserves access to accurate property
              information and expert guidance.
            </p>
          </div>

          <div className="mt-20">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <HeartIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Client-First Approach
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    We prioritize your needs above all else, ensuring you find
                    properties that truly match your lifestyle and budget.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <BuildingOfficeIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Local Expertise
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our team has in-depth knowledge of local markets to provide
                    insights you won't find anywhere else.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <ChartBarIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Data-Driven Insights
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    We leverage market data and analytics to help you make
                    informed property decisions.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <UserGroupIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Trusted Network
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    We've built relationships with trusted agents, lenders, and
                    service providers to support your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Team
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet the people behind PropFinder
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A dedicated team of real estate professionals and technology
              experts.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((person) => (
                <div key={person.id} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500">
                          <img
                            className="h-16 w-16 rounded-full"
                            src={person.image}
                            alt={person.name}
                          />
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900">
                        {person.name}
                      </h3>
                      <p className="mt-1 text-base text-indigo-600">
                        {person.role}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {person.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to find your dream property?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Browse our listings or contact our team for personalized assistance.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="/properties"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Browse Properties
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
