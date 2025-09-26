import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {

 

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-y-6">
        <div className="w-full">
          <h1 className="border maven-pro md:px-20 md:py-10 text-[50px] ">
            Hello Admin
          </h1>
        </div>
        <div className="w-full px-2 md:px-5  grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="border">Total Projects</div>
          <div className="border">Total Blogs</div>
          <div className="border">Total Testimonials</div>
          <div className="border">FAQ</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
