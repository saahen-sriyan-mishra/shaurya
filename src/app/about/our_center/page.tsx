"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function OurCenter() {
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
    <>
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
              <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">Our Center</h1>
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
          <div className="w-full h-[65%] flex">
            <div className="w-[7%]"></div>


<div
  style={{ backgroundColor: blueColor }}
  className="w-[43%] flex items-center justify-center p-4"
>
  <div className="relative w-[450px] h-[450px] ">
    <Image
      src="/home/Our centre.jpg"
      alt="OUR CENTER"
      fill
      className="object-cover rounded-md"
    />
  </div>
</div>
            <div style={{ backgroundColor: blueColor }} className="w-[50%] flex items-center p-8">


<p className="text-justify mb-4 text-white">
  At Shaurya Foundation Trust, our Centre is dedicated to enhancing living standards through comprehensive support. We offer 24/7 assistance, ensuring safety and care. Our facility is well-equipped with essential supplies and provides home-cooked meals. With dedicated teachers for life skills and a variety of engaging activities, we create a nurturing environment that promotes growth, learning, and joy for all.

  <br /><br />

  <button
    className="px-4 py-2 rounded transition-colors duration-300 text-[#f8d287] bg-transparent hover:bg-[#f8d287] hover:text-[#3f51b5]"
  >
    Request Info
  </button>
</p>


            </div>
          </div>
        </div>




        <br />
        <br />




        {/* Second Section */}
        <div className="w-full h-screen flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15%] flex">
            <div style={{ backgroundColor: yellowColor }} className="w-[7%]"></div>
            <div className="w-[93%] flex items-center">
                &nbsp; &nbsp; <span style={{ color: blueColor }} className="text-4xl font-bold">→</span>
              <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-6">Mission and vision </h1>
            </div>
          </div>

          {/* Middle 20% */}
          <div className="w-full h-[20%] flex">
            <div className="w-[7%] bg-white"></div>
            <div style={{ backgroundColor: yellowColor }} className="w-[93%] flex items-center">
              <p style={{ color: blueColor }} className="ml-6 italic text-2xl">
  We believe in fostering empowerment and resilience for sustainable growth
</p>
            </div>
          </div>

          {/* Bottom 65% */}
          <div className="w-full h-[65%] flex">
            <div className="w-[7%]"></div>
            <div
  style={{ backgroundColor: blueColor }}
  className="w-[43%] flex items-center justify-center p-4"
>
  <div className="relative w-[450px] h-[450px]">
    <Image
      src="/Home/Mission and vision.jpg"
      alt="MISSION AND VISION"
      fill
      className="object-cover rounded-md"
    />
  </div>
</div>
            <div style={{ backgroundColor: blueColor }} className="w-[50%] flex items-center p-8">
              <p
  style={{ color: "white" }}
  className="text-justify"
>

                Mission: Our mission is to provide a holistic approach that equips individuals with essential skills for personal and professional growth, fostering resilience and well-being in every aspect of life.
                  <br/> <br/>
                Vision: We envision a thriving environment where everyone has the opportunity to grow, collaborate, and contribute, creating a sustainable community that values inclusivity, innovation, and shared success for all.
  <br /><br />

  <button
    className="px-4 py-2 rounded transition-colors duration-300 text-[#f8d287] bg-transparent hover:bg-[#f8d287] hover:text-[#3f51b5]"
  >
    Plan Your Visit
  </button>
              </p>
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
            <h1 style={{ color: blueColor }} className="text-3xl font-bold">Our Center</h1>
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
  className="w-full h-[35%] flex items-center justify-center p-4"
>
  <div className="relative w-[300px] h-[300px]">
    <Image
      src="/home/Our centre.jpg" 
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
  <br /><br />

  <button
    className="px-4 py-2 rounded transition-colors duration-300 text-[#f8d287] bg-transparent hover:bg-[#f8d287] hover:text-[#3f51b5]"
  >
    Request Info
  </button>
              </p>
          </div>
        </div>

        {/* Second Section Mobile */}
        <div className="w-full min-h-screen flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15%] flex items-center bg-white p-4">
            <span style={{ color: blueColor }} className="text-3xl font-bold mr-2">→</span>
            <h1 style={{ color: blueColor }} className="text-3xl font-bold">Mission and vision</h1>
          </div>

          {/* Upper Middle 15% */}
          <div style={{ backgroundColor: yellowColor }} className="w-full h-[15%] flex items-center p-4">
            <p style={{ color: blueColor }} className="ml-6 italic text-2xl">
  We believe in fostering empowerment and resilience for sustainable growth
</p>
          </div>

          {/* Lower Middle 35% */}
          <div
  style={{ backgroundColor: blueColor }}
  className="w-full h-[35%] flex items-center justify-center p-4"
>
  <div className="relative w-[300px] h-[300px]">
    <Image
      src="/Home/Mission and vision.jpg"
      alt="MISSION AND VISION"
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

                Mission: Our mission is to provide a holistic approach that equips individuals with essential skills for personal and professional growth, fostering resilience and well-being in every aspect of life.
                  <br/> <br/>
                Vision: We envision a thriving environment where everyone has the opportunity to grow, collaborate, and contribute, creating a sustainable community that values inclusivity, innovation, and shared success for all.
  <br /><br />

  <button
    className="px-4 py-2 rounded transition-colors duration-300 text-[#f8d287] bg-transparent hover:bg-[#f8d287] hover:text-[#3f51b5]"
  >
    Plan Your Visit
  </button>
              </p>
          </div>
        </div>
      </div>
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
