export default function Page() {
  const yellowColor = "#f8d287";
  const blueColor = "#3f51b5";

  const cards = [
    {
      heading: "Physical Environment",
      content:
        "Self-help skills empower individuals to manage daily tasks independently, fostering confidence and personal growth through practical life skills development.",
    },
    {
      heading: "Common Area",
      content:
        "Emotional wellbeing focuses on developing coping strategies, emotional regulation, and mental health awareness to maintain balanced psychological health.",
    },
    {
      heading: "Amenities",
      content:
        "Social skills training enhances communication, relationship building, and interpersonal interactions for successful community integration and meaningful connections.",
    },
    {
      heading: "Support Services",
      content:
        "Home management teaches essential domestic skills including cleaning, organization, budgeting, and maintenance for independent living and household responsibility.",
    },
    {
      heading: "Communication Aids",
      content:
        "Leisure skills development encourages recreational activities, hobbies, and interests that promote enjoyment, relaxation, and personal fulfillment during free time.",
    },
    {
      heading: "Activities and Programs",
      content:
        "Residential independent living programs provide comprehensive training for managing personal care, household tasks, and community navigation autonomously.",
    },
    {
      heading: "Safety & Accessibility",
      content:
        "Employment readiness prepares individuals with job search skills, interview techniques, workplace etiquette, and professional development for career success.",
    },
    {
      heading: "Food",
      content:
        "Employment training offers vocational skills development, job-specific competencies, and workplace adaptation strategies for diverse career opportunities.",
    },
    {
      heading: "House Keeping",
      content:
        "Open employment initiatives focus on inclusive workplace integration, reasonable accommodations, and ongoing support for sustainable career advancement.",
    },
    {
      heading: "Community Engagement",
      content:
        "DWS training provides specialized disability support skills, intervention strategies, and professional development for caregivers and support workers.",
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
            className="shadow-lg p-6 flex flex-col transition-transform duration-"
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
