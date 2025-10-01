'use client'

import Link from 'next/link'

export default function DSWTraining() {
  const yellowColor = "#f8d287";
  const blueColor = "#3f51b5";

  return (
    <div className="w-full">
      {/* 5rem height heading in blue color */}
      <section 
        className="w-full flex items-center justify-center"
        style={{ 
          height: '5rem',
          backgroundColor: blueColor
        }}
      >
        <h1 className="text-4xl font-bold text-white text-center">
          Heading for DSW
        </h1>
      </section>

      {/* 10rem height subheading blue color over yellow background */}
      <section 
        className="w-full flex items-center justify-center"
        style={{ 
          height: '10rem',
          backgroundColor: yellowColor
        }}
      >
        <div 
          className="text-2xl font-semibold text-center max-w-4xl mx-auto px-4"
          style={{ color: blueColor }}
        >
          Subheading.................
        </div>
      </section>

      {/* 3.125rem gap (50px) */}
      <div style={{ height: '3.125rem' }} />

      {/* Repeat 3 times: 5rem heading + 12.5rem body + 1.875rem gap */}
      {[1, 2, 3].map((section) => (
        <div key={section}>
          {/* 5rem heading in blue color */}
          <section 
            className="w-full flex items-center justify-center"
            style={{ 
              height: '5rem',
              backgroundColor: blueColor
            }}
          >
            <h2 className="text-3xl font-bold text-white text-center">
              {section === 1 && 'Heading content 1'}
              {section === 2 && 'Heading content 2'}
              {section === 3 && 'Heading content 3'}
            </h2>
          </section>

          {/* 12.5rem body in blue color over yellow background */}
          <section 
            className="w-full flex items-center justify-center"
            style={{ 
              height: '12.5rem',
              backgroundColor: yellowColor
            }}
          >
            <div 
              className="text-lg text-center max-w-4xl mx-auto px-4"
              style={{ color: blueColor }}
            >
              {section === 1 && (
                ' content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1 '
              )}
              {section === 2 && (
                ' content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2 '
              )}
              {section === 3 && (
                ' content 3 content 3 content 3 content 3 content 3 content 3 content 3 content 3 content 3 content 3 content 3 content 3 content 3 content 3 content 3 content 3 content 3 content 3 content 3 '
              )}
            </div>
          </section>

          {/* 1.875rem gap (30px) - only for first two sections */}
          {section < 3 && <div style={{ height: '1.875rem' }} />}
        </div>
      ))}

      {/* Centered Apply Now button */}
      <div className="w-full flex justify-center mt-8">
  <Link
    href="/learning/dsw/form"
    className="px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
    style={{
      backgroundColor: blueColor,
      color: 'white'
    }}
  >
    Apply Now
  </Link>
</div>
      <br/>
    </div>
  )
}