"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function AfterHour() {
const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsWide(window.innerWidth > 1100);
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
    if (width >= 900) {
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

  const skills = [
  "ARTS",
  "THEATRE",
  "BAKING",
  "SUBLIMATION",
  "DANCE & MUSIC",
  "FUN SPORTS",
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
              <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">After Hours</h1>
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

        {/* Second Section Desktop */}
                <div className="w-full flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15vh] flex">
            <div style={{ backgroundColor: yellowColor }} className="w-[7%]"></div>
            <div className="w-[93%] flex items-center">
              &nbsp; &nbsp; <span style={{ color: blueColor }} className="text-4xl font-bold">→</span>
              <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">Campus Facilities</h1>
            </div>
          </div>


          {/* Bottom 65% */}
          <div className="w-full h-[65vh] flex">
            <div className="w-[7%]"></div>


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
            <div style={{ backgroundColor: yellowColor }} className="w-[50%] flex items-center p-8">


<p className="text-justify mb-4 text-black">
  At Shaurya Foundation Trust, our Centre is dedicated to enhancing living standards through comprehensive support. We offer 24/7 assistance, ensuring safety and care. Our facility is well-equipped with essential supplies and provides home-cooked meals. With dedicated teachers for life skills and a variety of engaging activities, we create a nurturing environment that promotes growth, learning, and joy for all.

  <br /><br />

</p>


            </div>
          </div>
        </div>
        
        <br/><br/>

{/*Third section Desktop*/}
<div className="w-full flex flex-col">
          {/* 7% left margin, 93% content area */}
          <div className="flex">
            <div className="w-[7%]"></div>
            <div className="w-[93%]">
              {/* Top part with heading */}
              <div className="h-[10vh] flex items-center">
                <h2 className="text-4xl font-bold" style={{ color: blueColor }}>Extra Curricular</h2>
              </div>
              
              {/* 3px height line */}
              <div className="h-[5vh] flex items-center">
                <div className="w-full h-[3px]" style={{ backgroundColor: blueColor }}></div>
              </div>
              {/* Grid of Skill Boxes (Desktop View) */}
<div className="w-full flex justify-center">
  <div className="w-full mt-4 flex justify-center">
    <div className={`grid gap-x-[30px] gap-y-4 ${columnsClass} justify-items-center`}>
      {skills.map((skill, index) => (
        <div
  key={index}
  onClick={() => router.push(`/learning/after_hour/${1}`)}
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

      ))}
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
            <h1 style={{ color: blueColor }} className="text-3xl font-bold">After Hours</h1>
          </div>



          {/* Lower Middle 35% */}

<div
  style={{ backgroundColor: yellowColor }}
  className="w-full h-[35vh] flex items-center justify-center"
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
          <div style={{ backgroundColor: yellowColor }} className="w-full h-[35vh] flex items-center p-6">
            <p
  style={{ color: "black" }}
  className="text-justify"
>

                At Shaurya Foundation Trust, our Centre is dedicated to enhancing living standards through comprehensive support. We offer 24/7 assistance, ensuring safety and care. Our facility is well-equipped with essential supplies and provides home-cooked meals. With dedicated teachers for life skills and a variety of engaging activities, we create a nurturing environment that promotes growth, learning, and joy for all.
  <br /><br />

              </p>
          </div>
        </div>

        {/* Second Section Mobile */}
<div className="w-full flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15vh] flex items-center bg-white p-4">
            <span style={{ color: blueColor }} className="text-3xl font-bold mr-2">→</span>
            <h1 style={{ color: blueColor }} className="text-3xl font-bold">Campus Facilities</h1>
          </div>



          {/* Lower Middle 35% */}

<div
  style={{ backgroundColor: yellowColor }}
  className="w-full h-[35vh] flex items-center justify-center"
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
          <div style={{ backgroundColor: yellowColor }} className="w-full h-[35vh] flex items-center p-6">
            <p
  style={{ color: "black" }}
  className="text-justify"
>

                At Shaurya Foundation Trust, our Centre is dedicated to enhancing living standards through comprehensive support. We offer 24/7 assistance, ensuring safety and care. Our facility is well-equipped with essential supplies and provides home-cooked meals. With dedicated teachers for life skills and a variety of engaging activities, we create a nurturing environment that promotes growth, learning, and joy for all.
  <br /><br />

              </p>
          </div>
        </div>
                {/* Third Section Mobile */}
        <div className="w-full flex flex-col p-4">
          {/* Heading - left aligned with 10px padding */}
          <div className="h-[10vh] flex items-center pl-[10px]">
            <h2 className="text-3xl font-bold" style={{ color: blueColor }}>Extra Curricular</h2>
          </div>
          
          {/* 3px height line - 90vw wide */}
          <div className="h-[5vh] flex items-center justify-center">
            <div className="w-[90vw] h-[3px]" style={{ backgroundColor: blueColor }}></div>
          </div>
          {/* Grid of Skill Boxes (Mobile View) */}
<div className="w-full flex justify-center">
  <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
    {skills.map((skill, index) => (
      <div
  key={index}
  onClick={() => router.push(`/learning/after_hour/${1}`)}
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

    ))}
  </div>
</div>


          </div>

      </div>
      <br/><br/>

    </>
  );

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className={isWide ? "w-[100%] mx-auto" : ""}>
        {content}
      </div>
    </div>
  );
}
