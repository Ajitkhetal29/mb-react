import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const [imgBoxOpen, setImgBoxOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const parentSection = useRef([]);

  const openImgBox = (src) => {
    setSelectedImg(src);
    setImgBoxOpen(true);
  };

  const closeImgBox = () => {
    setSelectedImg("");
    setImgBoxOpen(false);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    const elements = parentSection.current.querySelectorAll(
      ".fade-img-left, .fade-img-right"
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={parentSection}
      className="relative  flex flex-col px-5 py-10 md:px-20 container mx-auto"
    >
      <div className="flex items-center justify-center w-full mb-10">
        <div className="flex-grow max-w-40 border-t border-black" />
        <h2 className="mx-4 text-2xl font-bold uppercase text-black oswald_span">
          Gallery
        </h2>
        <div className="flex-grow max-w-40 border-t border-black" />
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="fade-img-left  hover:-translate-y-12 hover:rotate-6 ">
          <img
            class="object-cover object-center w-full h-40 max-w-full rounded-lg cursor-pointer "
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="gallery-photo"
            onClick={(e) => openImgBox(e.target.src)}
          />
        </div>
        <div className="fade-img-right hover:-translate-y-12 hover:-translate-y-12 ">
          <img
            class="object-cover object-center w-full h-40 max-w-full rounded-lg cursor-pointer"
            src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="gallery-photo"
            onClick={(e) => openImgBox(e.target.src)}
          />
        </div>
        <div className="fade-img-left hover:-translate-y-12 hover:-rotate-6" >
          <img
            class="object-cover object-center w-full h-40 max-w-full rounded-lg cursor-pointer "
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="gallery-photo"
            onClick={(e) => openImgBox(e.target.src)}
          />
        </div>
        <div className="fade-img-right hover:-translate-y-12 hover:rotate-6">
          <img
            class="object-cover object-center w-full h-40 max-w-full rounded-lg cursor-pointer"
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="gallery-photo"
            onClick={(e) => openImgBox(e.target.src)}
          />
        </div>
        <div className="fade-img-left hover:-translate-y-12 ">
          <img
            class="object-cover object-center w-full h-40 max-w-full rounded-lg cursor-pointer"
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="gallery-photo"
            onClick={(e) => openImgBox(e.target.src)}
          />
        </div>
        <div className="fade-img-right hover:-translate-y-12 hover:-rotate-6">
          <img
            class="object-cover object-center w-full h-40 max-w-full rounded-lg cursor-pointer"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="gallery-photo"
            onClick={(e) => openImgBox(e.target.src)}
          />
        </div>
        <div className="fade-img-left hover:-translate-y-12 hover:-rotate-6">
          <img
            class="object-cover object-center w-full h-40 max-w-full rounded-lg cursor-pointer"
            src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg"
            alt="gallery-photo"
            onClick={(e) => openImgBox(e.target.src)}
          />
        </div>
        <div className="fade-img-right hover:-translate-y-12 ">
          <img
            class="object-cover object-center w-full h-40 max-w-full rounded-lg cursor-pointer"
            src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg"
            alt="gallery-photo"
            onClick={(e) => openImgBox(e.target.src)}
          />
        </div>
        <div className="fade-img-left hover:-translate-y-12 hover:-rotate-6">
          <img
            class="object-cover object-center w-full h-40 max-w-full rounded-lg cursor-pointer"
            src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80"
            alt="gallery-photo"
            onClick={(e) => openImgBox(e.target.src)}
          />
        </div>
      </div>

      {imgBoxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            className="absolute top-5 right-5 text-white text-4xl font-bold cursor-pointer"
            onClick={closeImgBox}
            aria-label="Close modal"
          >
            &times;
          </button>
          <img
            src={selectedImg}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </div>
    // <section class=" overflow-hidden">
    //   <div class="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
    //     <div class="flex flex-col sm:flex-row mx-auto">
    //       <a href="#_">
    //         <img
    //           src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80"
    //           class="rounded-xl  hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
    //           alt="#_"
    //         />
    //       </a>
    //       <a href="#_">
    //         <img
    //           src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
    //           class="rounded-xl  hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
    //           alt="#_"
    //         />
    //       </a>
    //       <a href="#_">
    //         <img
    //           src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //           class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
    //           alt="#_"
    //         />
    //       </a>
    //       <a href="#_">
    //         <img
    //           src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //           class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
    //           alt="#_"
    //         />
    //       </a>
    //       <a href="#_">
    //         <img
    //           src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //           class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
    //           alt="#_"
    //         />
    //       </a>
    //       <a href="#_">
    //         <img
    //           src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //           class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
    //           alt="#_"
    //         />
    //       </a>
    //       <a href="#_">
    //         <img
    //           src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //           class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
    //           alt="#_"
    //         />
    //       </a>
    //       <a href="#_">
    //         <img
    //           src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //           class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
    //           alt="#_"
    //         />
    //       </a>
    //     </div>
    //   </div>
    // </section>
  );
}
