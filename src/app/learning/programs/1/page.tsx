export default function Page() {
  const yellowColor = "#f8d287";
  const blueColor = "#3f51b5";

  const cards = [
    {
      heading: "Self Help",
      content:
        "Self-help skills empower individuals to manage daily tasks independently, fostering confidence and personal growth through practical life skills development.",
    },
    {
      heading: "Emotional Wellbeing",
      content:
        "Emotional wellbeing focuses on developing coping strategies, emotional regulation, and mental health awareness to maintain balanced psychological health.",
    },
    {
      heading: "Social Skills",
      content:
        "Social skills training enhances communication, relationship building, and interpersonal interactions for successful community integration and meaningful connections.",
    },
    {
      heading: "Home Management",
      content:
        "Home management teaches essential domestic skills including cleaning, organization, budgeting, and maintenance for independent living and household responsibility.",
    },
    {
      heading: "Leisure Skills",
      content:
        "Leisure skills development encourages recreational activities, hobbies, and interests that promote enjoyment, relaxation, and personal fulfillment during free time.",
    },
    {
      heading: "Residential Independent Living",
      content:
        "Residential independent living programs provide comprehensive training for managing personal care, household tasks, and community navigation autonomously.",
    },
    {
      heading: "Readiness for Employment",
      content:
        "Employment readiness prepares individuals with job search skills, interview techniques, workplace etiquette, and professional development for career success.",
    },
    {
      heading: "Employment Training",
      content:
        "Employment training offers vocational skills development, job-specific competencies, and workplace adaptation strategies for diverse career opportunities.",
    },
    {
      heading: "Open Employment",
      content:
        "Open employment initiatives focus on inclusive workplace integration, reasonable accommodations, and ongoing support for sustainable career advancement.",
    },
    {
      heading: "DWS Training",
      content:
        "DWS training provides specialized disability support skills, intervention strategies, and professional development for caregivers and support workers.",
    },
    {
      heading: "Sensitization Awareness and Advocacy",
      content:
        "Sensitization programs promote disability awareness, inclusion practices, and advocacy skills to create more accessible and understanding communities.",
    },
    {
      heading: "Day Boarding",
      content:
        "Day boarding services offer structured daily programs, therapeutic activities, and social engagement opportunities in a supportive supervised environment.",
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
            <p className="text-sm leading-relaxed flex-grow">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
