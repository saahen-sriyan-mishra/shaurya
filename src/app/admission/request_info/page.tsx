// 71
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function RequestInfo() {
  const [isWide, setIsWide] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    relationship: '',
    gender: '',
    diagnosisType: '',
    educationLevel: '',
    comments: ''
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData(prev => ({
      ...prev,
      phone: value || ''
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
          subject: "New Request Info",
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          relationship: formData.relationship,
          gender: formData.gender,
          diagnosisType: formData.diagnosisType,
          educationLevel: formData.educationLevel,
          comments: formData.comments,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus("success");
        setFormData({
          firstName: '',
          lastName: '',
          address: '',
          phone: '',
          email: '',
          relationship: '',
          gender: '',
          diagnosisType: '',
          educationLevel: '',
          comments: ''
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

  const educationLevels = [
    'High School',
    'Undergraduate',
    'Graduate',
    'Doctorate'
  ];

  // Custom styles for the phone input
  const phoneInputStyle = {
    backgroundColor: blueColor,
    border: '2px solid white',
    color: 'Black',
    height: '50px',
    width: '100%'
  };

  const centerSection = (
    <section>
      {/* Desktop View */}
      <div className="hidden md:block">
        <br /><br />
        <div className="w-full flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15vh] flex">
            <div style={{ backgroundColor: yellowColor }} className="w-[7%]"></div>
            <div className="w-[93%] flex items-center">
              &nbsp;&nbsp;
              <span style={{ color: blueColor }} className="text-4xl font-bold">→</span>
              <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">Request Info</h1>
            </div>
          </div>

          {/* Middle 20% */}
          <div className="w-full h-[20vh] flex">
            <div className="w-[7%] bg-white"></div>
            <div style={{ backgroundColor: yellowColor }} className="w-[93%] flex items-center">
              <p style={{ color: blueColor }} className="ml-6 italic text-2xl">
                Empowering Lives Through Comprehensive Care and Support
              </p>
            </div>
          </div>

          {/* Bottom 65% */}
          <div className="w-full h-[115vh] flex">
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
                  
                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block mb-2" style={{ color: yellowColor }}>Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
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
                  
                  {/* Phone & Email */}
                  <div className="flex gap-5">
                    <div className="flex-1">
                      <label className="block mb-2" style={{ color: yellowColor }}>Phone Number</label>
                      <div className="PhoneInput">
                        <PhoneInput
                          international
                          defaultCountry="IN"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          style={phoneInputStyle}
                          className="PhoneInputInput"
                        />
                      </div>
                    </div>
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
                  </div>
                  
                  {/* Relationship & Gender */}
                  <div className="flex gap-5">
                    <div className="flex-1">
                      <label htmlFor="relationship" className="block mb-2" style={{ color: yellowColor }}>Relationship to Trainee</label>
                      <input
                        type="text"
                        id="relationship"
                        name="relationship"
                        value={formData.relationship}
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
                      <label htmlFor="gender" className="block mb-2" style={{ color: yellowColor }}>Gender</label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
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
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Diagnosis Type & Education Level */}
                  <div className="flex gap-5">
                    <div className="flex-1">
                      <label htmlFor="diagnosisType" className="block mb-2" style={{ color: yellowColor }}>Diagnosis Type</label>
                      <input
                        type="text"
                        id="diagnosisType"
                        name="diagnosisType"
                        value={formData.diagnosisType}
                        onChange={handleChange}
                        className="p-3"
                        style={{ 
                          backgroundColor: blueColor, 
                          border: '2px solid white', 
                          color: 'white',
                          height: '50px',
                          width: '100%'
                        }}
                        placeholder="Enter diagnosis type"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-2" style={{ color: yellowColor }}>Education Level</label>
                      <div className="grid grid-cols-2 gap-2">
                        {educationLevels.map((level) => (
                          <label key={level} className="flex items-center" style={{ color: yellowColor }}>
                            <input
                              type="radio"
                              name="educationLevel"
                              value={level}
                              checked={formData.educationLevel === level}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            {level}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Comments */}
                  <div>
                    <label htmlFor="comments" className="block mb-2" style={{ color: yellowColor }}>Comments</label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
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
                            d="M4 12a8 8 0 018-8V0C5.373 0 极 5.373 0 12h4z"
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
          <br /><br />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="w-full min-h-screen flex flex-col">
          {/* Top 15% */}
          <div className="w-full h-[15%] flex items-center bg-white p-4">
            <span style={{ color: blueColor }} className="text-3xl font-bold mr-2">→</span>
            <h1 style={{ color: blueColor }} className="text-3xl font-bold">Request Info</h1>
          </div>

          {/* Upper Middle 15% */}
          <div style={{ backgroundColor: yellowColor }} className="w-full h-[15%] flex items-center p-4">
            <p style={{ color: blueColor }} className="ml-6 italic text-2xl">
              Empowering Lives Through Comprehensive Care and Support
            </p>
          </div>

          {/* Lower Middle 75% */}
          <div style={{ backgroundColor: blueColor }}>
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
                    { id: "address", label: "Address", type: "text" },
                    { id: "email", label: "Email", type: "email" },
                    { id: "relationship", label: "Relationship to Trainee", type: "text" },
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
                        value={formData[id]}
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

                  {/* Phone Number - Mobile */}
                  <div className="w-full flex flex-col items-center">
                    <label className="mb-1 text-center text-base font-medium" style={{ color: yellowColor }}>
                      Phone Number
                    </label>
                    <div className="w-full" style={{ width: "75vw" }}>
                      <PhoneInput
                        international
                        defaultCountry="IN"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        style={{
                          backgroundColor: blueColor,
                          border: "2px solid white",
                          color: "white",
                          width: "100%",
                          height: "32px",
                        }}
                      />
                    </div>
                  </div>

                  {/* Gender - Mobile */}
                  <div className="w-full flex flex-col items-center">
                    <label htmlFor="gender-mobile" className="mb-1 text-center text-base font-medium" style={{ color: yellowColor }}>
                      Gender
                    </label>
                    <select
                      id="gender-mobile"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="p-1.5 rounded text-white"
                      style={{
                        backgroundColor: blueColor,
                        border: "2px solid white",
                        width: "75vw",
                        height: "32px",
                      }}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>

                  {/* Diagnosis Type - Mobile */}
                  <div className="w-full flex flex-col items-center">
                    <label htmlFor="diagnosisType-mobile" className="mb-1 text-center text-base font-medium" style={{ color: yellowColor }}>
                      Diagnosis Type
                    </label>
                    <input
                      type="text"
                      id="diagnosisType-mobile"
                      name="diagnosisType"
                      value={formData.diagnosisType}
                      onChange={handleChange}
                      className="p-1.5 rounded text-white"
                      style={{
                        backgroundColor: blueColor,
                        border: "2px solid white",
                        width: "75vw",
                        height: "32px",
                      }}
                      placeholder="Enter diagnosis type"
                      required
                    />
                  </div>

                  {/* Education Level - Mobile */}
                  <div className="w-full flex flex-col items-center">
                    <label className="mb-1 text-center text-base font-medium" style={{ color: yellowColor }}>
                      Education Level
                    </label>
                    <div className="grid grid-cols-2 gap-2 w-full" style={{ width: "75vw" }}>
                      {educationLevels.map((level) => (
                        <label key={level} className="flex items-center text-sm" style={{ color: yellowColor }}>
                          <input
                            type="radio"
                            name="educationLevel"
                            value={level}
                            checked={formData.educationLevel === level}
                            onChange={handleChange}
                            className="mr-1"
                          />
                          {level}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Comments - Mobile */}
                  <div className="w-full flex flex-col items-center">
                    <label
                      htmlFor="comments-mobile"
                      className="mb-1 text-center text-base font-medium"
                      style={{ color: yellowColor }}
                    >
                      Comments
                    </label>
                    <textarea
                      id="comments-mobile"
                      name="comments"
                      value={formData.comments}
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
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className={isWide ? "w-[95%] mx-auto" : ""}>
        {centerSection}
      </div>
    </div>
  );
}