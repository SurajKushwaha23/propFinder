import React from "react";
import { propertyBlogs } from "../constants/data";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Property Insights & Tips
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Latest articles on real estate trends, buying guides, and market
              updates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {propertyBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
              View All Articles
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
