"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Visit() {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsWide(window.innerWidth > 1100);
    }
    handleResize(); // check initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const yellowColor = "#f8d287";
  const blueColor = "#3f51b5";

  const content = (
    <section>
      {/* Desktop View (shown on medium screens and above) */}
      <div className="hidden md:block">
        <br/><br/>
        {/* First Section */}
        <div className="w-full h-screen flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15%] flex">
            <div style={{ backgroundColor: yellowColor }} className="w-[7%]"></div>
            <div className="w-[93%] flex items-center">
              &nbsp; &nbsp; <span style={{ color: blueColor }} className="text-4xl font-bold">→</span>
              <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">Visit</h1>
            </div>
          </div>

          {/* Middle 20% */}
          <div className="w-full h-[20%] flex">
            <div className="w-[7%] bg-white"></div>
            <div style={{ backgroundColor: yellowColor }} className="w-[93%] flex items-center">
              <p style={{ color: blueColor }} className="ml-6 italic text-2xl">
  Empowering Lives Through Comprehensive Care and Support
</p>
            </div>
          </div>

          {/* Bottom 65% */}
          <div className="w-full h-[65vh] flex">
            <div className="w-[7%]"></div>
            <div style={{ backgroundColor: blueColor }} className="w-[50%] flex items-center p-8">
              <p className="text-justify mb-4 text-white">
                At Shaurya Foundation Trust, our Centre is dedicated to enhancing living standards through comprehensive support. We offer 24/7 assistance, ensuring safety and care. Our facility is well-equipped with essential supplies and provides home-cooked meals. With dedicated teachers for life skills and a variety of engaging activities, we create a nurturing environment that promotes growth, learning, and joy for all.
              </p>
            </div>
            <div
              style={{ backgroundColor: blueColor }}
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

        <br />
        <br />

        {/* Second Section - Open Campus */}
        <div className="w-full flex flex-col">
          {/* 7% left margin, 93% content area */}
          <div className="flex">
            <div className="w-[7%]"></div>
            <div className="w-[93%]">
              {/* Top part with heading */}
              <div className="h-[10vh] flex items-center">
                <h2 className="text-4xl font-bold" style={{ color: blueColor }}>OPEN CAMPUS</h2>
              </div>
              
              {/* 3px height line */}
              <div className="h-[5vh] flex items-center">
                <div className="w-full h-[3px]" style={{ backgroundColor: blueColor }}></div>
              </div>
              
              {/* Lorius ipsum text */}
              <div className="h-[20vh] flex items-center">
                <p className="text-lg" style={{ color: blueColor }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                </p>
              </div>
              
              {/* Button */}
              <div className="h-[5vh] flex items-center">
                <button 
  className="flex items-center justify-center font-bold transition-all duration-300"
  style={{ 
    width: '300px', 
    height: '40px',
    backgroundColor: blueColor,
    border: `1px solid ${blueColor}`,
    color: yellowColor
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = 'transparent';
    target.style.color = blueColor;
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = blueColor;
    target.style.color = yellowColor;
  }}
>
  BOOK A CAMPUS TOUR
</button>
              </div>
              
              {/* Google Map */}
              <div className="h-[50vh] w-full mt-[20px] pr-[20px]">
                <iframe
  src="https://maps.google.com/maps?q=40.7069,-74.0113&z=15&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
              </div>
            </div>
          </div>
        </div>
        <br/><br/><br/>
        {/* Third Section - contact */}
        <div className="w-full flex flex-col">
          {/* 7% left margin, 93% content area */}
          <div className="flex">
            <div className="w-[7%]"></div>
            <div className="w-[93%]">
              {/* Top part with heading */}
              <div className="h-[10vh] flex items-center">
                <h2 className="text-4xl font-bold" style={{ color: blueColor }}>CONTACT LIST</h2>
              </div>
              
              {/* 3px height line */}
              <div className="h-[5vh] flex items-center">
                <div className="w-full h-[3px]" style={{ backgroundColor: blueColor }}></div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        
        {/* Three Boxes Section */}
        <div className="w-full flex flex-col">
          <div className="flex">
            <div className="w-[7%]"></div>
            <div className="w-[93%] flex justify-between">
              {/* Box 1 */}
              <div 
                className="flex flex-col items-center justify-center"
                style={{
                  width: '340px',
                  height: '80px',
                  border: `2px solid ${blueColor}`,
                  backgroundColor: yellowColor
                }}
              >
                <div className="text-xl font-bold" style={{ color: blueColor }}>
General Inquiries</div>
                <div className="text-lg font-bold" style={{ color: blueColor }}>123</div>
              </div>
              
              {/* Box 2 */}
              <div 
                className="flex flex-col items-center justify-center"
                style={{
                  width: '340px',
                  height: '80px',
                  border: `2px solid ${blueColor}`,
                  backgroundColor: yellowColor
                }}
              >
                <div className="text-xl font-bold" style={{ color: blueColor }}>
Enrollment Office</div>
                <div className="text-lg font-bold" style={{ color: blueColor }}>456</div>
              </div>
              
              {/* Box 3 */}
              <div 
                className="flex flex-col items-center justify-center"
                style={{
                  width: '340px',
                  height: '80px',
                  border: `2px solid ${blueColor}`,
                  backgroundColor: yellowColor
                }}
              >
                <div className="text-xl font-bold" style={{ color: blueColor }}>
Parent Inquiries</div>
                <div className="text-lg font-bold" style={{ color: blueColor }}>789</div>
              </div>
            </div>
          </div>
        </div>
        <br/><br/>
      </div>

      {/* Mobile View (shown on screens smaller than medium) */}
      <div className="md:hidden">
        {/* First Section Mobile */}
        <div className="w-full min-h-screen flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15%] flex items-center bg-white p-4">
            <span style={{ color: blueColor }} className="text-3xl font-bold mr-2">→</span>
            <h1 style={{ color: blueColor }} className="text-3xl font-bold">Visit</h1>
          </div>

          {/* Upper Middle 15% */}
          <div style={{ backgroundColor: yellowColor }} className="w-full h-[15%] flex items-center p-4">
            <p style={{ color: blueColor }} className="ml-6 italic text-2xl">
  Empowering Lives Through Comprehensive Care and Support
</p>
          </div>

          {/* Lower Middle 35% */}
          <div
            style={{ backgroundColor: blueColor }}
            className="w-full h-[35%] flex items-center justify-center"
          >
            <div className="relative w-[300px] h-[300px]">
              <Image
                src="/about/our_center.png" // Maps to public/home/workunit.png
                alt="OUR CENTER"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          {/* Bottom 35% */}
          <div style={{ backgroundColor: blueColor }} className="w-full h-[35%] flex items-center p-6">
            <p
              style={{ color: "white" }}
              className="text-justify"
            >
              At Shaurya Foundation Trust, our Centre is dedicated to enhancing living standards through comprehensive support. We offer 24/7 assistance, ensuring safety and care. Our facility is well-equipped with essential supplies and provides home-cooked meals. With dedicated teachers for life skills and a variety of engaging activities, we create a nurturing environment that promotes growth, learning, and joy for all.
            </p>
          </div>
        </div>

        {/* Second Section Mobile - Open Campus */}
        <div className="w-full flex flex-col p-4">
          {/* Heading - left aligned with 10px padding */}
          <div className="h-[10vh] flex items-center pl-[10px]">
            <h2 className="text-3xl font-bold" style={{ color: blueColor }}>OPEN CAMPUS</h2>
          </div>
          
          {/* 3px height line - 90vw wide */}
          <div className="h-[5vh] flex items-center justify-center">
            <div className="w-[90vw] h-[3px]" style={{ backgroundColor: blueColor }}></div>
          </div>
          
          {/* Lorius ipsum text */}
          <div className="h-[25vh] flex items-center justify-center text-center">
            <p className="text-lg px-4" style={{ color: blueColor }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
          </div>
          
          {/* Button */}
          <div className="h-[10vh] flex items-center justify-center">
            <button 
  className="flex items-center justify-center font-bold transition-all duration-300"
  style={{ 
    width: '300px', 
    height: '40px',
    backgroundColor: blueColor,
    border: `1px solid ${blueColor}`,
    color: yellowColor
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = 'transparent';
    target.style.color = blueColor;
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = blueColor;
    target.style.color = yellowColor;
  }}
>
  BOOK A CAMPUS TOUR
</button>
          </div>
          
          {/* Google Map */}
          <div className="h-[60vh] w-full">
            <iframe
  src="https://maps.google.com/maps?q=40.7069,-74.0113&z=15&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
          </div>
        </div>
        <br/><br/>
        {/* Third Section Mobile - Contact*/}
        <div className="w-full flex flex-col p-4">
          {/* Heading - left aligned with 10px padding */}
          <div className="h-[10vh] flex items-center pl-[10px]">
            <h2 className="text-3xl font-bold" style={{ color: blueColor }}>CONTACT LIST</h2>
          </div>
          
          {/* 3px height line - 90vw wide */}
          <div className="h-[5vh] flex items-center justify-center">
            <div className="w-[90vw] h-[3px]" style={{ backgroundColor: blueColor }}></div>
          </div>
        </div>
        <br/>
        
        {/* Three Boxes Section - Mobile */}
        <div className="w-full flex flex-col items-center p-4 space-y-4">
          {/* Box 1 */}
          <div 
            className="flex flex-col items-center justify-center"
            style={{
              width: '50vw',
              height: '80px',
              border: `2px solid ${blueColor}`,
              backgroundColor: yellowColor
            }}
          >
            <div className="text-xl font-bold" style={{ color: blueColor }}>
General Inquiries</div>
            <div className="text-lg font-bold" style={{ color: blueColor }}>123</div>
          </div>
          
          {/* Box 2 */}
          <div 
            className="flex flex-col items-center justify-center"
            style={{
              width: '50vw',
              height: '80px',
              border: `2px solid ${blueColor}`,
              backgroundColor: yellowColor
            }}
          >
            <div className="text-xl font-bold" style={{ color: blueColor }}>
Enrollment Office</div>
            <div className="text-lg font-bold" style={{ color: blueColor }}>456</div>
          </div>
          
          {/* Box 3 */}
          <div 
            className="flex flex-col items-center justify-center"
            style={{
              width: '50vw',
              height: '80px',
              border: `2px solid ${blueColor}`,
              backgroundColor: yellowColor
            }}
          >
            <div className="text-xl font-bold" style={{ color: blueColor }}>
Parent Inquiries</div>
            <div className="text-lg font-bold" style={{ color: blueColor }}>789</div>
          </div>
        </div>
        <br/><br/>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className={isWide ? "w-[100%] mx-auto" : ""}>
        {content}
      </div>
    </div>
  );
}