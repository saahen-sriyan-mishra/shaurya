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
  Meet the Shaurya Foundation Team

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
The Shaurya Foundation Trust was founded by a passionate group of advocates committed to empowering individuals with disabilities, including those with autism and other neurodiversities. Their primary motive is to provide specialized training programs that promote independent living and enhance employment skills. By fostering self-reliance and confidence, the trust aims to create a supportive environment where every individual can thrive and contribute meaningfully to society.


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
<div className="w-[80%] flex gap-6 items-stretch">
  {/* Box 1 */}
  <div className="w-[35vw] h-auto border-2 border-[#3f51b5] bg-white flex flex-col">
    {/* Top Header */}
    <div className="h-[10%] bg-[#f8d287] flex items-center pl-[20px]">
      <span className="text-[#3f51b5] font-medium">Ms Rubina Mohan</span>
    </div>

    {/* Content */}
    <div className="flex-1 p-[10px] relative flex flex-col">
      <div className="flex items-start pl-[10px] text-[#3f51b5] text-justify">
        As the CEO of Shaurya Foundation Trust, I bring 25 years of expertise and passion to my role. With a proven track record in functional training and inclusive employment for adults with neurodiverse needs, I have been instrumental in driving our mission towards financial empowerment and independent living. Under my leadership, Shaurya Foundation Trust continues to make a meaningful impact by creating inclusive employment models, fostering strong self-advocacy practices, and nurturing collaborative partnerships with parents, families, communities, and corporations. I champion this cause with great heart, empathy, and zeal.
      </div>
    </div>
  </div>

  {/* Box 2 */}
  <div className="w-[35vw] h-auto border-2 border-[#3f51b5] bg-white flex flex-col">
    {/* Top Header */}
    <div className="h-[10%] bg-[#f8d287] flex items-center pl-[20px]">
      <span className="text-[#3f51b5] font-medium">Ms Arpita Yadav</span>
    </div>

    {/* Content */}
    <div className="flex-1 p-[10px] relative flex flex-col">
      <div className="flex items-start pl-[10px] text-[#3f51b5] text-justify">
        As the Director of Shaurya Foundation Trust in Palwal, I have transformed my personal hardships into a beacon of hope for neurodiverse adults, drawing on 24 years of experience in this vital work. Overcoming my own challenges has fueled my dedication to understanding and advocating for this community. Through empathy and innovative teaching methods, I empower individuals to develop essential life skills. My unwavering commitment fosters independence, helping them thrive and lead fulfilling lives, proving that resilience can create profound change.
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
    Meet the Shaurya Foundation Team
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

The Shaurya Foundation Trust was founded by a passionate group of advocates committed to empowering individuals with disabilities, including those with autism and other neurodiversities. Their primary motive is to provide specialized training programs that promote independent living and enhance employment skills. By fostering self-reliance and confidence, the trust aims to create a supportive environment where every individual can thrive and contribute meaningfully to society.
  <br />
  <br/><br/>

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
  <div className="w-[80vw] h-auto border-2 border-[#3f51b5] bg-white flex flex-col">
    {/* Top Header */}
    <div className="h-[15%] bg-[#f8d287] flex items-center pl-[20px]">
      <span className="text-[#3f51b5] font-medium">Ms Rubina Mohan</span>
    </div>

    {/* Content */}
    <div className="flex-1 p-[10px] relative flex flex-col">
      <div className="flex items-start pl-[10px] text-[#3f51b5] text-justify">
        As the CEO of Shaurya Foundation Trust, I bring 25 years of expertise and passion to my role. With a proven track record in functional training and inclusive employment for adults with neurodiverse needs, I have been instrumental in driving our mission towards financial empowerment and independent living. Under my leadership, Shaurya Foundation Trust continues to make a meaningful impact by creating inclusive employment models, fostering strong self-advocacy practices, and nurturing collaborative partnerships with parents, families, communities, and corporations. I champion this cause with great heart, empathy, and zeal.
      </div>
    </div>
  </div>

  {/* Box 2 */}
  <div className="w-[80vw] h-auto border-2 border-[#3f51b5] bg-white flex flex-col">
    {/* Top Header */}
    <div className="h-[15%] bg-[#f8d287] flex items-center pl-[20px]">
      <span className="text-[#3f51b5] font-medium">Ms Arpita Yadav</span>
    </div>

    {/* Content */}
    <div className="flex-1 p-[10px] relative flex flex-col">
      <div className="flex items-start pl-[10px] text-[#3f51b5] text-justify">
        As the Director of Shaurya Foundation Trust in Palwal, I have transformed my personal hardships into a beacon of hope for neurodiverse adults, drawing on 24 years of experience in this vital work. Overcoming my own challenges has fueled my dedication to understanding and advocating for this community. Through empathy and innovative teaching methods, I empower individuals to develop essential life skills. My unwavering commitment fosters independence, helping them thrive and lead fulfilling lives, proving that resilience can create profound change.
      </div>
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
      <div className={isWide ? "w-[100%] mx-auto" : ""}>
        {content}
      </div>
    </div>
  );
}