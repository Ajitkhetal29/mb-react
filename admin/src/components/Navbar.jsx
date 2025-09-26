import { useState, useEffect, useContext } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="siteHeader"
      className={` top-0 left-0 right-0 w-full  z-50 transition-colors duration-300  bg-black  ${
        scrolled ? "fixed" : ""
      } `}
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
              Dashboard
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-yellow-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="flex flex-row">
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
            Dashboard
          </a>
          <a href="#" className="block py-2 sm:border-b">
            Projects
          </a>
          <a href="#" className="block py-2 sm:border-b">
            Blogs
          </a>
          <a href="#" className="block py-2 sm:border-b">
            Testimonials
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
