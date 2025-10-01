"use client"

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play, TvMinimalPlay } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

// Styles
const styles = `
.perspective {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.backface-hidden {
  backface-visibility: hidden;
}

.flip-card:hover .preserve-3d {
  transform: rotateY(180deg);
}
`;

// Add the styles to the document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

// Flip Card Component
const FlipCard = ({ 
  image, 
  title, 
  description 
}: { 
  image: string; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="group perspective w-72 h-[28rem] mx-auto flip-card">
  <div className="relative preserve-3d w-full h-full">
    {/* Front of card */}
    <div className="absolute backface-hidden w-full h-full border overflow-hidden bg-white shadow-md flex flex-col">
      {/* Image container - 90% height */}
      <div className="h-[90%] w-full overflow-hidden">
        <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Title container - remaining 10% height */}
      <div
        className="h-[10%] p-4 flex items-center justify-center"
        style={{ backgroundColor: '#3f51b5' }}
      >
        <h3 className="font-semibold text-lg mb-0 text-center text-white">{title}</h3>
      </div>
    </div>

    {/* Back of card */}
    <div
      className="absolute rotate-y-180 backface-hidden w-full h-full border overflow-hidden shadow-md"
      style={{ backgroundColor: '#f8d287' }}
    >
      <div className="h-full overflow-y-auto p-4">
        <h3 className="font-semibold text-lg mb-3 text-black">{title}</h3>
        <p className="text-black">{description}</p>
      </div>
    </div>
  </div>
</div>
  );
};

// Tab Component
const TabComponent = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full h-[650px]">
        {/* Left Section (20% width) - Arrow and buttons */}
        <div className="w-1/5 flex flex-col pt-[10px]">
          {/* Bottom 80% height - 5 buttons */}
          <div className="h-4/5 flex flex-col items-center py-4">
  {[
    { src: "/tab/ILP.PNG", label: "ILP" },
    { src: "/tab/WORK_UNITS.PNG", label: "WORK UNIT" },
    { src: "/tab/HOSTEL.PNG", label: "HOSTEL" },
    { src: "/tab/DSW_TRAINING.PNG", label: "DSW TRAINING" },
  ].map(({ src, label }) => (
    <div key={label} className="flex-1 w-full flex flex-col justify-center items-center">
      <div className="w-[100px] h-[100px] relative mb-2">
        <Image
          src={src}
          alt={label}
          fill
          className="object-fill"
        />
      </div>
      <span className="text-l font-bold mt-1 text-[#3f51b5] pb-[20px]">{label}</span>
    </div>
  ))}
</div>
        </div>

        {/* Right Section (80% width) */}
        <div className="w-4/5 flex flex-col">
          {/* Top 20% height - Welcome text */}
          <div className="h-1/5 flex items-center pl-6" style={{ backgroundColor: '#3f51b5' }}>
            <h1 className="text-4xl font-bold text-white">Welcome to Shaurya Foundation Trust</h1>
          </div>

          {/* Bottom 80% height - Divided into two sections without border */}
          <div className="h-4/5 flex">
            {/* Left 50% - About us text */}
            <div className="w-1/2 p-6 flex flex-col justify-center" style={{ backgroundColor: '#f8d287' }}>
              <h2 className="text-3xl font-bold mb-4 text-[#3f51b5]">What are we</h2>
              <p className="text-[#3f51b5] mb-6 text-justify">
                Empowering Neurodiversity: Building Skills for a Brighter Future <br/><br/>
                Shaurya Foundation Trust is a non-profit organization dedicated to empowering neurodiverse individuals. We provide training in life skills, employment readiness, and independent living, working closely with individuals and families to foster self-confidence and independence. By advocating for neurodiversity and creating an inclusive environment, we aim to change perceptions and build a supportive community where everyone can thrive.
              </p>
              <Link
  href="/about/our_center"
  className="px-6 py-3 transition-colors w-fit border"
  style={{ 
    backgroundColor: '#3f51b5', 
    borderColor: '#f8d287',
    borderWidth: '1px',
    color: '#f8d287'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = '#3f51b5';
    e.currentTarget.style.borderColor = '#3f51b5';
    e.currentTarget.style.borderWidth = '1px';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#3f51b5';
    e.currentTarget.style.color = '#f8d287';
    e.currentTarget.style.borderColor = '#f8d287';
    e.currentTarget.style.borderWidth = '1px';
  }}
>
  Learn More
</Link>
            </div>

            {/* Right 50% - Video */}
            <div className="w-1/2 flex items-center justify-center p-6" style={{ backgroundColor: '#f8d287' }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-[310px] h-[450px]  overflow-hidden flex items-center justify-center">
                  <video
                    src="/home/gif_loop.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full flex flex-col">
        {/* Top 20% height - Welcome text */}
        <div className="min-h-[100px] flex items-center justify-center p-4" style={{ backgroundColor: '#3f51b5' }}>
          <h1 className="text-3xl font-bold text-white text-center">Welcome to Shaurya Foundation Trust</h1>
        </div>

        {/* Middle section - Four buttons in 2x2 grid */}
        <div className="min-h-[200px] p-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Row 1 */}
            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-[100px] h-[100px] relative mb-2 mx-auto">
                  <Image
                    src="/tab/ILP.PNG"
                    alt="ILP"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-bold text-[#3f51b5]">ILP</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-[100px] h-[100px] relative mb-2 mx-auto">
                  <Image
                    src="/tab/WORK_UNITS.PNG"
                    alt="WORK UNIT"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-bold text-[#3f51b5]">WORK UNIT</span>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-[100px] h-[100px] relative mb-2 mx-auto">
                  <Image
                    src="/tab/HOSTEL.PNG"
                    alt="HOSTEL"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-bold text-[#3f51b5]">HOSTEL</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-[100px] h-[100px] relative mb-2 mx-auto">
                  <Image
                    src="/tab/DSW_TRAINING.PNG"
                    alt="DWS"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-bold text-[#3f51b5]">DSW Training</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 60% height - Divided into two sections without border */}
        <div className="flex flex-col">
          {/* Top 50% - About us text */}
          <div className="p-6 flex flex-col justify-center items-center" style={{ backgroundColor: '#f8d287' }}>
            <h2 className="text-2xl font-bold mb-4 text-center text-[#3f51b5]">What are we</h2>
            <p className="text-[#3f51b5] mb-6 text-justify">
              Empowering Neurodiversity: Building Skills for a Brighter Future <br/><br/>
              Shaurya Foundation Trust is a non-profit organization dedicated to empowering neurodiverse individuals. We provide training in life skills, employment readiness, and independent living, working closely with individuals and families to foster self-confidence and independence. By advocating for neurodiversity and creating an inclusive environment, we aim to change perceptions and build a supportive community where everyone can thrive.
            </p>
            <Link
  href="/about/our_center"
  className="px-6 py-3 transition-colors w-fit border"
  style={{ 
    backgroundColor: '#3f51b5', 
    borderColor: '#f8d287',
    borderWidth: '1px',
    color: '#f8d287'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = '#3f51b5';
    e.currentTarget.style.borderColor = '#3f51b5';
    e.currentTarget.style.borderWidth = '1px';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#3f51b5';
    e.currentTarget.style.color = '#f8d287';
    e.currentTarget.style.borderColor = '#f8d287';
    e.currentTarget.style.borderWidth = '1px';
  }}
>
  Learn More
</Link>
          </div>

          {/* Bottom 50% - Video */}
          <div className="p-6 flex items-center justify-center" style={{ backgroundColor: '#f8d287' }}>
            <div className="w-full flex items-center justify-center">
              <div className="w-full max-w-[310px] h-[450px] rounded-lg overflow-hidden flex items-center justify-center">
                <video
                  src="/home/gif_loop.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



// Update the programCards array with image paths
const programCards = [
  {
    image: "/home/Rubber_unit.jpg",
    title: "RUBBER",
    description: "The Rubber Unit, a collaboration between Shaurya Foundation Trust and Rubson Polymers, empowers neurodiverse individuals to gain hands-on experience in the automotive sector. Trainees actively participate in peeling and popping rubber components, fostering independence and skill development for future employment."
  },
  {
    image: "/home/Packaging.jpg",
    title: "PACKAGING",
    description: "In partnership with Nippon Maruti, the Packaging Panthers unit provides neurodiverse individuals with essential skills in folding, filling, and packing waxing kit boxes. This collaborative effort not only enhances their employability but also instills a sense of accomplishment and teamwork among trainees."
  },
  {
    image: "/home/Sagar Ratna.jpg",
    title: "SAGAR RATNA",
    description: "Sagar Ratna represents Shaurya Foundation Trust's collaboration with Sagar Ratna, currently operational at Delhi High Court and Mathura Road. This initiative offers neurodiverse individuals opportunities to engage in meaningful work, enhancing their skills while contributing to a supportive community environment."
  },
  {
    image: "/home/Sata Vikas.jpg",
    title: "VIKAS GROUP",
    description: "The Vikas Group initiative helps neurodiverse trainees integrate into traditional work environments, focusing on tasks like checking, cleaning, and packaging automobile parts. This program fosters job skills, social interactions, and teamwork, promoting independence and future employment opportunities."
  },
  {
    image: "/home/Hostel2.jpg",
    title: "HOSTEL",
    description: "Our hostel provides a nurturing, home-like environment with both 3-shared and 2-shared dorms. Equipped with essential facilities such as a lunch area and entertainment zone, we ensure that residents enjoy a comfortable space conducive to learning and personal growth."
  },
  {
    image: "/home/Day boarding.jpg",
    title: "DAY-BOARDING",
    description: "Shaurya Foundation Trust offers day-boarding training alongside Independent Living Program (ILP). Trainees can develop basic skills while gaining practical experience, enabling them to earn as a side hustle. This program fosters independence and prepares them for future employment opportunities."
  }
];

// Hero Section Component - Background only
const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/home/hero.png"
        alt="Shaurya team"
        fill
        priority
        className="object-cover object-center-top opacity-50"
        style={{ objectPosition: "center top" }}
      />
    </div>
  );
};

// Hero Section Component - Content only
const HeroContent = () => {
  return (
    <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
      >
        SHAURYA <span className="block text-2xl sm:text-3xl md:text-4xl mt-2">FOUNDATION</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8"
      >
        Transforming lives through holistic education, life skills, and community integration for individuals with special needs.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
      </motion.div>
    </div>
  );
};

// Hero Section Component - Scroll button only
const HeroScrollButton = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <button 
        onClick={() => {
          const el = document.getElementById('services');
          if (el) {
            const yOffset = -80; // adjust this value as needed
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}
        className="text-white animate-bounce"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
    </div>
  );
};

// Initiatives Section Component
const InitiativesSection = () => {
  return (
    <section id="services" className="relative py-20 bg-gray-50">

        {/* Tab Component */}
        <TabComponent />
    </section>
  );
};

// Program Cards Section Component
const ProgramCardsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Work Unit and Open Employment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive programs designed to support individuals with special needs in various aspects of life and work.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {programCards.map((card, index) => (
            <FlipCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsCard = ({
  date,
  headline,
  content,
  link // Add a new prop for the link
}: {
  date: string;
  headline: string;
  content: string;
  link: string; // Add link prop type definition
}) => {
  return (
    <div className="border overflow-hidden shadow-m h-full flex flex-col"
    style={{ backgroundColor: '#f8d287' }}>
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-sm mb-3" style={{ color: '#3f51b5' }}>
  {date}
</div>

<div className="w-full h-px bg-gray-500 mb-4"></div>

<h3 className="font-bold text-lg mb-3">
  {headline}
</h3>

<p className="mb-4 flex-grow" style={{ color: '#3f51b5' }}>
  {content}
</p>

<div className="mt-auto">

         <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-4 py-2 text-white  transition-colors hover:opacity-90"
  style={{ backgroundColor: '#3f51b5' }}
>
  Read More
</a>
        </div>
      </div>
    </div>
  );
};

// Update the NewsSection component to include links
const NewsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Latest News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings and events at Shaurya Foundation
          </p>
        </div>

        {/* News Cards Grid - Simple 1x3 or 3x1 layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NewsCard
            date="Friday 16 May 2025"
            headline="The Changemakers: Inspiring Leaders Shaping The Future In 2025"
            content="Arpita Yadav with 23 years of experience; is a dedicated advocate for neurodiversity and empowerment, currently serving as the Director of the Shaurya Foundation Trust in Palwal. She rose to national prominence as a contestant on Kaun Banega Crorepati, where she effectively raised awareness."
            link="https://www.businessworld.in/article/the-changemakers-inspiring-leaders-shaping-the-future-in-2025-556911"
          />
          
          <NewsCard
            date="Wednesday 11 September 2024"
            headline="Warm & sweet: Delhi HC cafe serves diversity dessert with paycheque"
            content="Its 10 neurodiverse staff members had collectively reached a milestone about a month afterCJI DY Chandrachud had opened the cafe. On Tuesday, they got their first paycheques from acting chief justice Manmohan."
            link="https://timesofindia.indiatimes.com/city/delhi/warm-sweet-delhi-hc-cafe-serves-diversity-dessert-with-paycheque/articleshow/113254900.cms#"
          />
          
          <NewsCard
            date="Wednesday 11 September 2024"
            headline="Neurodivergent staff run the show at this new Delhi HC café."
            content="On stepping inside the café, visitors are greeted by a warm and charming Arunima Bhaduri, who manages a kiosk of a non-profit, Shaurya Foundation Trust, at Sagar Express. Hand-made paintings, coasters, brownies, cookies, mugs, and water bottles made by neurodivergent persons."
            link="https://theprint.in/judiciary/neurodivergent-staff-run-the-show-at-this-new-delhi-hc-cafe-its-fast-becoming-lawyers-favourite-haunt/2260679/"
          />
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // start animation when top of section hits 80% of viewport
            toggleActions: "play none none reverse", // animation behavior
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
  <main className="relative">
  <div className="fixed top-0 left-0 w-full h-screen z-10 bg-gray-900">
    <HeroBackground />
    <motion.div 
      className="relative h-full flex flex-col items-center justify-center pt-16"
      style={{ y: useTransform(useScroll().scrollY, [0, 1000], [0, -200]) }}
    >
      <HeroContent />
      <div className="absolute bottom-10">
        <HeroScrollButton />
      </div>
    </motion.div>
  </div>



  <div className="relative z-20 mt-[100vh]">

      <InitiativesSection />
    <ProgramCardsSection />
    <NewsSection />
  </div>
</main>
);
}