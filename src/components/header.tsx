'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [mobileAdmissionOpen, setMobileAdmissionOpen] = useState(false)
  const [mobileLearningOpen, setMobileLearningOpen] = useState(false) // New state for "Learning"

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white bg-opacity-95 border-b border-gray-200 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2C438A] rounded-full flex items-center justify-center">

                <Image
                  src="/logo2.png"
                  alt="Shaurya Logo"
                  width={50}
                  height={50}
                  className="brightness-0 invert mix-blend-difference"
                />
              </div>
              <span className="text-[#2C438A] text-xl font-extrabold">Shaurya</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:gap-x-12">

            {/* About Us dropdown */}
            <div className="relative group">
              <button className="text-sm/6 font-semibold text-gray-900 hover:text-[#2C438A]">
                About Us
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <Link href="/about/our_center" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Center</Link>
                <Link href="/about/faculty" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Faculty</Link>
                <Link href="/about/why_us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Why Us</Link>
              </div>
            </div>

            {/* Admissions dropdown */}
            <div className="relative group">
              <button className="text-sm/6 font-semibold text-gray-900 hover:text-[#2C438A]">
                Admissions
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <Link href="/admission/request_info" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Request Info</Link>
                <Link href="/admission/visit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Visit</Link>
              </div>
            </div>

            {/* ✅ Updated Learning Dropdown with DWS Training */}
            <div className="relative group">
              <button className="text-sm/6 font-semibold text-gray-900 hover:text-[#2C438A]">
                Learning
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <Link href="/learning/programs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Programs</Link>
                <Link href="/learning/after_hour" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">After Hour</Link>
                <Link href="/learning/hostel_life" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hostel Life</Link>
                <Link href="/learning/dws" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DSW Training</Link>
              </div>
            </div>

            {/* Other navigation */}
            <Link href="/news_events" className="text-sm/6 font-semibold text-gray-900 hover:text-[#2C438A]">
              News & Events
            </Link>
            
            {/* ✅ New Support Button */}
            <Link href="/support" className="text-sm/6 font-semibold text-gray-900 hover:text-[#2C438A]">
              Support
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="bg-[#2C438A] hover:bg-[#2C438A]/90 text-sm text-white px-5 py-2"
            >
              Contact Now →
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="relative z-50">
          <div className="fixed inset-0 bg-gray-900/70" aria-hidden="true" onClick={closeMobileMenu} />

          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
                <div className="w-12 h-12 bg-[#2C438A] rounded-full flex items-center justify-center">
                  <Image src="/logo2.png" alt="Shaurya Logo" width={40} height={40} className="brightness-0 invert mix-blend-difference" />
                </div>
                <span className="text-[#2C438A] text-xl font-bold">Shaurya</span>
              </Link>
              <button type="button" onClick={closeMobileMenu} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">

                  {/* Mobile About Us Dropdown */}
                  <div>
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      About Us
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileAboutOpen && (
                      <div className="ml-4 space-y-2">
                        <Link href="/about/our_center" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Center</Link>
                        <Link href="/about/faculty" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Faculty</Link>
                        <Link href="/about/why_us" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Why Us</Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile Admissions Dropdown */}
                  <div>
                    <button
                      onClick={() => setMobileAdmissionOpen(!mobileAdmissionOpen)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Admissions
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileAdmissionOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileAdmissionOpen && (
                      <div className="ml-4 space-y-2">
                        <Link href="/admission/request_info" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Request Info</Link>
                        <Link href="/admission/visit" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Visit</Link>
                      </div>
                    )}
                  </div>

                  {/* ✅ Updated Mobile Learning Dropdown with DWS Training */}
                  <div>
                    <button
                      onClick={() => setMobileLearningOpen(!mobileLearningOpen)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Learning
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileLearningOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileLearningOpen && (
                      <div className="ml-4 space-y-2">
                        <Link href="/learning/programs" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Programs</Link>
                        <Link href="/learning/after_hour" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">After Hour</Link>
                        <Link href="/learning/hostel_life" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Hostel Life</Link>
                        <Link href="/learning/dws" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">DSW Training</Link>
                      </div>
                    )}
                  </div>

                  {/* Products */}
                  <Link href="/news_events" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    News & Events
                  </Link>
                  
                  {/* ✅ New Support Button for Mobile */}
                  <Link href="/support" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Support
                  </Link>
                </div>

                <div className="py-6">
                  <Link href="/contact" onClick={closeMobileMenu} className="block w-full bg-[#2C438A] hover:bg-[#2C438A]/90 text-sm text-white px-5 py-2 text-center">
                    Contact Now →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}