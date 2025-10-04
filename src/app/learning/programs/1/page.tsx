export default function Page() {
  const yellowColor = "#f8d287";
  const blueColor = "#3f51b5";

  const cards = [
    {
      heading: "Self Help",
      content:
        "Self-help skills are the foundation of independence, enabling individuals to care for themselves with confidence. These include daily activities such as dressing, bathing, grooming, and eating, which promote autonomy and reduce reliance on others. For neurodiverse individuals, mastering self-help skills builds self-esteem and encourages a sense of accomplishment. Structured routines, step-by-step teaching, and supportive tools help make these tasks easier to learn. Developing self-help abilities not only improves practical living but also instills dignity and respect. Focusing on these skills ensures that every individual can actively participate in their own care and daily life.",
    },
    {
      heading: "Emotional Wellbeing",
      content:
        "Emotional well-being focuses on nurturing positive mental health and resilience in everyday life. For neurodiverse individuals, recognizing and managing emotions is an essential skill to reduce stress, anxiety, or frustration. Learning relaxation techniques, building coping strategies, and teaching self-expression in safe ways are important parts of this growth. With the right support, individuals can understand their feelings, improve confidence, and engage more positively in social and work environments. Emotional well-being creates a foundation for stronger relationships and overall happiness. A stable emotional state enables neurodiverse individuals to thrive while achieving their personal and professional goals.",
    },
    {
      heading: "Social Skills",
      content:
        "Social skills help individuals communicate effectively, build relationships, and interact within their communities. For neurodiverse individuals, developing social skills includes learning conversation basics, understanding body language, practicing empathy, and respecting personal space. Role-playing, group activities, and guided practice can make these interactions easier and more meaningful. Social skills training focuses on improving teamwork, friendship-building, and problem-solving in everyday situations. These skills are essential for both personal fulfillment and professional success. Strong social skills help neurodiverse individuals connect, collaborate, and feel accepted in wider communities, fostering inclusion and belonging.",
    },
    {
      heading: "Home Management",
      content:
        "Home management skills encourage independence by teaching individuals how to maintain and organize their living spaces. These include cooking simple meals, cleaning, doing laundry, managing money, and basic safety practices. For neurodiverse individuals, learning step-by-step routines and using visual aids make these skills practical and easier to follow. Developing home management abilities supports self-sufficiency, reduces dependency, and prepares individuals to live successfully in their own homes. These skills also encourage responsibility, time management, and problem-solving. With structured training, neurodiverse individuals can confidently take care of their personal space while contributing actively to family or shared living environments.",
    },
    {
      heading: "Leisure Skills",
      content:
        "Leisure skills promote relaxation, creativity, and enjoyment in life. For neurodiverse individuals, engaging in hobbies, sports, music, art, or recreational activities can improve mental well-being, reduce stress, and enhance social engagement. Learning how to structure free time encourages independence and prevents boredom. Participation in group activities further boosts confidence, teamwork, and a sense of belonging. Leisure skills also encourage self-expression, enabling individuals to discover their interests and talents. By exploring both indoor and outdoor recreational options, neurodiverse individuals build a balanced lifestyle. Encouraging leisure promotes happiness, healthy routines, and opportunities for lifelong enjoyment.",
    },
    {
      heading: "Residential Independent Living",
      content:
        "Residential independent living skills prepare neurodiverse individuals to manage life on their own with dignity and confidence. These include self-care, safety awareness, budgeting, meal preparation, and problem-solving within a home environment. Training in this area often uses gradual steps, visual instructions, and real-life practice to build competence. Independent living fosters a sense of empowerment and achievement while reducing reliance on caregivers. It also allows individuals to integrate into communities, practice decision-making, and take responsibility for daily routines. By developing these skills, neurodiverse individuals can embrace adulthood, enjoy independence, and participate meaningfully in society.",
    },
    {
      heading: "Readiness for Employment",
      content:
        "Readiness for employment skills help prepare neurodiverse individuals for job opportunities by focusing on essential workplace requirements. These include time management, communication, teamwork, responsibility, and understanding work environments. Preparing for employment also involves building confidence, practicing interview skills, and exploring career interests. Structured training ensures individuals learn how to follow schedules, meet expectations, and adapt to different roles. Developing readiness skills fosters independence, financial stability, and self-worth. With the right guidance, neurodiverse individuals gain the ability to step into employment opportunities that match their strengths and talents while contributing meaningfully to society.",
    },
    {
      heading: "Employment Training",
      content:
        "Employment training provides practical skills needed for specific jobs, adapted to the abilities and interests of neurodiverse individuals. This training includes task-specific instruction, workplace etiquette, handling tools, and customer service skills. By learning through hands-on experiences, individuals gain confidence and familiarity with professional environments. Job coaches and mentors often play an important role in guiding this process. Employment training also emphasizes problem-solving, adaptability, and workplace safety. The goal is to bridge the gap between education and employment. With proper training, neurodiverse individuals are equipped for meaningful careers that promote independence and community inclusion.",
    },
    {
      heading: "Open Employment",
      content:
        "Open employment refers to placing neurodiverse individuals in regular workplaces alongside their peers, with or without special support. This model emphasizes inclusion, equality, and opportunities for personal growth. Open employment provides exposure to real-world environments, helping individuals build confidence, develop skills, and earn financial independence. Employers can create inclusive settings by offering accommodations, mentorship, and sensitivity training to colleagues. This approach not only benefits the employees but also promotes diversity in the workplace. Open employment empowers neurodiverse individuals to showcase their abilities, contribute meaningfully, and integrate seamlessly into community and professional life.",
    },
    {
      heading: "DSW Training",
      content:
        "DSW (Disability Support Worker) training focuses on preparing individuals to provide specialized care and support for neurodiverse people. This training includes understanding disabilities, learning effective communication strategies, and offering assistance with daily living and vocational goals. For neurodiverse learners, exploring DSW training as a career path can open opportunities to give back and build meaningful professional lives. The training emphasizes empathy, patience, and advocacy, helping individuals support others while enhancing their own skills. DSW training also fosters awareness about disability rights and inclusion, ensuring that participants are well-prepared to contribute effectively to both care and advocacy.",
    },
    {
      heading: "Sensitization Awareness and Advocacy",
      content:
        "Sensitisation, awareness, and advocacy aim to educate communities about neurodiversity, reduce stigma, and promote inclusion. These skills help individuals speak up for themselves and others, ensuring equal rights and opportunities. Neurodiverse individuals learn how to share their stories, raise awareness, and encourage acceptance in schools, workplaces, and communities. Practicing advocacy builds confidence, leadership, and a sense of empowerment. Sensitisation activities may include workshops, campaigns, and discussions that encourage empathy and understanding. By developing these skills, neurodiverse individuals, along with allies, contribute to creating fairer, more inclusive societies that value diversity.",
    },
    {
      heading: "Day Boarding",
      content:
        "Day boarding employment programs combine work opportunities with structured support in safe environments. These programs provide neurodiverse individuals with meaningful employment while also ensuring guidance, mentoring, and skill development. Day boarding setups often include training in vocational skills, social development, and personal care, ensuring a balanced routine. This approach allows individuals to engage in productive work while having access to professional support throughout the day. Day boarding employment fosters self-reliance, financial independence, and confidence, while families gain reassurance about ongoing supervision. Such programs create stepping stones toward open employment and greater independence.",
    },
  ];

  const cardStyle = {
    backgroundColor: yellowColor,
    color: blueColor,
  };

  return (
    <div className="px-4 py-8">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          xl:grid-cols-4 
          gap-6 
          justify-center
          "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="shadow-lg p-6 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            style={cardStyle}
          >
            <h2 className="text-xl font-bold mb-4 text-center">
              {card.heading}
            </h2>
            <p className="text-sm leading-relaxed flex-grow text-justify">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
