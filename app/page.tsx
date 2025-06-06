import HeroSection from '@/components/HeroSection';
import Community from '@/components/Community';
import Testimonial from '@/components/Testimonial';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import ProductSection from '@/components/ProductSection';
import { Marquee } from '@/components/magicui/marquee';

import { Lora } from 'next/font/google';
import Image from 'next/image';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const socialMedia = [
  { id: 1, tag: 'Instagram: @kita.app' },
  { id: 2, tag: 'Twitter / X: @kitatheapp' },
  { id: 3, image: '/sliderImage.png' },
  { id: 4, tag: 'LinkedIn: @kita.app' },
  { id: 5, tag: 'Instagram: @kita.unfiltered' },
  { id: 6, tag: 'Facebook: @kita.app' },
];

export default function Home() {
  return (
    <div className="bg-[#0e3c39] text-white scroll-smooth">
      <HeroSection />

      <Community />
      <Testimonial />

      {/* 👇 Add an ID here for the Explore Merch scroll target */}
      <section id="products">
        <ProductSection />
      </section>

      <Marquee className="[--duration:20s]" pauseOnHover>
        {socialMedia.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 mx-4 rounded-xl space-x-10 flex items-center"
          >
            <div className="p-4">
              <p
                className={`${lora.className} text-white font-normal uppercase text-5xl tracking-wider space-x-3`}
              >
                {item.tag}
              </p>
              {item.image && (
                <Image
                  src={item.image}
                  alt="slider"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
        ))}
      </Marquee>

      <ContactUs />

      {/* 👇 Add an ID here for the Join the Community scroll target */}
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
