import React from 'react';
import { Video } from './ui/video';

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-items-center my-20 bg-transparent max-w-7xl mx-auto">
      <div className="px-7">
        <h1 className="text-8xl italic">KITA</h1>
        <p
          className="text-xl sm:text-2xl text-[#FDF6E3] font-light italic mt-2 mb-4"
          style={{ fontFamily: '"Dancing Script", cursive' }} // Calligraphic
        >
          From ‘maybes’ to ‘memories’!
        </p>
        <p className="text-5xl my-8 font-bold -tracking-normal leading-16">
          Connect with strangers who’d rather chase sunsets, crash on events or
          vibe at a cricket match.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <button className="bg-[#ED6D24] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition">
            Join the Community
          </button>
          <button className="bg-white text-[#ED6D24] px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition">
            Explore Merch
          </button>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden max-h-[800px] px-10">
        {/* <img src="/hero.png" alt="hero" className="w-full rounded-xl" /> */}
        <Video />
      </div>
    </section>
  );
};

export default HeroSection;
