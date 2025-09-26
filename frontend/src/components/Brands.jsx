import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Brands = () => {
  const textRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const target = textRef.current;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            target.classList.add("slide-up-fade");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (target) observer.observe(target);
  }, []);

  return (
    <section id="partnersSection" class="py-12 h-70 w-full px-4">
      <div
        ref={textRef}
        id="partnersText"
        class="max-w-4xl mx-auto text-center flex flex-col items-center justify-center transition-transform duration-300 ease-out opacity-0"
      >
        <div class="flex w-full flex-row items-center gap-2 justify-center">
          <div class="flex-grow max-w-40 border-t border-black"></div>
          <h2 class="text-2xl text-black mb-2 oswald_span uppercase text-bold">
            {t("brands.Our Partners")}
          </h2>
          <div class="flex-grow max-w-40 border-t border-black"></div>
        </div>
        <p class="text-orange-600 mb-8 text-bold oswald_span">
          {t("brands.We are pleased to work with our partners.")}
        </p>

        <div
          id="logoTrack"
          class="overflow-hidden relative group cursor-grab w-full"
        >
          <div class="flex items-center gap-8 overflow-hidden relative group">
            <div class="flex items-center gap-8 animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
              <img
                src="img/brands/1.jpeg"
                class="h-16 w-auto object-contain"
                alt="Brand 1"
              />
              <img
                src="img/brands/2.png"
                class="h-16 w-auto object-contain"
                alt="Brand 2"
              />
              <img
                src="img/brands/3.png"
                class="h-16 w-auto object-contain"
                alt="Brand 3"
              />
              <img
                src="img/brands/4.png"
                class="h-16 w-auto object-contain"
                alt="Brand 4"
              />
              <img
                src="img/brands/5.png"
                class="h-16 w-auto object-contain"
                alt="Brand 5"
              />
              <img
                src="img/brands/6.png"
                class="h-16 w-auto object-contain"
                alt="Brand 1"
              />
              <img
                src="img/brands/7.png"
                class="h-16 w-auto object-contain"
                alt="Brand 2"
              />
              <img
                src="img/brands/8.png"
                class="h-16 w-auto object-contain"
                alt="Brand 3"
              />
              <img
                src="img/brands/9.png"
                class="h-16 w-auto object-contain"
                alt="Brand 5"
              />
              <img
                src="img/brands/10.png"
                class="h-16 w-auto object-contain"
                alt="Brand 4"
              />
              <img
                src="img/brands/11.png"
                class="h-16 w-auto object-contain"
                alt="Brand 4"
              />
              <img
                src="img/brands/12.jpeg"
                class="h-16 w-auto object-contain"
                alt="Brand 4"
              />
              <img
                src="img/brands/7.png"
                class="h-16 w-auto object-contain"
                alt="Brand 2"
              />
              <img
                src="img/brands/8.png"
                class="h-16 w-auto object-contain"
                alt="Brand 3"
              />
              <img
                src="img/brands/9.png"
                class="h-16 w-auto object-contain"
                alt="Brand 5"
              />
              <img
                src="img/brands/10.png"
                class="h-16 w-auto object-contain"
                alt="Brand 4"
              />
              <img
                src="img/brands/11.png"
                class="h-16 w-auto object-contain"
                alt="Brand 4"
              />
              <img
                src="img/brands/12.jpeg"
                class="h-16 w-auto object-contain"
                alt="Brand 4"
              />

              <img
                src="img/brands/1.jpeg"
                class="h-16 w-auto object-contain"
                alt="Brand 1"
              />
              <img
                src="img/brands/2.png"
                class="h-16 w-auto object-contain"
                alt="Brand 2"
              />
              <img
                src="img/brands/3.png"
                class="h-16 w-auto object-contain"
                alt="Brand 3"
              />
              <img
                src="img/brands/4.png"
                class="h-16 w-auto object-contain"
                alt="Brand 4"
              />
              <img
                src="img/brands/5.png"
                class="h-16 w-auto object-contain"
                alt="Brand 5"
              />
              <img
                src="img/brands/6.png"
                class="h-16 w-auto object-contain"
                alt="Brand 1"
              />
              <img
                src="img/brands/7.png"
                class="h-16 w-auto object-contain"
                alt="Brand 2"
              />
              <img
                src="img/brands/8.png"
                class="h-16 w-auto object-contain"
                alt="Brand 3"
              />
              <img
                src="img/brands/9.png"
                class="h-16 w-auto object-contain"
                alt="Brand 5"
              />
              <img
                src="img/brands/10.png"
                class="h-16 w-auto object-contain"
                alt="Brand 4"
              />
              <img
                src="img/brands/11.png"
                class="h-16 w-auto object-contain"
                alt="Brand 4"
              />
              <img
                src="img/brands/12.jpeg"
                class="h-16 w-auto object-contain"
                alt="Brand 4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
