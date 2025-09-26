import React, { useContext, useEffect } from "react";
import { AppConetxt } from "../context/context";

const Blog = () => {
  const { blogs } = useContext(AppConetxt);

  useEffect(() => {
    console.log(blogs);
  }, [blogs]);

  return (
    <section className="py-10  lg:px-20 sm:py-10 bg-[#101828]">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex z-10 relative items-center justify-center w-full mb-10">
          <div className="flex-grow max-w-40 border-t border-white"></div>
          <h2 className="mx-4 text-2xl font-bold uppercase text-white oswald_span">
            FROM THE BLOG
          </h2>
          <div className="flex-grow flex-grow max-w-40 border-t border-white"></div>
        </div>

        <div className="flex justify-center mb-5 gap-y-5 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {blogs &&
            blogs.slice(0, 3).map((blog) => (
              <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3  rounded-2xl p-5 transition-all duration-300 border border-[#101828] hover:border-white transition-smooth">
                <div className="flex items-center mb-6">
                  <img
                    src={blog.img}
                    alt="Harsh image"
                    className="rounded-lg w-full object-cover"
                  />
                </div>

                <div className="block">
                  <div className="flex mb-3 items-center justify-between  font-medium">
                    <h6 className="text-sm text-gray-400">{blog.date}</h6>
                  </div>
                  <div className="flex mb-3 items-center justify-between  font-medium">
                    <h6 className="text-sm text-gray-100">{blog.title}</h6>
                  </div>
                  <p className="text-white font-normal text-gray-400 mb-5">
                    {blog.content}
                  </p>
                  <div className="flex items-center justify-between  font-medium">
                    <h6 className="text-sm text-gray-400">{blog.author}</h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <a
          href="#"
          className="cursor-pointer text-white border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300  hover:bg-white hover:text-black "
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default Blog;
