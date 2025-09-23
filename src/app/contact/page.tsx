"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, User, Edit, Play, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation" // ✅ Added for redirect

export default function ContactPage() {
  const [isWide, setIsWide] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); // ✅ Initialize router

  useEffect(() => {
    function handleResize() {
      setIsWide(window.innerWidth > 1100);
    }
    handleResize(); // check initial size
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
    
    // Web3Forms submission
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your Web3Forms access key
          subject: "New Contact Form Submission",
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const yellowColor = "#f8d287";
  const blueColor = "#3f51b5";

  const content = (
    <>
      {/* Desktop View (shown on medium screens and above) */}
      <div className="hidden md:block">
        <br /><br />
        {/* First Section */}
        <div className="w-full flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15vh] flex">
            <div style={{ backgroundColor: yellowColor }} className="w-[7%]"></div>
            <div className="w-[93%] flex items-center">
              &nbsp; &nbsp; <span style={{ color: blueColor }} className="text-4xl font-bold">→</span>
              <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">Contact Us</h1>
            </div>
          </div>

          {/* Middle Section with Links */}
          <div className="w-full h-[20vh] flex">
            <div className="w-[7%] bg-white"></div>
            <div
              style={{ backgroundColor: yellowColor }}
              className="w-[93%] flex flex-col items-start gap-2 px-4 py-6"
            >
              {/* Quick Links Heading */}
              <h2 className="text-xl text-blue-600 font-bold mb-2">Quick Links</h2>
              
              {/* Links as bullet points */}
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <Link 
                    href="/admission/request_info" 
                    className="text-black transition-all duration-300 hover:underline"
                  >
                    Request Info
                  </Link>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-black transition-all duration-300 hover:underline"
                  >
                    Google Form
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Third Section - Form */}
          <div className="w-full h-[80vh] flex">
            <div className="w-[7%]"></div>
            <div 
              className="w-[93%] flex items-center justify-center py-12"
              style={{ backgroundColor: blueColor }}
            >
              <div className="w-full max-w-4xl px-4">
                {/* Form Heading */}
                <h2 
                  className="text-3xl md:text-4xl font-bold text-center mb-8"
                  style={{ color: yellowColor }}
                >
                  Get in Touch
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First and Last Name side by side */}
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full p-3 rounded"
                        style={{ 
                          backgroundColor: blueColor,
                          border: '2px solid white',
                          color: 'white',
                          height: '50px'
                        }}
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full p-3 rounded"
                        style={{ 
                          backgroundColor: blueColor,
                          border: '2px solid white',
                          color: 'white',
                          height: '50px'
                        }}
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full p-3 rounded"
                      style={{ 
                        backgroundColor: blueColor,
                        border: '2px solid white',
                        color: 'white',
                        height: '50px'
                      }}
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="w-full p-3 rounded"
                      style={{ 
                        backgroundColor: blueColor,
                        border: '2px solid white',
                        color: 'white',
                        height: '140px',
                        resize: 'vertical'
                      }}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded font-bold transition-all duration-300 transform hover:scale-102 active:scale-95"
                    style={{ 
                      backgroundColor: yellowColor,
                      color: blueColor
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    onClick={(e) => {
                      // Additional click effect
                      e.currentTarget.style.transform = 'scale(0.98)';
                      setTimeout(() => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }, 150);
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'SUBMIT'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

                <div className="w-full flex flex-col">
          {/* 7% left margin, 93% content area */}
          <div className="flex">
            <div className="w-[7%]"></div>
            <div className="w-[93%]">
              {/* Top part with heading */}
              <div className="h-[10vh] flex items-center">
                <h2 className="text-4xl font-bold" style={{ color: blueColor }}>Directions</h2>
              </div>
              
              {/* 3px height line */}
              <div className="h-[5vh] flex items-center">
                <div className="w-full h-[3px]" style={{ backgroundColor: blueColor }}></div>
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
      </div>

      {/* Mobile View (shown on screens smaller than medium) */}
      <div className="md:hidden">
        {/* First Section Mobile */}
        <div className="w-full min-h-screen flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15vh] flex items-center bg-white p-4">
            <span style={{ color: blueColor }} className="text-3xl font-bold mr-2">→</span>
            <h1 style={{ color: blueColor }} className="text-3xl font-bold">Contact Us</h1>
          </div>

          {/* Bottom 35% with Links */}
          <div style={{ backgroundColor: yellowColor }} className="w-full h-[20vh] flex flex-col gap-2 items-start justify-center p-6">
            {/* Quick Links Heading */}
            <h2 className="text-xl text-blue-600 font-bold mb-2">Quick Links</h2>
            
            {/* Links as bullet points */}
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <Link 
                  href="/admission/request_info" 
                  className="text-black transition-all duration-300 hover:underline"
                >
                  Request Info
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-black transition-all duration-300 hover:underline"
                >
                  Google Form
                </a>
              </li>
            </ul>
          </div>
          
          {/* Third Section - Form */}
          <div 
            className="w-full flex items-center justify-center py-12"
            style={{ 
              backgroundColor: blueColor,
              minHeight: '80vh'
            }}
          >
            <div className="w-full max-w-4xl px-4">
              {/* Form Heading */}
              <h2 
                className="text-3xl md:text-4xl font-bold text-center mb-8"
                style={{ color: yellowColor }}
              >
                Get in Touch
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First and Last Name stacked */}
                <div className="space-y-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full p-3 rounded"
                    style={{ 
                      backgroundColor: blueColor,
                      border: '2px solid white',
                      color: 'white',
                      height: '50px'
                    }}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full p-3 rounded"
                    style={{ 
                      backgroundColor: blueColor,
                      border: '2px solid white',
                      color: 'white',
                      height: '50px'
                    }}
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-3 rounded"
                    style={{ 
                      backgroundColor: blueColor,
                      border: '2px solid white',
                      color: 'white',
                      height: '50px'
                    }}
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full p-3 rounded"
                    style={{ 
                      backgroundColor: blueColor,
                      border: '2px solid white',
                      color: 'white',
                      height: '140px',
                      resize: 'vertical'
                    }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded font-bold transition-all duration-300 transform hover:scale-102 active:scale-95"
                  style={{ 
                    backgroundColor: yellowColor,
                    color: blueColor
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={(e) => {
                    // Additional click effect
                    e.currentTarget.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }, 150);
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'SUBMIT'}
                </button>
              </form>
            </div>
          </div>
                  <div className="w-full flex flex-col p-4">
          {/* Heading - left aligned with 10px padding */}
          <div className="h-[10vh] flex items-center pl-[10px]">
            <h2 className="text-3xl font-bold" style={{ color: blueColor }}>Directions</h2>
          </div>
          
          {/* 3px height line - 90vw wide */}
          <div className="h-[5vh] flex items-center justify-center">
            <div className="w-[90vw] h-[3px]" style={{ backgroundColor: blueColor }}></div>
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