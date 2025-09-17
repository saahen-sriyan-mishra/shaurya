"use client";


import { useState, useEffect } from "react";
import Image from "next/image";
// app/about/our_center/page.tsx
export default function faculty() {
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
              <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">Faculty  </h1>
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
  className="w-[43%] flex items-center justify-center"
>
  <div className="relative w-[300px] h-[300px]">
    <Image
      src="/about/faculty.png"
      alt="FACULTY"
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


        <div>

          {/* Middle 20% */}
          <div className="w-full h-[50px] flex">
  <div className="w-[7%] bg-white"></div>
  <div
  className="w-[93%] flex items-center border-b-4 border-[#3f51b5]"
>
    <p style={{ color: blueColor }} className="text-2xl font-bold m-0 p-0">MANAGEMENT</p>
  </div>
</div>


{/* Desktop: Boxes after MANAGEMENT */}
<div className="w-full flex mt-8">
  {/* 10% left margin */}
  <div className="w-[7%]" />

  {/* Content: 2 Boxes */}
  <div className="w-[80%] flex gap-6">

    {/* Box 1 */}
    <div className="w-[320px] h-[160px] border-2 border-[#3f51b5] bg-white flex flex-col">
      {/* Top 25% yellow with text */}
      <div className="h-[25%] bg-[#f8d287] flex items-center pl-[20px]">
        <span className="text-[#3f51b5] font-medium">Text 1</span>
      </div>

      {/* Bottom 75% with horizontal divider and text */}
      <div className="h-[75%] p-[10px] relative flex flex-col">
        {/* Top Half - abc 1 */}
        <div className="h-1/2 flex items-start pl-[10px] text-[#3f51b5]">
          abc 1
        </div>

        {/* Divider Line */}
        <div className="w-full h-[2px] bg-[#3f51b5] my-[5px]" />

        {/* Bottom Half - xyz 1 */}
        <div className="h-1/2 flex items-end pl-[10px] text-[#3f51b5] -translate-y-[10px]">
          xyz 1
        </div>
      </div>
    </div>

    {/* Box 2 */}
    <div className="w-[320px] h-[160px] border-2 border-[#3f51b5] bg-white flex flex-col">
      {/* Top 25% yellow with text */}
      <div className="h-[25%] bg-[#f8d287] flex items-center pl-[20px]">
        <span className="text-[#3f51b5] font-medium">Text 2</span>
      </div>

      {/* Bottom 75% with horizontal divider and text */}
      <div className="h-[75%] p-[10px] relative flex flex-col">
        {/* Top Half - abc 2 */}
        <div className="h-1/2 flex items-start pl-[10px] text-[#3f51b5]">
          abc 2
        </div>

        {/* Divider Line */}
        <div className="w-full h-[2px] bg-[#3f51b5] my-[5px]" />

        {/* Bottom Half - xyz 2 */}
        <div className="h-1/2 flex items-end pl-[10px] text-[#3f51b5] -translate-y-[10px]">
          xyz 2
        </div>
      </div>
    </div>

  </div>

  {/* 10% right margin */}
  <div className="w-[10%]" />
</div>


<br/><br/>
        </div>

        

      </div>

      {/* Mobile View (shown on screens smaller than medium) */}
      <div className="md:hidden">
        {/* First Section Mobile */}
        <div className="w-full min-h-screen flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15%] flex items-center bg-white p-4">
            <span style={{ color: blueColor }} className="text-3xl font-bold mr-2">→</span>
            <h1 style={{ color: blueColor }} className="text-3xl font-bold">Faculty</h1>
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
      src="/about/faculty.png" // Maps to public/home/workunit.png
      alt="FACULTY"
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
  <br />

              </p>
          </div>
        </div>

        <div className="w-full h-[100px] flex items-center bg-white px-4 -translate-y-[50px]">
  <div className="relative w-full">
    <h1 style={{ color: blueColor }} className="text-3xl font-bold">MANAGEMENT</h1>
    <div
      className="absolute left-0 w-full h-[3px] bg-[#3f51b5]"
      style={{ top: 'calc(100% + 10px)' }}
    ></div>
  </div>
</div>
<div className="w-full flex mt-8">
  {/* 10% left margin */}
  <div className="w-[10%]" />

  {/* Content: Stack on mobile, row on desktop, centered */}
  <div className="w-[80%] flex flex-col md:flex-row gap-6 items-center -translate-y-[50px]">
    
    {/* Box 1 */}
    <div className="w-[320px] h-[160px] border-2 border-[#3f51b5] bg-white flex flex-col">
      <div className="h-[25%] bg-[#f8d287] flex items-center pl-[20px]">
        <span className="text-[#3f51b5] font-medium">Text 1</span>
      </div>
      <div className="h-[75%] p-[10px] relative flex flex-col">
        <div className="h-1/2 flex items-start pl-[10px] text-[#3f51b5]">abc 1</div>
        <div className="w-full h-[2px] bg-[#3f51b5] my-[5px]" />
        <div className="h-1/2 flex items-end pl-[10px] text-[#3f51b5] -translate-y-[10px]">xyz 1</div>
      </div>
    </div>

    {/* Box 2 */}
    <div className="w-[320px] h-[160px] border-2 border-[#3f51b5] bg-white flex flex-col">
      <div className="h-[25%] bg-[#f8d287] flex items-center pl-[20px]">
        <span className="text-[#3f51b5] font-medium">Text 2</span>
      </div>
      <div className="h-[75%] p-[10px] relative flex flex-col">
        <div className="h-1/2 flex items-start pl-[10px] text-[#3f51b5]">abc 2</div>
        <div className="w-full h-[2px] bg-[#3f51b5] my-[5px]" />
        <div className="h-1/2 flex items-end pl-[10px] text-[#3f51b5] -translate-y-[10px]">xyz 2</div>
      </div>
    </div>

  </div>

  {/* 10% right margin */}
  <div className="w-[10%]" />
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