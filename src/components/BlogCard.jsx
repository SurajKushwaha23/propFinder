import { Link } from "react-router-dom";
import { CalendarIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/blog/${blog.slug}`}>
        <div className="h-48 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="flex justify-between space-x-1 text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1 text-indigo-600" />
            {blog.date}
          </span>
          {/* <span className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1 text-indigo-600" />
            {blog.readTime}
          </span> */}
          <span className="flex items-center">
            <UserIcon className="h-4 w-4 mr-1 text-indigo-600" />
            {blog.author}
          </span>
        </div>

        <Link to={`/blog/${blog.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors mb-3">
            {blog.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/blog/${blog.slug}`}
          className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
