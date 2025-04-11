import { useParams } from "react-router-dom";
import { propertyBlogs } from "../constants/data";
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  ArrowLeftIcon,
  ShareIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = propertyBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center py-20 max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              to="/blog"
              className="flex items-center text-indigo-400 hover:text-indigo-300 mb-6 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              All Articles
            </Link>

            <div className="flex flex-wrap gap-3 mb-4">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              {blog.title}
            </h1>

            <div className="mt-6 flex items-center space-x-5 text-sm text-indigo-200">
              <span className="flex items-center">
                <UserIcon className="h-4 w-4 mr-2" />
                {blog.author}
              </span>
              <span className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-2" />
                {blog.date}
              </span>
              <span className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-2" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Floating Action Buttons */}
        <div className="hidden lg:block absolute left-full ml-8 top-12">
          <div className="sticky top-24 space-y-3">
            <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <ShareIcon className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <BookmarkIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="aspect-w-16 aspect-h-9 mb-10 rounded-xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>

          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>

        {/* Author Bio */}
        <div className="mt-16 p-8 bg-gray-50 rounded-xl">
          <div className="flex items-center">
            <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center mr-6">
              <UserIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                About {blog.author}
              </h3>
              <p className="mt-1 text-gray-600">
                Real estate expert with {Math.floor(Math.random() * 15) + 5}{" "}
                years of experience in the industry. Specializing in{" "}
                {blog.tags[0].toLowerCase()} properties and market trends.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {propertyBlogs
              .filter((b) => b.id !== blog.id)
              .slice(0, 2)
              .map((relatedBlog) => (
                <div
                  key={relatedBlog.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <Link to={`/blog/${relatedBlog.slug}`}>
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
                        {relatedBlog.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                      <span className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                        Read article →
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
