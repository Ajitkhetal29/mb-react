import React, { useContext, useState } from "react";
import { AppConetxt } from "../context/context";

const FaqCarousel = () => {
  const { faq } = useContext(AppConetxt);
  const [openIndex, setOpenIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
    console.log(currentSlide);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    console.log(currentSlide);
  };

  const imgs = [
    "https://napa.wpresidence.net/wp-content/uploads/2014/05/2.6-3-2-1-1024x623.webp",
    "https://napa.wpresidence.net/wp-content/uploads/2014/05/4.1-1024x623.webp",
    "https://napa.wpresidence.net/wp-content/uploads/2014/05/2.6-3-2-1-1024x623.webp",
    "https://napa.wpresidence.net/wp-content/uploads/2014/05/4.1-1024x623.webp",
  ];
  return (
    <section className="py-16  bg-gray-50 w-full flex-col justify-center items-center ">
      <div class="flex mb-5 w-full flex-row items-center gap-2 justify-center">
        <div class="flex-grow max-w-40 border-t border-black"></div>
        <h2 class="text-2xl text-black mb-2 oswald_span uppercase text-bold">
          FAQ
        </h2>
        <div class="flex-grow max-w-40 border-t border-black"></div>
      </div>
      <div className="w-full  px-4  sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="lg:w-1/2 w-full relative flex justify-center items-center">
          {faq && faq.length > 0 && (
            <div className="w-full h-64 lg:h-[350px] relative overflow-hidden rounded-lg">
              {imgs.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className={`absolute w-full h-full object-contain transition-opacity duration-500 ${
                    currentSlide === idx ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-2 cursor-pointer top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-black rounded-full p-2"
              >
                &#10094;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 bg-white/40 hover:bg-white/60 text-black rounded-full p-2"
              >
                &#10095;
              </button>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {imgs.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      currentSlide === idx ? "bg-green-500" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentSlide(idx)}
                  ></span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          {faq &&
            faq.map((item, idx) => (
              <div
                key={idx}
                y
                className="border border-gray-300 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex cursor-pointer justify-between items-center p-4 text-left text-gray-900 font-medium focus:outline-none"
                >
                  <span>{item.que}</span>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openIndex === idx ? "rotate-45 text-red-500" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                <div
                  className={`px-4 pb-4 text-green-700 transition-all  duration-500 overflow-hidden ${
                    openIndex === idx
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.ans}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FaqCarousel;
