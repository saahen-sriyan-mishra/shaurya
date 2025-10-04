'use client'

import Link from 'next/link'

export default function DWSTraining() {
  const yellowColor = "#f8d287";
  const blueColor = "#3f51b5";

  const sectionContent = [
    {
      title: "Benefits of SFT's DSW Training Program",
      content: (
        <div className="text-lg max-w-4xl mx-auto px-4 text-left">
          <p className="mb-4"><strong className="underline">Certification Valid Nationwide:</strong> Receive a disability sector certification, valid for jobs and placements throughout India, including community-based programs and private care organizations.</p>
          <p className="mb-4"><strong className="underline">Specialization in Autism Support:</strong> Evidence-based training on autism spectrum disorder (ASD), neurodiversity, communication tools, and positive behavior management.</p>
          <p className="mb-4"><strong className="underline">Practical Learning:</strong> Real-life scenarios, workshops, and applied techniques for daily living skills, employment readiness, and social inclusion.</p>
          <p><strong className="underline">Career Advancement:</strong> Open pathways to work with SFT and other respected NGOs, schools, and allied healthcare organizations across the disability space in India.</p>
        </div>
      )
    },
    {
      title: "Roles and Responsibilities of a DSW at SFT",
      content: (
        <div className="text-lg max-w-4xl mx-auto px-4 text-left">
          <p className="italic text-sm mb-4">Certified DSWs play a critical role in the Shaurya Foundation Trust framework:</p>
          <p className="mb-3"><strong className="underline">Independent Living Program (ILP):</strong> Design, monitor, and implement personalized educational and therapeutic programs.</p>
          <p className="mb-3"><strong className="underline">Daily Life Skills Training:</strong> Teach and assist with cooking, hygiene, mobility, and personal organization, essential for fostering independence.</p>
          <p className="mb-3"><strong className="underline">Employment Skills:</strong> Prepare individuals for the workplace with resume building, communication exercises, and problem-solving tasks.</p>
          <p className="mb-3"><strong className="underline">Behaviour and Social Support:</strong> Use inclusive, strengths-based strategies for communication, behavior regulation, and social engagement.</p>
          <p><strong className="underline">Community and Family Liaison:</strong> Coordinate with families, therapists, and community organizations for holistic care.</p>
        </div>
      )
    },
    {
      title: "Who Should Apply?",
      content: (
        <div className="text-lg max-w-4xl mx-auto px-4 text-left">
          <ul className="list-disc list-inside space-y-2">
            <li>Aspiring disability support professionals</li>
            <li>Experienced caregivers seeking certification</li>
            <li>Educators and allied health workers working with neurodiverse or autistic people</li>
            <li>Individuals passionate about social impact and inclusive care</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="w-full">
      {/* 15rem height heading in blue color */}
      <section 
        className="w-full flex items-center justify-center"
        style={{ 
          height: '20rem',
          backgroundColor: blueColor
        }}
      >
        <h1 className="text-4xl font-bold text-white text-center max-w-6xl px-4">
          Become a certified Disability Support Worker (DSW) through Shaurya Foundation Trust (SFT) and shape your career in the growing disability sector in India.
        </h1>
      </section>

      {/* 15rem height subheading blue color over yellow background */}
      <section 
        className="w-full flex items-center justify-center"
        style={{ 
          height: '15rem',
          backgroundColor: yellowColor
        }}
      >
        <div 
          className="text-2xl font-semibold italic text-center max-w-4xl mx-auto px-4"
          style={{ color: blueColor }}
        >
          Our program focuses on building essential skills to support neurodiverse and autistic individuals, aligning with best practices recommended by leading organizations and recognized certifications across India.  
        </div>
      </section>

      {/* 3.125rem gap (50px) */}
      <div style={{ height: '3.125rem' }} />

      {/* Dynamic sections */}
      {sectionContent.map((section, index) => (
        <div key={index}>
          {/* 5rem heading in blue color */}
          <section 
            className="w-full flex items-center justify-center"
            style={{ 
              height: '5rem',
              backgroundColor: blueColor
            }}
          >
            <h2 className="text-3xl font-bold text-white text-center px-4">
              {section.title}
            </h2>
          </section>

          {/* Dynamic height body in blue color over yellow background */}
          <section 
            className="w-full flex items-center justify-center py-8"
            style={{ 
              backgroundColor: yellowColor
            }}
          >
            <div style={{ color: blueColor }}>
              {section.content}
            </div>
          </section>

          {/* 1.875rem gap (30px) - only for first two sections */}
          {index < 2 && <div style={{ height: '1.875rem' }} />}
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