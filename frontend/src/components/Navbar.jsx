import { useState, useEffect, useContext } from "react";
import { AppConetxt } from "../context/context";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useContext(AppConetxt);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="siteHeader"
      className={`fixed top-0 left-0 right-0 w-full  z-50 transition-colors duration-300 ${
        scrolled ? "bg-gray-800/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="text-2xl font-bold text-white">
          <img
            src="/img/logo/logo.png"
            alt="logo"
            className="h-10 w-auto max-w-[150px]"
          />
        </a>

        <ul className="hidden md:flex space-x-8 text-white font-medium relative">
          <li>
            <a href="#" className="hover:text-yellow-400">
              {t("nav.Home")}
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-yellow-400">
              {t("nav.About Us")}
            </a>
          </li>
          <li className="group relative">
            <button className="flex items-center hover:text-yellow-400">
              {t("nav.Projects")}
              <svg
                className="ml-1 size-4 transform transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div className="absolute left-1/2 top-full origin-top -translate-x-1/2 w-[90vw] max-w-5xl bg-black/80 shadow-xl p-6 rounded-lg transition-all duration-300 ease-out z-50 opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 group-hover:pointer-events-auto max-h-[calc(100vh-64px)] overflow-y-auto">
              <div className="grid grid-cols-4 gap-4 p-2 mb-2">
                <a href="#" className="block text-center">
                  <img
                    src="/img/pages/home-2.jpg"
                    className="rounded mb-2"
                    alt=""
                  />
                  <p className="text-sm text-white">Luxury Duplex</p>
                </a>
                <a href="#" className="block text-center">
                  <img
                    src="/img/pages/home-2.jpg"
                    className="rounded mb-2"
                    alt=""
                  />
                  <p className="text-sm text-white">Real Estate Agency</p>
                </a>
                <a href="#" className="block text-center">
                  <img
                    src="/img/pages/home-2.jpg"
                    className="rounded mb-2"
                    alt=""
                  />
                  <p className="text-sm text-white">Commercial Real Estate</p>
                </a>
                <a href="#" className="block text-center">
                  <img
                    src="/img/pages/home-2.jpg"
                    className="rounded mb-2"
                    alt=""
                  />
                  <p className="text-sm text-white">Vacation Rental</p>
                </a>
              </div>
              <div className="grid grid-cols-4 gap-4 p-2 mb-2">
                <a href="#" className="block text-center">
                  <img
                    src="/img/pages/home-2.jpg"
                    className="rounded mb-2"
                    alt=""
                  />
                  <p className="text-sm text-white">Luxury Duplex</p>
                </a>
                <a href="#" className="block text-center">
                  <img
                    src="/img/pages/home-2.jpg"
                    className="rounded mb-2"
                    alt=""
                  />
                  <p className="text-sm text-white">Real Estate Agency</p>
                </a>
                <a href="#" className="block text-center">
                  <img
                    src="/img/pages/home-2.jpg"
                    className="rounded mb-2"
                    alt=""
                  />
                  <p className="text-sm text-white">Commercial Real Estate</p>
                </a>
                <a href="#" className="block text-center">
                  <img
                    src="/img/pages/home-2.jpg"
                    className="rounded mb-2"
                    alt=""
                  />
                  <p className="text-sm text-white">Vacation Rental</p>
                </a>
              </div>
              <div className="grid grid-cols-4 gap-4 p-2 mb-2">
                <a href="#" className="block text-center">
                  <img
                    src="/img/pages/home-2.jpg"
                    className="rounded mb-2"
                    alt=""
                  />
                  <p className="text-sm text-white">Luxury Duplex</p>
                </a>
                <a href="#" className="block text-center">
                  <img
                    src="/img/pages/home-2.jpg"
                    className="rounded mb-2"
                    alt=""
                  />
                  <p className="text-sm text-white">Real Estate Agency</p>
                </a>
                <a href="#" className="block text-center">
                  <img
                    src="/img/pages/home-2.jpg"
                    className="rounded mb-2"
                    alt=""
                  />
                  <p className="text-sm text-white">Commercial Real Estate</p>
                </a>
                <a href="#" className="block text-center">
                  <img
                    src="/img/pages/home-2.jpg"
                    className="rounded mb-2"
                    alt=""
                  />
                  <p className="text-sm text-white">Vacation Rental</p>
                </a>
              </div>
            </div>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              {t("nav.Contact")}
            </a>
          </li>
        </ul>

        <a
          href="#"
          className="hidden md:inline-block border border-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-400 hover:text-black"
        >
          {t("nav.Contact Us")}
        </a>

        <div className="flex flex-row">
          <LanguageSwitcher />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white text-3xl"
          >
            &#9776;
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden text-white text-center shadow px-4 pb-4 overflow-x-hidden">
          <a href="#" className="block py-2 sm:border-b">
            {t("nav.Home")}
          </a>
          <a href="#" className="block py-2 sm:border-b">
            {t("nav.About Us")}
          </a>
          <a href="#" className="block py-2 sm:border-b">
            {t("nav.Projects")}
          </a>
          <a href="#" className="block py-2 sm:border-b">
           {t("nav.Contact")}
          </a>
          <a
            href="#"
            className="block mt-2 bg-blue-700 text-white text-center py-2 rounded"
          >
            {t("nav.Contact Us")}
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
