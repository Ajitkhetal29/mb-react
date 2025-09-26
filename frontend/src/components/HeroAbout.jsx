import React from 'react'

const HeroAbout = () => {
  return (
     <section className="relative w-full bg-fixed bg-[url('img/backgrounds/hero-2-bg.jpeg')] bg-cover bg-center h-auto md:h-screen py-10 flex items-center"
    >
    <div className="absolute inset-0 bg-black/50"></div>

    <div
      className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="text-white max-w-xl text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gilda-display-regular mb-4 leading-tight">
          Transparent and participative culture
        </h2>
        <p className="mb-4 text-base md:text-lg maven-pro">
          is the bedrock of values at
        </p>
        <h3 className="text-2xl md:text-3xl gilda-display-regular font-semibold mb-4">
          Delta Yards
        </h3>
        <p className="mb-6 text-sm md:text-base maven-pro">
          In every deal we ensure a trusting, quality-driven and participative
          transaction.
        </p>
        <p className="font-medium gilda-display-regular">Delta Yards Pvt Ltd</p>
      </div>

      <div className="w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/jT6hFzQHkco?si=ZtKk3TQzH3HgAZG2"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
      </div>
    </div>
  </section>
  )
}

export default HeroAbout