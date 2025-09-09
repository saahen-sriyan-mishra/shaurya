"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HostelLife() {
  const [isWide, setIsWide] = useState(false);
  const [skillLayout, setSkillLayout] = useState("grid-cols-4");

  useEffect(() => {
    function handleResize() {
      setIsWide(window.innerWidth > 1100);
      
      // Determine skill layout based on width
      const width = window.innerWidth;
      if (width >= 1200) {
        setSkillLayout("grid-cols-4"); // 4 columns for large screens
      } else if (width >= 1000) {
        setSkillLayout("grid-cols-3"); // 3 columns for medium-large screens
      } else if (width >= 800) {
        setSkillLayout("grid-cols-2"); // 2 columns for medium screens
      } else {
        setSkillLayout("grid-cols-1"); // 1 column for small screens
      }
    }
    
    handleResize(); // check initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [columnsClass, setColumnsClass] = useState("grid-cols-1");
  const router = useRouter();

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setColumnsClass("grid-cols-4");
      } else if (width >= 900) {
        setColumnsClass("grid-cols-3");
      } else if (width >= 700) {
        setColumnsClass("grid-cols-2");
      } else {
        setColumnsClass("grid-cols-1");
      }
    }; 

    updateColumns(); // Initial check
    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const yellowColor = "#f8d287";
  const blueColor = "#3f51b5";
  
  // State to track which card is flipped on mobile
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  const programCards = [
    {
      image: "Dorm 1",
      title: "Dorm 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      image: "Dorm 2",
      title: "Dorm 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
  ];

  // Add the styles to the document head
  useEffect(() => {
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
    
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Flip Card Component
  const FlipCard = ({ 
    image, 
    title, 
    description,
    index 
  }: { 
    image: string; 
    title: string; 
    description: string;
    index: number;
  }) => {
    return (
      <div 
        className={`group perspective w-[300px] h-[250px] mx-auto flip-card ${window.innerWidth < 768 ? 'cursor-pointer' : ''}`}
        onClick={() => window.innerWidth < 768 && handleCardClick(index)}
      >
        <div className={`relative preserve-3d w-full h-full ${window.innerWidth >= 768 ? 'group-hover:rotate-y-180' : ''} ${flippedCard === index ? 'rotate-y-180' : ''}`}>
          {/* Front of card */}
          <div className="absolute backface-hidden w-full h-full border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="h-[200px] w-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">{image}</span>
            </div>
            <div className="h-[50px] flex items-center justify-center" style={{ backgroundColor: yellowColor }}>
              <span className="text-xl font-bold text-black">{title}</span>
            </div>
          </div>
          
          {/* Back of card */}
          <div className="absolute rotate-y-180 backface-hidden w-full h-full border-2 border-gray-300 rounded-lg overflow-hidden" style={{ backgroundColor: yellowColor }}>
            <div className="w-full h-full flex items-center justify-center p-4">
              <p className="text-center text-black font-bold text-xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const skills = [
    "Physical Environment",
    "Common Area",
    "Amenities",
    "Support Services",
    "Communication Aids",
    "Activities and Programs",
    "Safety & Accessibility",
    "Food",
    "House Keeping",
    "Community Engagement",
  ];

  // Function to render skill boxes with proper layout
  const renderSkillBoxes = () => {
    const width = window.innerWidth;
    
    if (width >= 1200) {
      // 4 columns layout (3, 3, 2, 2) - Last 2 boxes centered
      return (
        <div className="w-full mt-4 flex flex-col items-center gap-4">
          {/* Row 1: 4 boxes */}
          <div className="flex justify-center gap-[30px]">
            {skills.slice(0, 4).map((skill, index) => renderSkillBox(skill, index))}
          </div>
          
          {/* Row 2: 4 boxes */}
          <div className="flex justify-center gap-[30px]">
            {skills.slice(4, 8).map((skill, index) => renderSkillBox(skill, index + 4))}
          </div>
          
          {/* Row 3: 2 boxes centered */}
          <div className="flex justify-center gap-[30px]">
            {skills.slice(8, 10).map((skill, index) => renderSkillBox(skill, index + 8))}
          </div>
        </div>
      );
    } else if (width >= 1000) {
      // 3 columns layout (3, 3, 3, 1) - Last box centered
      return (
        <div className="w-full mt-4 flex flex-col items-center gap-4">
          {/* Row 1: 3 boxes */}
          <div className="flex justify-center gap-[30px]">
            {skills.slice(0, 3).map((skill, index) => renderSkillBox(skill, index))}
          </div>
          
          {/* Row 2: 3 boxes */}
          <div className="flex justify-center gap-[30px]">
            {skills.slice(3, 6).map((skill, index) => renderSkillBox(skill, index + 3))}
          </div>
          
          {/* Row 3: 3 boxes */}
          <div className="flex justify-center gap-[30px]">
            {skills.slice(6, 9).map((skill, index) => renderSkillBox(skill, index + 6))}
          </div>
          
          {/* Row 4: 1 box centered */}
          <div className="flex justify-center gap-[30px]">
            {skills.slice(9, 10).map((skill, index) => renderSkillBox(skill, index + 9))}
          </div>
        </div>
      );
    } else if (width >= 800) {
      // 2 columns layout (5 rows of 2)
      return (
        <div className="w-full mt-4 flex flex-col items-center gap-4">
          {/* 5 rows of 2 boxes each */}
          {[0, 2, 4, 6, 8].map((startIndex) => (
            <div key={startIndex} className="flex justify-center gap-[30px]">
              {skills.slice(startIndex, startIndex + 2).map((skill, index) => 
                renderSkillBox(skill, startIndex + index)
              )}
            </div>
          ))}
        </div>
      );
    } else {
      // 1 column layout (10 rows of 1)
      return (
        <div className="w-full mt-4 flex flex-col items-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-center">
              {renderSkillBox(skill, index)}
            </div>
          ))}
        </div>
      );
    }
  };

  const renderSkillBox = (skill: string, index: number) => {
    return (
      <div
        key={index}
        onClick={() => router.push(`/learning/hostel_life/${1}`)}
        className="w-[250px] h-[100px] border-2 cursor-pointer transition-transform duration-300 hover:scale-105"
        style={{
          backgroundColor: yellowColor,
          borderColor: blueColor,
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-xl font-bold text-center px-2" style={{ color: blueColor }}>
            {skill}
          </p>
        </div>
      </div>
    );
  };

  const content = (
    <>
      {/* Desktop View (shown on medium screens and above) */}
      <div className="hidden md:block">
        <br/><br/>
        {/* First Section */}
        <div className="w-full flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15vh] flex">
            <div style={{ backgroundColor: yellowColor }} className="w-[7%]"></div>
            <div className="w-[93%] flex items-center">
              &nbsp; &nbsp; <span style={{ color: blueColor }} className="text-4xl font-bold">→</span>
              <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">Hostel Life</h1>
            </div>
          </div>

          {/* Bottom 65% */}
          <div className="w-full h-[65vh] flex">
            <div className="w-[7%]"></div>
            <div style={{ backgroundColor: yellowColor }} className="w-[50%] flex items-center p-8">
              <p className="text-justify mb-4 text-black">
                At Shaurya Foundation Trust, our Centre is dedicated to enhancing living standards through comprehensive support. We offer 24/7 assistance, ensuring safety and care. Our facility is well-equipped with essential supplies and provides home-cooked meals. With dedicated teachers for life skills and a variety of engaging activities, we create a nurturing environment that promotes growth, learning, and joy for all.
                <br /><br />
              </p>
            </div>
            <div
              style={{ backgroundColor: yellowColor }}
              className="w-[43%] flex items-center justify-center"
            >
              <div className="relative w-[300px] h-[300px]">
                <Image
                  src="/about/our_center.png"
                  alt="OUR CENTER"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        
        <br/><br/>

        {/* Third section Desktop */}
        <div className="w-full flex flex-col">
          {/* 7% left margin, 93% content area */}
          <div className="flex">
            <div className="w-[7%]"></div>
            <div className="w-[93%]">
              {/* Top part with heading */}
              <div className="h-[10vh] flex items-center">
                <h2 className="text-4xl font-bold" style={{ color: blueColor }}>Dorm Types</h2>
              </div>
              
              {/* 3px height line */}
              <div className="h-[5vh] flex items-center">
                <div className="w-full h-[3px]" style={{ backgroundColor: blueColor }}></div>
              </div>

              {/* Card Grid */}
              <div className="flex justify-center gap-8 mt-8">
                {programCards.map((card, index) => (
                  <FlipCard
                    key={index}
                    index={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <br/><br/>
        <div className="w-full flex flex-col">
          {/* 7% left margin, 93% content area */}
          <div className="flex">
            <div className="w-[7%]"></div>
            <div className="w-[93%]">
              {/* Top part with heading */}
              <div className="h-[10vh] flex items-center">
                <h2 className="text-4xl font-bold" style={{ color: blueColor }}>Learning Skills</h2>
              </div>
              
              {/* 3px height line */}
              <div className="h-[5vh] flex items-center">
                <div className="w-full h-[3px]" style={{ backgroundColor: blueColor }}></div>
              </div>
              
              {/* Grid of Skill Boxes (Desktop View) */}
              {renderSkillBoxes()}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View (shown on screens smaller than medium) */}
      <div className="md:hidden">
        {/* First Section Mobile */}
        <div className="w-full flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15vh] flex items-center bg-white p-4">
            <span style={{ color: blueColor }} className="text-3xl font-bold mr-2">→</span>
            <h1 style={{ color: blueColor }} className="text-3xl font-bold">Hostel Life</h1>
          </div>

          {/* Lower Middle 35% */}
          <div
            style={{ backgroundColor: yellowColor }}
            className="w-full h-[35vh] flex items-center justify-center"
          >
            <div className="relative w-[300px] h-[300px]">
              <Image
                src="/about/our_center.png"
                alt="OUR CENTER"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          {/* Bottom 35% */}
          <div style={{ backgroundColor: yellowColor }} className="w-full h-[35vh] flex items-center p-6">
            <p style={{ color: "black" }} className="text-justify">
              At Shaurya Foundation Trust, our Centre is dedicated to enhancing living standards through comprehensive support. We offer 24/7 assistance, ensuring safety and care. Our facility is well-equipped with essential supplies and provides home-cooked meals. With dedicated teachers for life skills and a variety of engaging activities, we create a nurturing environment that promotes growth, learning, and joy for all.
              <br /><br />
            </p>
          </div>
        </div>

        {/* Second Section Mobile */}
        <div className="w-full flex flex-col p-4">
          {/* Heading - left aligned with 10px padding */}
          <div className="h-[10vh] flex items-center pl-[10px]">
            <h2 className="text-3xl font-bold" style={{ color: blueColor }}>Dorm Types</h2>
          </div>
          
          {/* 3px height line - 90vw wide */}
          <div className="h-[5vh] flex items-center justify-center">
            <div className="w-[90vw] h-[3px]" style={{ backgroundColor: blueColor }}></div>
          </div>

          {/* Card Grid for Mobile */}
          <div className="flex flex-col items-center gap-6 mt-6">
            {programCards.map((card, index) => (
              <FlipCard
                key={index}
                index={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
        <br/><br/>
        
        {/* Third Section Mobile */}
        <div className="w-full flex flex-col p-4">
          {/* Heading - left aligned with 10px padding */}
          <div className="h-[10vh] flex items-center pl-[10px]">
            <h2 className="text-3xl font-bold" style={{ color: blueColor }}>Learning Skills</h2>
          </div>
          
          {/* 3px height line - 90vw wide */}
          <div className="h-[5vh] flex items-center justify-center">
            <div className="w-[90vw] h-[3px]" style={{ backgroundColor: blueColor }}></div>
          </div>
          
          {/* Grid of Skill Boxes (Mobile View) */}
          <div className="w-full flex justify-center">
            <div className="mt-4 grid gap-4 grid-cols-1 justify-items-center">
              {skills.map((skill, index) => renderSkillBox(skill, index))}
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
    </>
  );

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className={isWide ? "w-[95%] mx-auto" : ""}>
        {content}
      </div>
    </div>
  );
}