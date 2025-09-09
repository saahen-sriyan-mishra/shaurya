"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function news_events() {
  const [isWide, setIsWide] = useState(false);
  const [expandedEvents, setExpandedEvents] = useState<number[]>([]);
  
  useEffect(() => {
    function handleResize() {
      setIsWide(window.innerWidth > 1100);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [columnsClass, setColumnsClass] = useState("grid-cols-1");
  const router = useRouter();

  const yellowColor = "#f8d287";
  const blueColor = "#3f51b5";

  const toggleEvent = (index: number) => {
    if (expandedEvents.includes(index)) {
      setExpandedEvents(expandedEvents.filter(i => i !== index));
    } else {
      setExpandedEvents([...expandedEvents, index]);
    }
  };

  const events = [
    {
      date: "Sun, 1 April 2025, 19:00 PM",
      title: "Community Workshop",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
    },
    {
      date: "Mon, 15 April 2025, 14:00 PM",
      title: "Fundraising Gala",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
    },
    {
      date: "Wed, 20 April 2025, 10:00 AM",
      title: "Volunteer Training",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
    },
    {
      date: "Sat, 25 April 2025, 16:00 PM",
      title: "Awareness Campaign",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
    },
    {
      date: "Tue, 30 April 2025, 11:00 AM",
      title: "Annual Meeting",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
    }
  ];

  // News items data
  const newsItems = [
    {
      date: "Friday 1 June 2025",
      title: "Lorius Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      date: "Friday 2 June 2025",
      title: "Lorius Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      date: "Friday 3 June 2025",
      title: "Lorius Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      date: "Friday 4 June 2025",
      title: "Lorius Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    }
  ];

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
              <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">Shaurya Foundation Events</h1>
            </div>
          </div>

          {/* Events Section - Fixed height container */}
          <div className="w-full flex">
            <div className="w-[7%]"></div>
            <div style={{ backgroundColor: yellowColor }} className="w-[93%] min-h-[100vh] p-8">
              <div className="w-full h-full flex flex-col justify-center">
                {/* Blue line at top */}
                <div 
                  className="w-[96%] mx-auto h-[2px] mb-8" 
                  style={{ backgroundColor: blueColor }}
                ></div>
                
                {/* Events list */}
                <div className="w-full flex flex-col space-y-8">
                  {events.map((event, index) => (
                    <div key={index} className="w-full transition-all duration-500 ease-in-out">
                      {/* Event header */}
                      <div className="flex justify-between items-start w-full mb-4">
                        <div className="w-[80%]">
                          <span 
                            className="text-md font-medium block mb-2" 
                            style={{ color: blueColor }}
                          >
                            {event.date}
                          </span>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <h2 className="text-xl font-bold" style={{ color: blueColor }}>
                                {event.title}
                              </h2>
                              <button 
                                onClick={() => toggleEvent(index)}
                                className="ml-4 transition-all duration-700 ease-in-out transform hover:scale-125"
                                style={{ color: blueColor }}
                              >
                                {expandedEvents.includes(index) ? (
                                  <ChevronUp size={24} />
                                ) : (
                                  <ChevronDown size={24} />
                                )}
                              </button>
                            </div>
                            
                            {/* Register Now button */}
                            <div 
                              className="flex items-center justify-center w-[150px] h-[40px] cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 mr-4"
                              style={{ 
                                backgroundColor: blueColor,
                                color: yellowColor
                              }}
                            >
                              <span className="text-lg font-bold">Watch Now</span>
                            </div>
                          </div>
                          
                          {/* Description with smooth transition */}
                          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedEvents.includes(index) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                            <div>
                              <p className="text-black font-medium mb-2">Lorem ipsum</p>
                              <p className="text-black">{event.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Blue line after each event except the last one */}
                      {index < events.length - 1 && (
                        <div 
                          className="w-[96%] mx-auto h-[2px] mt-8" 
                          style={{ backgroundColor: blueColor }}
                        ></div>
                      )}
                    </div>
                  ))}
                  
                  {/* Final blue line after the 5th event */}
                  <div 
                    className="w-[96%] mx-auto h-[2px]" 
                    style={{ backgroundColor: blueColor }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <br/><br/>
          {/* First Section */}
          <div className="w-full flex flex-col">
            {/* Top 15% */}
            <div className="w-full h-[15vh] flex">
              <div style={{ backgroundColor: yellowColor }} className="w-[7%]"></div>
              <div className="w-[93%] flex items-center">
                &nbsp; &nbsp; <span style={{ color: blueColor }} className="text-4xl font-bold">→</span>
                <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">Shaurya News</h1>
              </div>
            </div>


            <div className="w-full flex">
              {/* Left spacer */}
              <div className="w-[7%]"></div>

              {/* Main 93% section */}
              <div className="w-[93%] min-h-[120vh]">

                {/* First row */}
                <div className="flex w-full h-[50vh] mb-8">
                  <div className="w-[45%] flex">
                    <div className="w-full p-14 flex flex-col justify-between" style={{ backgroundColor: yellowColor }}>
                      <div>
                        <p className="text-m font-medium mb-5" style={{ color: blueColor }}>Friday 1 June 2025</p>
                        <div className="h-[2px] w-full mb-5" style={{ backgroundColor: blueColor }}></div>
                        <h3 className="text-l font-bold mb-5" style={{ color: blueColor }}>Lorius Ipsum</h3>
                        <p className="text-m text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                      </div>
                      <div className="mt-8 flex justify-start">
                        <button 
                          className="w-[100px] h-[50px] flex items-center justify-center text-m font-medium border-2 transition-colors duration-300"
                          style={{ 
                            backgroundColor: blueColor, 
                            color: yellowColor,
                            borderColor: blueColor
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = yellowColor;
                            e.currentTarget.style.color = blueColor;
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = blueColor;
                            e.currentTarget.style.color = yellowColor;
                          }}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[10%] bg-transparent"></div>
                  <div className="w-[45%] flex">
                    <div className="w-full p-14 flex flex-col justify-between" style={{ backgroundColor: yellowColor }}>
                      <div>
                        <p className="text-m font-medium mb-5" style={{ color: blueColor }}>Friday 1 June 2025</p>
                        <div className="h-[2px] w-full mb-5" style={{ backgroundColor: blueColor }}></div>
                        <h3 className="text-l font-bold mb-5" style={{ color: blueColor }}>Lorius Ipsum</h3>
                        <p className="text-m text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                      </div>
                      <div className="mt-8 flex justify-start">
                        <button 
                          className="w-[100px] h-[50px] flex items-center justify-center text-m font-medium border-2 transition-colors duration-300"
                          style={{ 
                            backgroundColor: blueColor, 
                            color: yellowColor,
                            borderColor: blueColor
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = yellowColor;
                            e.currentTarget.style.color = blueColor;
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = blueColor;
                            e.currentTarget.style.color = yellowColor;
                          }}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <br /> <br />

                {/* Second row */}
                <div className="flex w-full h-[50vh]">
                  <div className="w-[45%] flex">
                    <div className="w-full p-14 flex flex-col justify-between" style={{ backgroundColor: yellowColor }}>
                      <div>
                        <p className="text-m font-medium mb-5" style={{ color: blueColor }}>Friday 1 June 2025</p>
                        <div className="h-[2px] w-full mb-5" style={{ backgroundColor: blueColor }}></div>
                        <h3 className="text-l font-bold mb-5" style={{ color: blueColor }}>Lorius Ipsum</h3>
                        <p className="text-m text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                      </div>
                      <div className="mt-8 flex justify-start">
                        <button 
                          className="w-[100px] h-[50px] flex items-center justify-center text-m font-medium border-2 transition-colors duration-300"
                          style={{ 
                            backgroundColor: blueColor, 
                            color: yellowColor,
                            borderColor: blueColor
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = yellowColor;
                            e.currentTarget.style.color = blueColor;
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = blueColor;
                            e.currentTarget.style.color = yellowColor;
                          }}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[10%] bg-transparent"></div>
                  <div className="w-[45%] flex">
                    <div className="w-full p-14 flex flex-col justify-between" style={{ backgroundColor: yellowColor }}>
                      <div>
                        <p className="text-m font-medium mb-5" style={{ color: blueColor }}>Friday 1 June 2025</p>
                        <div className="h-[2px] w-full mb-5" style={{ backgroundColor: blueColor }}></div>
                        <h3 className="text-l font-bold mb-5" style={{ color: blueColor }}>Lorius Ipsum</h3>
                        <p className="text-m text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                      </div>
                      <div className="mt-8 flex justify-start">
                        <button 
                          className="w-[100px] h-[50px] flex items-center justify-center text-m font-medium border-2 transition-colors duration-300"
                          style={{ 
                            backgroundColor: blueColor, 
                            color: yellowColor,
                            borderColor: blueColor
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = yellowColor;
                            e.currentTarget.style.color = blueColor;
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = blueColor;
                            e.currentTarget.style.color = yellowColor;
                          }}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
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
            <h1 style={{ color: blueColor }} className="text-3xl font-bold">Shaurya Foundation Events</h1>
          </div>

          {/* Events Section - Fixed height container */}
          <div style={{ backgroundColor: yellowColor }} className="w-full min-h-[100vh] p-6">
            <div className="w-full h-full flex flex-col justify-center">
              {/* Blue line at top */}
              <div 
                className="w-[96%] mx-auto h-[2px] mb-6" 
                style={{ backgroundColor: blueColor }}
              ></div>
              
              {/* Events list */}
              <div className="w-full flex flex-col space-y-6">
                {events.map((event, index) => (
                  <div key={index} className="w-full transition-all duration-500 ease-in-out">
                    {/* Event header */}
                    <div className="flex flex-col w-full mb-4">
                      <span 
                        className="text-sm font-medium block mb-2" 
                        style={{ color: blueColor }}
                      >
                        {event.date}
                      </span>
                      
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <h2 className="text-lg font-bold" style={{ color: blueColor }}>
                            {event.title}
                          </h2>
                          <button 
                            onClick={() => toggleEvent(index)}
                            className="ml-3 transition-all duration-700 ease-in-out transform hover:scale-125"
                            style={{ color: blueColor }}
                          >
                            {expandedEvents.includes(index) ? (
                              <ChevronUp size={20} />
                            ) : (
                              <ChevronDown size={20} />
                            )}
                          </button>
                        </div>
                        
                        {/* Register Now button */}
                        <div 
                          className="flex items-center justify-center w-[100px] h-[35px] cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 ml-2"
                          style={{ 
                            backgroundColor: blueColor,
                            color: yellowColor
                          }}
                        >
                          <span className="text-sm font-bold">Register Now</span>
                        </div>
                      </div>
                      
                      {/* Description with smooth transition */}
                      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedEvents.includes(index) ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                        <div>
                          <p className="text-black text-sm font-medium mb-1">Lorem ipsum</p>
                          <p className="text-black text-sm">{event.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Blue line after each event except the last one */}
                    {index < events.length - 1 && (
                      <div 
                        className="w-[96%] mx-auto h-[2px] mt-6" 
                        style={{ backgroundColor: blueColor }}
                      ></div>
                    )}
                  </div>
                ))}
                
                {/* Final blue line after the 5th event */}
                <div 
                  className="w-[96%] mx-auto h-[2px]" 
                  style={{ backgroundColor: blueColor }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          {/* First Section Mobile */}
          <div className="w-full flex flex-col">
            {/* Top 15% */}
            <div className="w-full h-[15vh] flex items-center bg-white p-4">
              <span style={{ color: blueColor }} className="text-3xl font-bold mr-2">→</span>
              <h1 style={{ color: blueColor }} className="text-3xl font-bold">Shaurya News</h1>
            </div>
            
            <div className="w-full min-h-[155vh] px-10">
              <div className="w-full h-full flex flex-col space-y-10">
                {newsItems.map((item, index) => (
                  <div key={index} className="w-full p-14 flex flex-col justify-between" style={{ backgroundColor: yellowColor, minHeight: '35vh' }}>
                    <div>
                      <p className="text-m font-medium mb-5" style={{ color: blueColor }}>{item.date}</p>
                      <div className="h-[2px] w-full mb-5" style={{ backgroundColor: blueColor }}></div>
                      <h3 className="text-l font-bold mb-5" style={{ color: blueColor }}>{item.title}</h3>
                      <p className="text-m text-black">{item.description}</p>
                    </div>
                    <div className="mt-8 flex justify-start">
                      <button 
                        className="w-[100px] h-[50px] flex items-center justify-center text-m font-medium border-2 transition-colors duration-300"
                        style={{ 
                          backgroundColor: blueColor, 
                          color: yellowColor,
                          borderColor: blueColor
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = yellowColor;
                          e.currentTarget.style.color = blueColor;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = blueColor;
                          e.currentTarget.style.color = yellowColor;
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
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