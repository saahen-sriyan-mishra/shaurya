"use client";

import { useState, useEffect } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function DWS_form() {
  const [isWide, setIsWide] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    
    // Educational Qualification
    highestDegree: '',
    relevantCourses: '',
    
    // Experience
    priorExperience: '',
    experienceDetails: 'NA',
    
    // Availability
    preferredJoiningDate: '',
    rolePreference: '',
    
    // Declaration
    signature: '',
    declarationDate: new Date().toISOString().split('T')[0] // Today's date
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
    const { name, value, type } = e.target;
    
    if (type === 'radio' && name === 'priorExperience') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        experienceDetails: value === 'yes' ? '' : 'NA'
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
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
          subject: "New DSW Training Application",
          from_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          form_data: formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus("success");
        setFormData({
          fullName: '',
          dateOfBirth: '',
          gender: '',
          phone: '',
          email: '',
          highestDegree: '',
          relevantCourses: '',
          priorExperience: '',
          experienceDetails: 'NA',
          preferredJoiningDate: '',
          rolePreference: '',
          signature: '',
          declarationDate: new Date().toISOString().split('T')[0]
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

  const phoneInputStyle = {
    backgroundColor: blueColor,
    border: '2px solid white',
    color: 'white',
    height: '3.125rem',
    width: '100%'
  };

  const inputStyle = {
    backgroundColor: blueColor, 
    border: '2px solid white', 
    color: 'white',
    height: '3.125rem',
    width: '100%'
  };

  const textareaStyle = {
    backgroundColor: blueColor, 
    border: '2px solid white', 
    color: 'white',
    width: '100%',
    height: '7.5rem'
  };

  const renderFormSection = (title: string, children: React.ReactNode) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4" style={{ color: yellowColor }}>
        {title}
      </h2>
      {children}
    </div>
  );

  const centerSection = (
    <section>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="w-full flex flex-col">
          {/* Top Section - Fixed height in rem */}
          <div className="w-full flex" style={{ height: '5rem' }}>
            <div style={{ backgroundColor: yellowColor }} className="w-[7%]"></div>
            <div className="w-[93%] flex items-center">
              &nbsp;&nbsp;
              <span style={{ color: blueColor }} className="text-4xl font-bold">→</span>
              <h1 style={{ color: blueColor }} className="text-4xl font-bold ml-4">DSW Training Application</h1>
            </div>
          </div>

          {/* Middle Section - Fixed height in rem */}
          <div className="w-full flex" style={{ height: '6rem' }}>
            <div className="w-[7%] bg-white"></div>
            <div style={{ backgroundColor: yellowColor }} className="w-[93%] flex items-center">
              <p style={{ color: blueColor }} className="ml-6 italic text-2xl">
                Join Our Comprehensive Disability and Autism Support Training Program
              </p>
            </div>
          </div>

          {/* Bottom Section - Auto height for content */}
          <div className="w-full flex">
            <div className="w-[7%]"></div>
            <div
              style={{ backgroundColor: blueColor }}
              className="w-[93%] flex items-center justify-center p-8"
            >
              <div className="w-full max-w-4xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submissionStatus === "success" && (
                    <p className="text-green-500 mt-4 font-semibold text-center">
                      ✅ Your application has been submitted successfully!
                    </p>
                  )}

                  {submissionStatus === "error" && (
                    <p className="text-red-500 mt-4 font-semibold text-center">
                      ❌ Something went wrong. Please try again later.
                    </p>
                  )}

                  {/* Personal Information */}
                  {renderFormSection("Personal Information", (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="fullName" className="block mb-2" style={{ color: yellowColor }}>Full Name</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="p-3"
                          style={inputStyle}
                          required
                        />
                      </div>
                      
                      <div className="flex gap-5">
                        <div className="flex-1">
                          <label htmlFor="dateOfBirth" className="block mb-2" style={{ color: yellowColor }}>Date of Birth</label>
                          <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="p-3"
                            style={inputStyle}
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block mb-2" style={{ color: yellowColor }}>Gender</label>
                          <div className="grid grid-cols-3 gap-2">
                            {['male', 'female', 'other'].map((gender) => (
                              <label key={gender} className="flex items-center" style={{ color: yellowColor }}>
                                <input
                                  type="radio"
                                  name="gender"
                                  value={gender}
                                  checked={formData.gender === gender}
                                  onChange={handleChange}
                                  className="mr-2"
                                  required
                                />
                                {gender.charAt(0).toUpperCase() + gender.slice(1)}
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-5">
                        <div className="flex-1">
                          <label className="block mb-2" style={{ color: yellowColor }}>Contact Number</label>
                          <PhoneInput
                            international
                            defaultCountry="IN"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            style={phoneInputStyle}
                            className="PhoneInputInput"
                          />
                        </div>
                        <div className="flex-1">
                          <label htmlFor="email" className="block mb-2" style={{ color: yellowColor }}>Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3"
                            style={inputStyle}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Educational Qualification */}
                  {renderFormSection("Educational Qualification", (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="highestDegree" className="block mb-2" style={{ color: yellowColor }}>Highest Degree Obtained</label>
                        <input
                          type="text"
                          id="highestDegree"
                          name="highestDegree"
                          value={formData.highestDegree}
                          onChange={handleChange}
                          className="p-3"
                          style={inputStyle}
                          placeholder="e.g., Bachelor of Science in Psychology"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="relevantCourses" className="block mb-2" style={{ color: yellowColor }}>Relevant Courses or Certifications</label>
                        <textarea
                          id="relevantCourses"
                          name="relevantCourses"
                          value={formData.relevantCourses}
                          onChange={handleChange}
                          className="p-3"
                          style={textareaStyle}
                          placeholder="List any relevant courses, certifications, or training programs"
                          required
                        />
                      </div>
                    </div>
                  ))}

                  {/* Experience */}
                  {renderFormSection("Experience", (
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-2" style={{ color: yellowColor }}>
                          Prior Experience in Disability/Autism Care?
                        </label>
                        <div className="flex gap-4">
                          {['yes', 'no'].map((option) => (
                            <label key={option} className="flex items-center" style={{ color: yellowColor }}>
                              <input
                                type="radio"
                                name="priorExperience"
                                value={option}
                                checked={formData.priorExperience === option}
                                onChange={handleChange}
                                className="mr-2"
                                required
                              />
                              {option.charAt(0).toUpperCase() + option.slice(1)}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="experienceDetails" className="block mb-2" style={{ color: yellowColor }}>
                          {formData.priorExperience === 'yes' ? 'Please specify your experience:' : 'No Experience '}
                        </label>
                        <textarea
                          id="experienceDetails"
                          name="experienceDetails"
                          value={formData.experienceDetails}
                          onChange={handleChange}
                          className="p-3"
                          style={textareaStyle}
                          disabled={formData.priorExperience !== 'yes'}
                          required={formData.priorExperience === 'yes'}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Availability */}
                  {renderFormSection("Availability", (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="preferredJoiningDate" className="block mb-2" style={{ color: yellowColor }}>Preferred Joining Date</label>
                        <input
                          type="date"
                          id="preferredJoiningDate"
                          name="preferredJoiningDate"
                          value={formData.preferredJoiningDate}
                          onChange={handleChange}
                          className="p-3"
                          style={inputStyle}
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2" style={{ color: yellowColor }}>Role Preference</label>
                        <div className="flex gap-4">
                          {['full-time', 'part-time'].map((role) => (
                            <label key={role} className="flex items-center" style={{ color: yellowColor }}>
                              <input
                                type="radio"
                                name="rolePreference"
                                value={role}
                                checked={formData.rolePreference === role}
                                onChange={handleChange}
                                className="mr-2"
                                required
                              />
                              {role.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Declaration */}
                  {renderFormSection("Declaration", (
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="declaration"
                          required
                          className="mr-2 mt-1"
                          style={{ color: yellowColor }}
                        />
                        <label htmlFor="declaration" style={{ color: yellowColor }}>
                          "I confirm all details provided are accurate to my best knowledge"
                        </label>
                      </div>
                      <div className="flex gap-5">
                        <div className="flex-1">
                          <label htmlFor="signature" className="block mb-2" style={{ color: yellowColor }}>Signature (Full Name)</label>
                          <input
                            type="text"
                            id="signature"
                            name="signature"
                            value={formData.signature}
                            onChange={handleChange}
                            className="p-3"
                            style={inputStyle}
                            placeholder="Type your full name as signature"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label htmlFor="declarationDate" className="block mb-2" style={{ color: yellowColor }}>Date</label>
                          <input
                            type="date"
                            id="declarationDate"
                            name="declarationDate"
                            value={formData.declarationDate}
                            onChange={handleChange}
                            className="p-3"
                            style={inputStyle}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="flex items-center justify-center font-bold transition-colors duration-300 rounded"
                    style={{
                      backgroundColor: isSubmitting ? "#ccc" : yellowColor,
                      color: blueColor,
                      width: '100%',
                      height: '3.125rem',
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
                        Submitting...
                      </span>
                    ) : (
                      "SUBMIT APPLICATION"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="w-full flex flex-col">
          {/* Top Section */}
          <div className="w-full flex items-center bg-white p-4" style={{ height: '4rem' }}>
            <span style={{ color: blueColor }} className="text-2xl font-bold mr-2">→</span>
            <h1 style={{ color: blueColor }} className="text-2xl font-bold">DSW Training Application</h1>
          </div>

          {/* Middle Section */}
          <div style={{ backgroundColor: yellowColor, height: '4rem' }} className="w-full flex items-center p-4">
            <p style={{ color: blueColor }} className="ml-4 italic text-lg">
              Join Our Comprehensive Training Program
            </p>
          </div>

          {/* Content Section */}
          <div style={{ backgroundColor: blueColor }} className="w-full py-8">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-md px-4">
                <p className="text-center mb-6" style={{ color: yellowColor }}>
                  For the best experience, please use the desktop version to complete this application form.
                </p>
                
                <button
                  type="button"
                  onClick={() => window.location.href = '/contact'}
                  className="flex items-center justify-center font-bold transition-colors duration-300 rounded w-full"
                  style={{
                    backgroundColor: yellowColor,
                    color: blueColor,
                    height: '3rem'
                  }}
                >
                  Contact Us for Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="w-full flex flex-col">
      <div className={isWide ? "w-[100%] mx-auto" : ""}>
        {centerSection}
      </div>
    </div>
  );
}