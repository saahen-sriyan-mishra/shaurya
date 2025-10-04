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
          <div className="w-full h-[85vh] flex">
            <div className="w-[7%]"></div>



            <div style={{ backgroundColor: yellowColor }} className="w-[93%] flex items-center p-8">


<p className="text-justify mb-4 text-black">
    <br /><br />
Beyond the structured training hours, our Shaurya Foundation Trust trainees enjoy a vibrant community life filled with engaging activities that foster friendships, relaxation, and personal growth. Evenings at our facility buzz with excitement as trainees come together for group games that range from traditional board games and card tournaments to interactive team-building activities that celebrate each individual's unique strengths and abilities. Our spacious common areas transform into entertainment hubs during movie time, where trainees gather with popcorn and comfortable seating to enjoy carefully selected films that inspire, educate, and entertain. These movie sessions often spark meaningful discussions and create lasting memories among our diverse community.
 <br /><br />
As the sun begins to set, many of our trainees participate in peaceful evening walks around our beautiful campus grounds, providing an opportunity to unwind, connect with nature, and engage in quiet conversations with friends and mentors. These walks not only promote physical wellness but also serve as valuable social interaction time where trainees share their daily experiences and support one another.
 <br /><br />
Additional after-hour activities include art and craft sessions, music appreciation time, storytelling circles, and seasonal celebrations that honor various cultural traditions represented within our community. Our recreational programs are designed to ensure that every trainee feels included, valued, and empowered to pursue their interests while building meaningful relationships. These moments of joy and connection are integral to creating a holistic environment where our trainees can thrive both personally and professionally.



  <br /><br />

</p>


            </div>
 
  {/*
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
</div> */}
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
          <div className="w-full h-[80vh] flex">
            <div className="w-[7%]"></div>


{/*
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
</div> */}
            <div style={{ backgroundColor: yellowColor }} className="w-[93%] flex items-center p-8">


<p className="text-justify mb-4 text-black">
  Our centre at Shaurya Foundation Trust is thoughtfully designed to provide trainees with a comfortable, safe, and empowering environment that supports holistic well-being. Surrounded by open spaces, the facility offers ample room for relaxation, recreation, and outdoor activities, creating a sense of tranquility and freedom. The campus is equipped with modern fitness equipment and all necessary accessories, encouraging a healthy and active lifestyle for every trainee. Clean, fresh water and nutritious food are supplied regularly, ensuring the well-being and vitality of all residents.
<br/><br/>
A dedicated full-time Disability Support Worker (DSW) team is always available, offering guidance, support, and care whenever needed. Common leisure spaces are carefully furnished, offering cozy spots for relaxation and socialization, while reliable WiFi ensures continuous connectivity for work, learning, and communication. The centre also provides convenient laundry facilities, maintaining high standards of cleanliness and hygiene across the campus.
<br/><br/>
Safety is a top priority at Shaurya Foundation Trust. The environment is monitored and maintained to guarantee the security and peace of mind of every individual. Every room and shared space is fully furnished, contributing to a welcoming and homely atmosphere. Above all, we pride ourselves on maintaining an environment that is not only safe and clean but also inclusive and nurturing, enabling trainees to flourish and feel at home.


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
          <div style={{ backgroundColor: yellowColor }} className="w-full h-[95vh] flex items-center p-6">
            <p
  style={{ color: "black" }}
  className="text-justify"
>
<br /><br />
 Beyond the structured training hours, our Shaurya Foundation Trust trainees enjoy a vibrant community life filled with engaging activities that foster friendships, relaxation, and personal growth. Evenings at our facility buzz with excitement as trainees come together for group games that range from traditional board games and card tournaments to interactive team-building activities that celebrate each individual's unique strengths and abilities. Our spacious common areas transform into entertainment hubs during movie time, where trainees gather with popcorn and comfortable seating to enjoy carefully selected films that inspire, educate, and entertain. These movie sessions often spark meaningful discussions and create lasting memories among our diverse community.
 <br /><br />
 As the sun begins to set, many of our trainees participate in peaceful evening walks around our beautiful campus grounds, providing an opportunity to unwind, connect with nature, and engage in quiet conversations with friends and mentors. These walks not only promote physical wellness but also serve as valuable social interaction time where trainees share their daily experiences and support one another.

<br /><br />
Additional after-hour activities include art and craft sessions, music appreciation time, storytelling circles, and seasonal celebrations that honor various cultural traditions represented within our community. Our recreational programs are designed to ensure that every trainee feels included, valued, and empowered to pursue their interests while building meaningful relationships. These moments of joy and connection are integral to creating a holistic environment where our trainees can thrive both personally and professionally.
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
          <div style={{ backgroundColor: yellowColor }} className="w-full h-[90vh] flex items-center p-6">
            <p
  style={{ color: "black" }}
  className="text-justify"
>

                Our centre at Shaurya Foundation Trust is thoughtfully designed to provide trainees with a comfortable, safe, and empowering environment that supports holistic well-being. Surrounded by open spaces, the facility offers ample room for relaxation, recreation, and outdoor activities, creating a sense of tranquility and freedom. The campus is equipped with modern fitness equipment and all necessary accessories, encouraging a healthy and active lifestyle for every trainee. Clean, fresh water and nutritious food are supplied regularly, ensuring the well-being and vitality of all residents.
<br /><br />
A dedicated full-time Disability Support Worker (DSW) team is always available, offering guidance, support, and care whenever needed. Common leisure spaces are carefully furnished, offering cozy spots for relaxation and socialization, while reliable WiFi ensures continuous connectivity for work, learning, and communication. The centre also provides convenient laundry facilities, maintaining high standards of cleanliness and hygiene across the campus.
<br /><br />
Safety is a top priority at Shaurya Foundation Trust. The environment is monitored and maintained to guarantee the security and peace of mind of every individual. Every room and shared space is fully furnished, contributing to a welcoming and homely atmosphere. Above all, we pride ourselves on maintaining an environment that is not only safe and clean but also inclusive and nurturing, enabling trainees to flourish and feel at home.

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
