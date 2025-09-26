import React, { useContext, useEffect } from "react";
import { AppConetxt } from "../context/context";

const Testimonials = () => {
  const { CustReviews } = useContext(AppConetxt);

  useEffect(() => { }, [CustReviews]);

  return (
    <div className="relative items-center [85rem] bg-[url('img/backgrounds/testimonal-bg.jpeg')] bg-cover px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="flex z-10 relative items-center justify-center w-full mb-10">
        <div className="flex-grow max-w-40 border-t border-white"></div>
        <h2 className="mx-4 text-2xl font-bold uppercase text-white oswald_span">
          customers stories
        </h2>
        <div className="flex-grow flex-grow max-w-40 border-t border-white"></div>
      </div>

      <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CustReviews &&
          CustReviews.slice(0, 3).map((review) => (
            <div class="flex flex-col bg-white/80 border border-gray-200 shadow-2xs rounded-tr-[50px] rounded-bl-[50px]">
              <div className="flex-auto p-4 md:p-6">
                <p className="mt-3 sm:mt-6 text-base text-black md:text-xl dark:text-white">
                  <em>{review.text}</em>
                </p>
              </div>

              <div className="p-4 rounded-b-xl md:px-6">
                <h3 className="text-sm font-semibold text-black sm:text-base">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  {review.position}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
