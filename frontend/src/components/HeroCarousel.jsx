import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";



const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [typeText, setTypeText] = useState("");
  const { t } = useTranslation();


  const slidesData = [
  {
    type: "video",
    src: "/img/carousel/ssvid.net--Home-Banner-Mobile-mp4_1080x1080.mp4",
  },
  {
    type: "image",
    src: "/img/carousel/Airica.jpg",
    content: (
      <div className="ml-6 md:ml-16 p-4 rounded-lg">
        <div class="absolute inset-y-0 left-0 flex flex-cols items-center z-30">
          <div class="ml-6 md:ml-16 p-4 rounded-lg">
            <span class="block text-white text-6xl md:text-8xl font-bold mb-2">
              {t("header.Top Notch")}
            </span>
            <span class="block text-white text-6xl font-bold md:text-8xl mb-4">
            {t("header.Living Space")}
            </span>
            <button class="px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-700 transition">
              {t("header.Explore Properties")}
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "image",
    src: "/img/carousel/North Park Night View.jpg",
    content: (
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
        <div className="ml-6 md:ml-16 p-4 rounded-lg text-center">
          <span className="block text-white text-xl md:text-4xl font-bold mb-2">
            {t("header.50+ Brand Partners")}
          </span>
          <span className="block text-white text-xl md:text-xl">
            {t("header.Mira bhayandar Projects prides to work with 50+ established developers")}
          </span>
        </div>
      </div>
    ),
  },
  {
    type: "image",
    src: "/img/carousel/Codename-LIT.jpg",
    content: (
      <div className="ml-6 md:ml-16 p-4 rounded-lg">
        <span className="block text-white text-4xl md:text-6xl font-bold mb-2">
          {t("Discover Your")}
        </span>
        <span className="block text-white text-4xl md:text-6xl mb-2">
         {t("Flexible Living")}
        </span>
        <span className="block text-white text-4xl md:text-6xl mb-4">
          House
        </span>
        <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-700 transition">
          Explore Properties
        </button>
      </div>
    ),
  },
  {
    type: "image",
    src: "/img/carousel/Ambrosia.jpg",
  },
  {
    type: "image",
    src: "/img/carousel/Veris.jpg",
  },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fullText = "Welcome to Mira Bhayandar Projects";
    let i = 0;
    const timer = setInterval(() => {
      setTypeText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slidesData.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slidesData.length) % slidesData.length);
  const goToSlide = (i) => setCurrent(i);

  return (
    <section className="relative w-full h-screen">
      <div className="relative w-full h-full overflow-hidden">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "video" ? (
              <video
                className="w-full h-full object-cover"
                src={slide.src}
                muted
                autoPlay
                loop
              />
            ) : (
              <img
                src={slide.src}
                className="w-full h-full object-cover zoom-anim"
                alt=""
              />
            )}
            <div className="absolute inset-0 "></div>
            {index === current && slide.content && slide.content}
            {index === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
                <span className="block text-white text-xl md:text-4xl font-bold type-cursor mb-2">
                  {typeText}
                </span>
              </div>
            )}
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute cursor-pointer top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full z-40"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute cursor-pointer top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full z-40"
        >
          &#10095;
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-40">
          {slidesData.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 cursor-pointer rounded-full ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
