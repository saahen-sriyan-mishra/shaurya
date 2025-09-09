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
    <div className="group perspective w-64 h-80 mx-auto flip-card">
      <div className="relative preserve-3d w-full h-full">
        {/* Front of card */}
        <div className="absolute backface-hidden w-full h-full border rounded-lg overflow-hidden bg-white shadow-md">
          <div className="h-48 w-full overflow-hidden">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {/* Placeholder for image */}
              <span className="text-gray-500">Image: {image}</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute rotate-y-180 backface-hidden w-full h-full border rounded-lg overflow-hidden bg-white p-4 shadow-md">
          <div className="h-full overflow-y-auto">
            <h3 className="font-semibold text-lg mb-3">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Tab Component
// Tab Component - Corrected image and video paths
const TabComponent = () => {
  return (
    <div className="w-full border-2 border-gray-300 rounded-lg overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full h-[600px]">
        {/* Left Section (20% width) - Arrow and buttons */}
<div className="w-1/5 flex flex-col border-r-2 border-gray-300 pt-[10px]">
  {/* Bottom 80% height - 5 buttons */}
  <div className="h-4/5 flex flex-col justify-between items-center py-4">
    {[
      { src: "/home/ilp.png", label: "ILP" },
      { src: "/home/workunit.png", label: "WORK UNIT" },
      { src: "/home/hostel.png", label: "HOSTEL" },
      { src: "/home/dsw.png", label: "DSW TRAINING" },
      { src: "/home/register.png", label: "REGISTER" },
    ].map(({ src, label }) => (
      <div key={label} className="text-center">
        <div className="w-[65px] h-[65px] mx-auto rounded-lg mb-2 overflow-hidden relative">
          <Image
            src={src}
            alt={label}
            fill
            className="object-contain"
          />
        </div>
        <span className="text-sm font-medium mb-5 block">{label}</span>
      </div>
    ))}
  </div>
</div>

        {/* Right Section (80% width) */}
        <div className="w-4/5 flex flex-col">
          {/* Top 20% height - Welcome text */}
          <div className="h-1/5 flex items-center pl-6 border-b-2 border-gray-300">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to Shaurya Foundation Trust</h1>
          </div>

          {/* Bottom 80% height - Divided into two sections without border */}
          <div className="h-4/5 flex">
            {/* Left 50% - About us text */}
            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">What are we</h2>
              <p className="text-gray-700 mb-6 text-justify">
                Empowering Neurodiversity: Building Skills for a Brighter Future <br/><br/>
                Shaurya Foundation Trust is a non-profit organization dedicated to empowering neurodiverse individuals. We provide training in life skills, employment readiness, and independent living, working closely with individuals and families to foster self-confidence and independence. By advocating for neurodiversity and creating an inclusive environment, we aim to change perceptions and build a supportive community where everyone can thrive.
              </p>
              <Link
                href="/about/our_center"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-fit"
              >
                Learn More
              </Link>
            </div>

            {/* Right 50% - Video */}
            <div className="w-1/2 flex items-center justify-center p-6">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-[310px] h-[450px] rounded-lg overflow-hidden flex items-center justify-center">
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
      <div className="lg:hidden w-full flex flex-col border-2 border-gray-300 rounded-lg">
        {/* Top 20% height - Welcome text */}
        <div className="h-1/5 min-h-[100px] flex items-center justify-center p-4 border-b-2 border-gray-300">
          <h1 className="text-4xl font-bold text-blue-600 text-center">Welcome to Shaurya Foundation Trust</h1>
        </div>

        {/* Middle 20% height - Three buttons */}
        <div className="h-1/5 min-h-[100px] flex justify-around items-center p-4 border-b-2 border-gray-300">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-lg mb-2 overflow-hidden relative">
              <Image
                src="/home/ilp.png"
                alt="ILP"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium">ILP</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-lg mb-2 overflow-hidden relative">
              <Image
                src="/home/workunit.png"
                alt="WORK UNIT"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium">WORK UNIT</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-lg mb-2 overflow-hidden relative">
              <Image
                src="/home/hostel.png"
                alt="HOSTEL"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium">HOSTEL</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-lg mb-2 overflow-hidden relative">
              <Image
                src="/home/DWS.png"
                alt="DWS"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium">DWS Training</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-lg mb-2 overflow-hidden relative">
              <Image
                src="/home/register.png"
                alt="Register"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium">Register</span>
          </div>
        </div>

        {/* Bottom 60% height - Divided into two sections without border */}
        <div className="h-3/5 flex flex-col">
          {/* Top 50% - About us text */}
          <div className="h-1/2 p-6 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-4 text-center">What are we</h2>
            <p className="text-gray-700 mb-6 text-justify">
              Empowering Neurodiversity: Building Skills for a Brighter Future <br/><br/>
              Shaurya Foundation Trust is a non-profit organization dedicated to empowering neurodiverse individuals. We provide training in life skills, employment readiness, and independent living, working closely with individuals and families to foster self-confidence and independence. By advocating for neurodiversity and creating an inclusive environment, we aim to change perceptions and build a supportive community where everyone can thrive.
            </p>
            <Link
                href="/about/our_center"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-fit"
              >
                Learn More
              </Link>
          </div>

          {/* Bottom 50% - Video */}
          <div className="h-1/2 p-6 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[310px] h-[500px] rounded-lg overflow-hidden flex items-center justify-center">
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



const NewsCard = ({
  date,
  headline,
  content
}: {
  date: string;
  headline: string;
  content: string;
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white h-full flex flex-col">
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-gray-500 text-sm mb-3">{date}</div>
        <div className="w-full h-px bg-gray-200 mb-4"></div>
        <h3 className="font-bold text-lg mb-3">{headline}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{content}</p>
        <div className="mt-auto">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

const programCards = [
  {
    image: "RUBBER",
    title: "RUBBER",
    description: "Learn essential daily living skills including personal hygiene, meal preparation, and household management in a supportive environment."
  },
  {
    image: "PACKAGING",
    title: "PACKAGING",
    description: "Develop money management skills, budgeting, and understanding financial responsibilities for independent living."
  },
  {
    image: "SAGAR RATNA",
    title: "SAGAR RATNA",
    description: "Hands-on training in various vocational fields to develop marketable skills for meaningful employment opportunities."
  },
  {
    image: "SATA VIKAS",
    title: "SATA VIKAS",
    description: "One-on-one coaching and support to help individuals succeed in their workplace and develop career advancement skills."
  },
  {
    image: "HOSTEL",
    title: "HOSTEL",
    description: "Assistance with finding suitable employment opportunities that match individual skills, interests, and abilities."
  },
  {
    image: "DAY-BOARDING",
    title: "DAY-BOARDING",
    description: "Ongoing support and accommodations to ensure success and satisfaction in open employment settings."
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Component */}
        <TabComponent />
      </div>
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

// News Section Component
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
            date="Monday 1 January 2024"
            headline="New Vocational Training Program Launched"
            content="We are excited to announce the launch of our new vocational training program designed to provide practical skills for individuals with special needs to enter the workforce."
          />
          
          <NewsCard
            date="Friday 15 December 2023"
            headline="Annual Community Integration Event Success"
            content="Our annual community integration event was a tremendous success with record participation. The event focused on building connections and fostering understanding."
          />
          
          <NewsCard
            date="Wednesday 1 November 2023"
            headline="Partnership with Local Businesses"
            content="We've established new partnerships with several local businesses to create more employment opportunities for our program participants."
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