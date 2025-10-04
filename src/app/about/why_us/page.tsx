//141
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const quotes = [
  {
    text: "Empowering lives through compassion and dedication.",
    author: "— Shaurya Foundation Trust",
  },
  {
    text: "Every step forward is a step towards hope and growth.",
    author: "— Shaurya Foundation Trust",
  },
  {
    text: "Together, we build a brighter future for all.",
    author: "— Shaurya Foundation Trust",
  },
];

function QuoteCarousel({ backgroundColor }: { backgroundColor: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % quotes.length);
  };

  return (
    <div
      className="w-full h-[90vh] flex items-center justify-center px-6 relative transition-all"
      style={{ backgroundColor }}
    >
      {/* Prev Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous quote"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold select-none"
      >
        &#8249;
      </button>

      <div className="max-w-3xl text-center px-8">
        <p className="text-white text-2xl md:text-3xl italic transition-opacity duration-500 ease-in-out">
          “{quotes[current].text}”
        </p>
        <p className="text-white text-right mt-4 text-lg transition-opacity duration-500 ease-in-out">
          {quotes[current].author}
        </p>

        <div className="flex justify-center mt-6 space-x-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        aria-label="Next quote"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold select-none"
      >
        &#8250;
      </button>
    </div>
  );
}



export default function WhyUs() {
  const [isWide, setIsWide] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    graduationYear: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

useEffect(() => {
  if (submissionStatus !== "idle") {
    const timer = setTimeout(() => {
      setSubmissionStatus("idle");
    }, 5000);
    return () => clearTimeout(timer);
  }
}, [submissionStatus]);

  useEffect(() => {
    function handleResize() {
      setIsWide(window.innerWidth > 1100);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmissionStatus("idle");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "your-access-key-here", // Replace this
        subject: "New Connect With Us",
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        graduationYear: formData.graduationYear,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmissionStatus("success");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        graduationYear: '',
        message: ''
      });
    } else {
      setSubmissionStatus("error");
    }
  } catch (error) {
    console.error(error);
    setSubmissionStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};


  const yellowColor = "#f8d287";
  const blueColor = "#3f51b5";

  const centerSection = (
    <section>
      {/* Desktop View */}
      <div className="hidden md:block">
        <br /><br />
        <div className="w-full h-screen flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15%] flex">
            <div style={{ backgroundColor: yellowColor }} className="w-[7%]"></div>
            <div className="w-[93%] flex items-center">
              &nbsp;&nbsp;
              <span style={{ color: blueColor }} className="text-4xl font-bold">→</span>
              <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">Why Us</h1>
            </div>
          </div>

          {/* Middle 20% */}
          <div className="w-full h-[20%] flex">
            <div className="w-[7%] bg-white"></div>
            <div style={{ backgroundColor: yellowColor }} className="w-[93%] flex items-center">
              <p style={{ color: blueColor }} className="ml-6 italic text-2xl">
                 Breaking Barriers, Building Futures.
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
                  src="/about/why_us.png"
                  alt="WHY US"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            <div style={{ backgroundColor: blueColor }} className="w-[50%] flex items-center p-8">
              <p className="text-justify mb-4 text-white">
                Body (content) - At Shaurya Foundation Trust, we empower neurodiverse individuals, including those with autism, to achieve independence and employment success. Our tailored training programs focus on essential life skills, fostering confidence and self-reliance. With a dedicated team and innovative approaches, we break barriers to help our participants thrive in their personal and professional lives. Choose us for a transformative journey towards empowerment and inclusion.               
              </p>
            </div>
          </div>
        </div>
        <br /><br />
        
        {/* First additional section - Fixed fragment */}
        <div className="w-full h-[15vh] flex">
          <div style={{ backgroundColor: blueColor }} className="w-[7%]"></div>
          <div className="w-[93%] flex items-center">
            &nbsp;&nbsp;
            <span style={{ color: blueColor }} className="text-4xl font-bold">→</span>
            <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">Connect With Us</h1>
          </div>
        </div>

        <div className="w-full h-[65vh] flex">
          <div className="w-[7%]"></div>
          <div
            style={{ backgroundColor: blueColor }}
            className="w-[93%] flex items-center justify-center p-8"
          >
            <div className="w-full max-w-4xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submissionStatus === "success" && (
  <p className="text-green-500 mt-4 font-semibold text-center">
    ✅ Your message has been sent successfully!
  </p>
)}

{submissionStatus === "error" && (
  <p className="text-red-500 mt-4 font-semibold text-center">
    ❌ Something went wrong. Please try again later.
  </p>
)}

                {/* First Name & Last Name */}
                <div className="flex gap-5">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="block mb-2" style={{ color: yellowColor }}>First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="p-3"
                      style={{ 
                        backgroundColor: blueColor, 
                        border: '2px solid white', 
                        color: 'white',
                        height: '50px',
                        width: '100%'
                      }}
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="block mb-2" style={{ color: yellowColor }}>Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="p-3"
                      style={{ 
                        backgroundColor: blueColor, 
                        border: '2px solid white', 
                        color: 'white',
                        height: '50px',
                        width: '100%'
                      }}
                      required
                    />
                  </div>
                </div>
                
                {/* Email & Graduation Year */}
                <div className="flex gap-5">
                  <div className="flex-1">
                    <label htmlFor="email" className="block mb-2" style={{ color: yellowColor }}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="p-3"
                      style={{ 
                        backgroundColor: blueColor, 
                        border: '2px solid white', 
                        color: 'white',
                        height: '50px',
                        width: '100%'
                      }}
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="graduationYear" className="block mb-2" style={{ color: yellowColor }}>Graduation Year</label>
                    <input
                      type="number"
                      id="graduationYear"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      className="p-3"
                      style={{ 
                        backgroundColor: blueColor, 
                        border: '2px solid white', 
                        color: 'white',
                        height: '50px',
                        width: '100%'
                      }}
                      required
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-2" style={{ color: yellowColor }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-3"
                    style={{ 
                      backgroundColor: blueColor, 
                      border: '2px solid white', 
                      color: 'white',
                      width: '100%',
                      height: '120px'
                    }}
                    required
                  />
                </div>
                
                <button
  type="submit"
  className="flex items-center justify-center font-bold transition-colors duration-300 rounded"
  style={{
    backgroundColor: isSubmitting ? "#ccc" : yellowColor,
    color: blueColor,
    width: '100%',
    height: '50px',
    cursor: isSubmitting ? "not-allowed" : "pointer"
  }}
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <span className="flex items-center gap-2">
      <svg
        className="animate-spin h-5 w-5 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
      Sending...
    </span>
  ) : (
    "SUBMIT"
  )}
</button>

              </form>
            </div>
          </div>
        </div>
        
        {/* Second additional section */}
<div className="w-full h-[90vh] flex">
  <div className="w-[7%]"></div>
  <div className="w-[93%]">
    <QuoteCarousel backgroundColor={yellowColor} />
  </div>
</div>

      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="w-full min-h-screen flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15%] flex items-center bg-white p-4">
            <span style={{ color: blueColor }} className="text-3xl font-bold mr-2">→</span>
            <h1 style={{ color: blueColor }} className="text-3xl font-bold">Why Us</h1>
          </div>

          {/* Upper Middle 15% */}
          <div style={{ backgroundColor: yellowColor }} className="w-full h-[15%] flex items-center p-4">
            <p style={{ color: blueColor }} className="ml-6 italic text-2xl">
               Breaking Barriers, Building Futures.
            </p>
          </div>

          {/* Lower Middle 35% */}
          <div
            style={{ backgroundColor: blueColor }}
            className="w-full h-[35%] flex items-center justify-center"
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
          <div style={{ backgroundColor: blueColor }} className="w-full h-[35%] flex items-center p-6">
            <p style={{ color: "white" }} className="text-justify">
              Body (content) - At Shaurya Foundation Trust, we empower neurodiverse individuals, including those with autism, to achieve independence and employment success. Our tailored training programs focus on essential life skills, fostering confidence and self-reliance. With a dedicated team and innovative approaches, we break barriers to help our participants thrive in their personal and professional lives. Choose us for a transformative journey towards empowerment and inclusion.
              <br /><br />

            </p>
          </div>
        </div>
        
        {/* First additional mobile section - Fixed fragment */}
        <div className="w-full h-[15vh] flex items-center bg-white p-4">
          <span style={{ color: blueColor }} className="text-3xl font-bold mr-2">→</span>
          <h1 style={{ color: blueColor }} className="text-3xl font-bold">Connect With Us</h1>
        </div>

        <div
          style={{ backgroundColor: blueColor }}
          className="w-full flex items-center justify-center py-10"
        >
          <div className="w-full flex justify-center">
  <form
    onSubmit={handleSubmit}
    className="space-y-4 flex flex-col items-center w-full max-w-[75vw]"
  >
    {submissionStatus === "success" && (
  <p className="text-green-500 mt-4 font-semibold text-center">
    ✅ Your message has been sent successfully!
  </p>
)}

{submissionStatus === "error" && (
  <p className="text-red-500 mt-4 font-semibold text-center">
    ❌ Something went wrong. Please try again later.
  </p>
)}

    {[
  { id: "firstName", label: "First Name", type: "text" },
  { id: "lastName", label: "Last Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "graduationYear", label: "Graduation Year", type: "number" },
].map(({ id, label, type }) => (
  <div key={id} className="w-full flex flex-col items-center">
    <label
      htmlFor={`${id}-mobile`}
      className="mb-1 text-center text-base font-medium"
      style={{ color: yellowColor }}
    >
      {label}
    </label>
    <input
      type={type}
      id={`${id}-mobile`}
      name={id}
      value={formData[id as keyof typeof formData]} // ← FIXED LINE
      onChange={handleChange}
      className="p-1.5 rounded text-white"
      style={{
        backgroundColor: blueColor,
        border: "2px solid white",
        width: "75vw",
        height: "32px",
      }}
      required
    />
  </div>
))}

    <div className="w-full flex flex-col items-center">
      <label
        htmlFor="message-mobile"
        className="mb-1 text-center text-base font-medium"
        style={{ color: yellowColor }}
      >
        Message
      </label>
      <textarea
        id="message-mobile"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="p-1.5 rounded text-white"
        style={{
          backgroundColor: blueColor,
          border: "2px solid white",
          width: "75vw",
          height: "64px",
        }}
        required
      />
    </div>

    <button
  type="submit"
  className="flex items-center justify-center font-bold transition-colors duration-300 rounded mt-4"
  style={{
    backgroundColor: isSubmitting ? "#ccc" : yellowColor,
    color: blueColor,
    width: '75vw',
    height: '40px',
    cursor: isSubmitting ? "not-allowed" : "pointer"
  }}
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <span className="flex items-center gap-1 text-sm">
      <svg
        className="animate-spin h-4 w-4 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
      Sending...
    </span>
  ) : (
    "SUBMIT"
  )}
</button>

  </form>
</div>
        </div>
        
        {/* Second additional mobile section */}
<QuoteCarousel backgroundColor={yellowColor} />

      </div>
    </section>
  );

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className={isWide ? "w-[100%] mx-auto" : ""}>
        {centerSection}
      </div>
    </div>
  );
}