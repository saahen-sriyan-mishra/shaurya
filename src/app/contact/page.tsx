"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, User, Edit, Play, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('9FAprjy_JjSTKjEMi'); // Replace with your EmailJS public key
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_2sqon2m', // Replace with your EmailJS service ID
      'template_8u5qf4q', // Replace with your EmailJS template ID
      formRef.current,
      '9FAprjy_JjSTKjEMi' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      setSubmitSuccess(true);
      formRef.current?.reset();
    }, (error) => {
      console.log(error.text);
      setSubmitError(true);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <main className="min-h-screen flex flex-col bg-white px-4 sm:px-8 lg:px-24">
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r rounded-b-none rounded-2xl from-[#F8FAFF] via-[#EEF4FF] to-[#FFECEC] py-2.5 lg:py-4">
        <div className="container flex items-center justify-center gap-4 text-[#535353]">
          <p className="sm:text-sm md:text-base">
            Get Quick response via contact us on WhatsApp
          </p>
          <Image src="/WhatsApp.png" alt="WhatsApp" width={20} height={20} />
          <span className="font-medium text-sm text-black">+91 9650315800</span>
        </div>
      </div>

      {/* Section 1: Hero */}
      <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] w-full bg-[#BFF9EA] rounded-t-none rounded-2xl px-4 sm:px-8 md:px-16 lg:px-24 pt-8 sm:pt-12 md:pt-16 flex flex-col items-center text-center overflow-hidden">
        {/* Title */}
        <h1 className="text-[8vw] sm:text-[4vw] md:text-[6vw] lg:text-[4vw] font-extrabold uppercase tracking-tight text-[#222223] leading-tight">
          Contact <span className="font-normal">US</span>
        </h1>

        {/* CTA Button - Positioned Bottom Left */}
        <div className="w-[95%] mx-auto flex justify-between items-center mt-6 absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Left: Support Button */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <button className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-medium border border-black rounded-full hover:bg-gray-200 transition">
              Support Shaurya
            </button>
            <button className="bg-white p-2 sm:p-2.5 md:p-3 rounded-full border border-black hover:bg-gray-200 transition">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Right: Play Button */}
          <button className="bg-white p-2 sm:p-2.5 md:p-3 rounded-full border border-black hover:bg-gray-200 transition">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Illustration */}
        <div className="absolute -bottom-4 sm:-bottom-2 md:bottom-0 w-full flex justify-center">
          <Image
            src="/contact.png"
            alt="Contact Illustration"
            width={500}
            height={400}
            className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section className="container mx-auto px-6 py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Left Column */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
                Have Questions?
                <br />
                <span className="text-[#4D194D]">Get in Touch!</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#21B573] p-2 sm:p-2.5 md:p-3 rounded-lg">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#344054]" />
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-[15px] text-[#344054]">
                    B 104/2, Western Avenue,
                    <br />
                    Maharani Bagh,
                    <br />
                    New Friends Colony,
                    <br />
                    New Delhi, Delhi 110065
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#21B573] p-2 sm:p-2.5 md:p-3 rounded-lg">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#344054]" />
                </div>
                <div className="space-y-1">
                  <Link
                    href="tel:01140518320"
                    className="text-sm sm:text-base md:text-[15px] text-[#344054] hover:underline block"
                  >
                    011 40518320
                  </Link>
                  <Link
                    href="tel:+919650315800"
                    className="text-sm sm:text-base md:text-[15px] text-[#344054] hover:underline block"
                  >
                    +91 9650315800
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form 
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6 sm:space-y-7 md:space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
              <div className="relative">
                <div className="absolute left-0 top-2.5">
                  <User className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-gray-400" />
                </div>
                <Input
                  name="user_name"
                  placeholder="Name"
                  required
                  className="border-0 border-b border-gray-200 rounded-none pl-6 sm:pl-7 pr-0 py-2 text-sm sm:text-base md:text-[15px] placeholder:text-gray-400 focus:ring-0 focus:border-[#4D194D]"
                />
              </div>
              <div className="relative">
                <div className="absolute left-0 top-2.5">
                  <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-gray-400" />
                </div>
                <Input
                  name="user_email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="border-0 border-b border-gray-200 rounded-none pl-6 sm:pl-7 pr-0 py-2 text-sm sm:text-base md:text-[15px] placeholder:text-gray-400 focus:ring-0 focus:border-[#4D194D]"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-2.5">
                <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-gray-400" />
              </div>
              <Input
                name="user_phone"
                placeholder="Phone"
                className="border-0 border-b border-gray-200 rounded-none pl-6 sm:pl-7 pr-0 py-2 text-sm sm:text-base md:text-[15px] placeholder:text-gray-400 focus:ring-0 focus:border-[#4D194D]"
              />
            </div>

            <div className="relative">
              <div className="absolute left-0 top-2.5">
                <Edit className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-gray-400" />
              </div>
              <select 
                name="subject"
                className="w-full border-0 border-b border-gray-200 rounded-none pl-6 sm:pl-7 pr-0 py-2 text-sm sm:text-base md:text-[15px] text-gray-400 focus:ring-0 focus:border-[#4D194D] bg-transparent"
              >
                <option value="">Subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-2.5">
                <Edit className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-gray-400" />
              </div>
              <Textarea
                name="message"
                placeholder="Message"
                required
                className="border-0 border-b border-gray-200 rounded-none pl-6 sm:pl-7 pr-0 py-2 text-sm sm:text-base md:text-[15px] placeholder:text-gray-400 focus:ring-0 focus:border-[#4D194D] min-h-[80px] sm:min-h-[90px] md:min-h-[100px] resize-none"
              />
            </div>

            <div className="flex items-start gap-2 sm:gap-3 pt-2">
              <Checkbox
                id="terms"
                required
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 rounded-sm border-gray-300 text-[#4D194D] focus:ring-[#4D194D]"
              />
              <label htmlFor="terms" className="text-xs sm:text-sm md:text-sm text-gray-500">
                I agree that my data is collected and stored
              </label>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[#21B573] text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-2.75 md:py-3 text-sm sm:text-base md:text-base rounded-lg hover:bg-[#4D194D]/90 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitSuccess && (
              <div className="text-green-600 text-sm sm:text-base">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitError && (
              <div className="text-red-600 text-sm sm:text-base">
                Failed to send message. Please try again later.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Section 3: Map */}
      <section className="container mx-auto px-6 pb-20">
        <div className="border-4 border-gray-300 w-full h-[400px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221.35112634775854!2d77.26058683448056!3d28.57250479771755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30004ada037%3A0x3f1d810ebd70943c!2sRavi%20Gupta%20Senior%20Advocate%20Office!5e0!3m2!1sen!2sin!4v1740063373068!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}