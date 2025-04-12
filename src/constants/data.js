export const featuredProperties = [
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
    description:
      "This stunning modern apartment offers luxury living in the heart of downtown. Features include floor-to-ceiling windows with panoramic city views, a gourmet kitchen with high-end appliances, and a spacious master suite with walk-in closet.",
    features: [
      "Floor-to-ceiling windows",
      "Gourmet kitchen with quartz countertops",
      "Hardwood floors throughout",
      "In-unit washer/dryer",
      "Smart home technology",
      "Walk-in closets",
      "Balcony",
    ],
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
    description:
      "Stunning luxury villa with breathtaking ocean views. This property features an open floor plan, chef's kitchen, infinity pool, and direct beach access.",
    features: [
      "Oceanfront location",
      "Infinity pool",
      "Chef's kitchen",
      "Smart home system",
      "Private beach access",
      "Home theater",
      "Wine cellar",
    ],
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
    featured: true,
    description:
      "Stunning luxury villa with breathtaking ocean views. This property features an open floor plan, chef's kitchen, infinity pool, and direct beach access.",
    features: [
      "Oceanfront location",
      "Infinity pool",
      "Chef's kitchen",
      "Smart home system",
      "Private beach access",
      "Home theater",
      "Wine cellar",
    ],
  },
];

export const allProperties = [
  ...featuredProperties,
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
    description:
      "Charming studio apartment in the vibrant Arts District. Perfect for creatives with exposed brick walls, high ceilings, and walkable neighborhood.",
    features: [
      "Exposed brick walls",
      "High ceilings",
      "Walkable neighborhood",
      "Community rooftop",
      "Bike storage",
      "Pet friendly",
      "Laundry on-site",
    ],
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
    description:
      "Beautiful family home in a quiet suburban neighborhood. Features include a large backyard, open kitchen, and spacious living areas perfect for family gatherings.",
    features: [
      "Large backyard",
      "Open concept kitchen",
      "Hardwood floors",
      "Two-car garage",
      "Energy efficient",
      "Walk-in pantry",
      "Fireplace",
    ],
  },
];

export const propertyTypes = [
  { value: "all", label: "All Types" },
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "condo", label: "Condo" },
  { value: "townhouse", label: "Townhouse" },
  { value: "land", label: "Land" },
  { value: "commercial", label: "Commercial" },
];

export const bedroomOptions = [
  { value: "", label: "Any" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
  { value: "5", label: "5+" },
];

export const bathroomOptions = [
  { value: "", label: "Any" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
];

export const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    experience: "12 years",
    specialty: "Luxury Homes",
    location: "New York",
    rating: 4.9,
    dealsClosed: 245,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    featured: true,
    bio: "Real estate expert with 15+ years of experience in property management and investment.",
    phone: "+1 (555) 123-4567",
    email: "sarah@propfinder.com",
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
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    featured: false,
    bio: "Tech enthusiast building innovative solutions for the real estate industry.",
    phone: "+1 (555) 234-5678",
    email: "michael@propfinder.com",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John and Emily Parker",
    role: "Home Buyers",
    content:
      "Found our dream home within a week of using PropFinder. The process was smooth and the agent was extremely helpful!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Lisa Rodriguez",
    role: "Property Investor",
    content:
      "As a first-time investor, I was nervous about the process. PropFinder made it easy and stress-free. Highly recommend!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export const faqs = [
  {
    question: "How quickly can I expect a response to my inquiry?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.",
  },
  {
    question: "Do I need to make an appointment to visit your office?",
    answer:
      "While walk-ins are welcome, we recommend scheduling an appointment to ensure the right team member is available to assist you.",
  },
];

export const contactMethods = [
  {
    icon: "MapPinIcon",
    title: "Our Office",
    details: "123 Property Lane, Suite 400, New York, NY 10001",
    link: "#map",
    linkText: "View on map",
  },
  {
    icon: "PhoneIcon",
    title: "Phone",
    details: "+1 (555) 123-4567",
    link: "tel:+15551234567",
    linkText: "Call now",
  },
];

export const desktopNavigation = [
  { id: 101, name: "Home", link: "/" },
  { id: 102, name: "Properties", link: "/properties" },
  { id: 103, name: "Agents", link: "/agents" },
  { id: 104, name: "About", link: "/about" },
  { id: 106, name: "Blog", link: "/blog" },
  { id: 105, name: "Contact", link: "/contact" },
];

export const propertyCategories = [
  {
    name: "Apartments",
    icon: "HomeIcon",
    count: 1245,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    slug: "apartments",
  },
  {
    name: "Villas",
    icon: "HomeModernIcon",
    count: 876,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    slug: "villas",
  },
  {
    name: "Commercial",
    icon: "BuildingOffice2Icon",
    count: 532,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    slug: "commercial",
  },
  {
    name: "Vacation Homes",
    icon: "BuildingStorefrontIcon",
    count: 421,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    slug: "vacation-homes",
  },
  {
    name: "Luxury Estates",
    icon: "BuildingLibraryIcon",
    count: 289,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    slug: "luxury-estates",
  },
  {
    name: "Land Plots",
    icon: "MapIcon",
    count: 678,
    image:
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    slug: "land-plots",
  },
];

export const propertyBlogs = [
  {
    id: 1,
    slug: "first-time-home-buyer-guide",
    title: "First-Time Home Buyer's Guide: 10 Essential Tips",
    excerpt:
      "Navigating the real estate market for the first time can be overwhelming. Here's our comprehensive guide to help you make informed decisions.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: "May 15, 2023",
    readTime: "5 min read",
    author: "Sarah Johnson",
    tags: ["Buying", "Tips", "Guide"],
    content: `
      <h2>Understanding Your Budget</h2>
      <p>Before you start looking at properties, it's crucial to understand what you can afford...</p>
      
      <h2>Getting Pre-Approved</h2>
      <p>A mortgage pre-approval gives you a clear picture of your budget and shows sellers you're serious...</p>
      
      <h2>Choosing the Right Location</h2>
      <p>Consider factors like commute times, school districts, and future development plans...</p>
    `,
  },
  {
    id: 2,
    slug: "investment-property-strategies",
    title: "5 Proven Strategies for Investment Property Success",
    excerpt:
      "Learn how seasoned investors maximize returns and minimize risks in today's competitive real estate market.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: "June 2, 2023",
    readTime: "7 min read",
    author: "Michael Chen",
    tags: ["Investment", "Strategies", "Rental"],
    content: `
      <h2>Buy and Hold Strategy</h2>
      <p>This long-term approach focuses on property appreciation and rental income...</p>
      
      <h2>Fix and Flip</h2>
      <p>Identify undervalued properties, renovate them, and sell for profit...</p>
    `,
  },
  {
    id: 3,
    slug: "investment-property-strategies",
    title: "5 Proven Strategies for Investment Property Success",
    excerpt:
      "Learn how seasoned investors maximize returns and minimize risks in today's competitive real estate market.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: "June 2, 2023",
    readTime: "7 min read",
    author: "Michael Chen",
    tags: ["Investment", "Strategies", "Rental"],
    content: `
      <h2>Buy and Hold Strategy</h2>
      <p>This long-term approach focuses on property appreciation and rental income...</p>
      
      <h2>Fix and Flip</h2>
      <p>Identify undervalued properties, renovate them, and sell for profit...</p>
    `,
  },
];

export const topNavigation = {
  PHONENUMBER: "+91 123456789",
  EMAIL: "info@propertyfinder.com",
  FAQ: "FAQ",
  SUPPORT: "Support",
};
