import React from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import About from "../components/About";
import Brands from "../components/Brands";
import FeaturedProjects from "../components/FeaturedProjects";
import HeroAbout from "../components/HeroAbout";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Faq from "../components/Faq";
import BackTotopBtn from "../components/BackTotopBtn";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroCarousel />  
      <About />
      <Brands />
      <FeaturedProjects />
      <HeroAbout />
       <Gallery />
      <Testimonials />
      <Blog />
      <Faq/>
      <Footer />
      <BackTotopBtn/>
      <Contact/>
    </div>
  );
};

export default Home;
