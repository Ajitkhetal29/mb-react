import React, { useContext, useEffect, useRef } from "react";
import { AppConetxt } from "../context/context";

import {useTranslation} from 'react-i18next'

const FeaturedProjects = () => {
  const { newLaunchProjects } = useContext(AppConetxt);

  const parentSection = useRef([]);

  const {t} = useTranslation();

  useEffect(() => {

    if (newLaunchProjects && parentSection.current) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      const items = parentSection.current.querySelectorAll(".fade-item");

      items.forEach((item) => observer.observe(item));
      return () => observer.disconnect();
    }
  }, [newLaunchProjects]);

  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <div className="flex justify-left items-center sm:justify-evenly xs:gap-1 px-6">
            <h2 className="text-xl md:text-2xl flex-1 text-center text-black mb-2 uppercase oswald_span text-bold">
              {t('featuredProject.Featured Projects')}
            </h2>
            <button className="sm:w-fit group md:px-3.5 py-2 border hover:bg-black transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-1.5 uppercase text-black hover:text-white text-sm font-medium leading-6">
                {t('featuredProject.Explore all properties')}
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
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            ref={parentSection}
            id=""
            className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-4"
          >
            {newLaunchProjects &&
              newLaunchProjects.map((project) => (
                <a
                  href="#"
                  key={project.name}
                  className="group hover:border bg-white hover:border-gray-200 rounded p-5"
                >
                  <img
                    src={project.img}
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    className="aspect-square fade-item transition-all duration-700 ease-out w-full md:h-75 lg:h-75 rounded-lg bg-gray-200  group-hover:overlay-20 overflow-hidden xl:aspect-7/8"
                  />
                  <p className="mt-3 text-xs text-orange-700 flex items-center">
                    <span>
                      <img
                        className="h-5"
                        src="img/icons/location.png"
                        alt=""
                      />
                    </span>
                    <span>{t(`featuredProject.${project.location}`)}</span>
                  </p>
                  <h2 className="mt-2 px-1 text-md font-medium maven-pro text-gray-900">
                    {t(`featuredProject.${project.name}`)}
                  </h2>
                  <div className="flex mt-2 item-center justify-between">
                    <span className="flex px-1 mt-1 w-fit items-center border">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.332 7.999c0-3.68 2.98-6.667 6.66-6.667a6.67 6.67 0 0 1 6.673 6.667 6.67 6.67 0 0 1-6.673 6.666A6.663 6.663 0 0 1 1.332 8Zm6.667 2.3 2.146 1.293a.33.33 0 0 0 .494-.36l-.567-2.447 1.887-1.633a.334.334 0 0 0-.187-.587l-2.493-.213-.974-2.293a.332.332 0 0 0-.613 0l-.973 2.3-2.494.213a.337.337 0 0 0-.193.587l1.887 1.633-.567 2.44a.335.335 0 0 0 .5.36l2.147-1.293Z"
                          fill="#63BBEB"
                        ></path>
                      </svg>
                      <span className="text-xs text-gray-700">{t('featuredProject.NEW LAUNCH')}</span>
                    </span>
                    <img
                      className="h-5 border rounded-full border-gray-300"
                      src="img/icons/arrow.png"
                      alt=""
                    />
                  </div>
                </a>
              ))}
          </div>

          <div className="mt-10 flex justify-center items-center sm:justify-evenly xs:gap-1 px-6">
            <button className=" group md:px-3.5 py-2 border hover:bg-black transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-1.5 uppercase text-black hover:text-white text-sm font-medium leading-6">
                {t('featuredProject.Explore all properties')}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects;
