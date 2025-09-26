import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const countersRef = useRef([]);
  const { t } = useTranslation();

  useEffect(() => {
    const counters = countersRef.current;

    const animateCount = (el) => {
      const target = +el.dataset.target;
      const duration = 1500;
      const startTime = performance.now();

      const update = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.counted) {
            animateCount(entry.target);
            entry.target.dataset.counted = "true";
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }, []);

  const addCounterRef = (el) => {
    if (el && !countersRef.current.includes(el)) countersRef.current.push(el);
  };

  return (
    <section className="relative px-10 md:px-20 py-10 xl:mr-0 lg:mr-5 mr-0 bg-[url('img/backgrounds/about-banner.png')] bg-cover bg-center md:bg-cover bg-fixed">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 w-full max-w-7xl px md:px-5 lg:px-5 mx-auto transition-opacity opacity-100">
        <div className="w-full  justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full rounded-xl flex-col p-5 bg-[#ffc03d] justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-4 md:gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-3 flex">
                <h6 className="text-bold text-2xl md:text-4xl text-center md:text-left font-bold leading-relaxed oswald_span">
                  {t("about.Build Your Dream..")}
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-5 flex">
                  <h2 className="text-black text-2xl oswald_span font-manrope leading-normal text-start text-center">
                    {t(
                      "about.Engage with us for end to end property solutions."
                    )}
                  </h2>
                  <p className="text-gray text-base font-normal leading-relaxed lg:text-start text-start">
                    {t("about.Our achievement story is a testament to teamwork and perseverance. Together, we've overcome challenges, celebrated victories, and created a narrative of progress and success."
                    )}
                  </p>
                </div>
              </div>
            </div>
            <button className="sm:w-fit w-full group px-3.5 py-2 bg-black hover:bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-1.5 text-white hover:text-black text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                {t("about.Read More")}
              </span>
              <svg
                className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Counters */}
          <section className="py-8 px-4 sm:py-12 sm:px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 text-left">
                <div className="p-4 sm:p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-400 transition duration-300 flex flex-col gap-2">
                  <h4 className="text-gray-900 flex items-baseline gap-1 text-2xl sm:text-3xl font-bold">
                    <span
                      ref={addCounterRef}
                      className="counter"
                      data-target="1000"
                    >
                      0
                    </span>
                    <span>+</span>
                  </h4>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {t("about.Crores of Property Transacted")}
                  </p>
                </div>

                <div className="p-4 sm:p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-400 transition duration-300 flex flex-col gap-2">
                  <h4 className="text-gray-900 flex items-baseline gap-1 text-2xl sm:text-3xl font-bold">
                    <span
                      ref={addCounterRef}
                      className="counter"
                      data-target="1"
                    >
                      0
                    </span>
                    <span>M</span>
                  </h4>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {t("about.Over 1 Million SQ. FT of Property Sold")}
                  </p>
                </div>

                <div className="p-4 sm:p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-400 transition duration-300 flex flex-col gap-2">
                  <h4 className="text-gray-900 flex items-baseline gap-1 text-2xl sm:text-3xl font-bold">
                    <span
                      ref={addCounterRef}
                      className="counter"
                      data-target="100"
                    >
                      0
                    </span>
                    <span>+</span>
                  </h4>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {t("about.Developer Brand Partnership")}
                  </p>
                </div>

                <div className="p-4 sm:p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-400 transition duration-300 flex flex-col gap-2">
                  <h4 className="text-gray-900 flex items-baseline gap-1 text-2xl sm:text-3xl font-bold">
                    <span
                      ref={addCounterRef}
                      className="counter"
                      data-target="1520"
                    >
                      0
                    </span>
                    <span>+</span>
                  </h4>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {t('about.Colleagues & counting more daily')}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
