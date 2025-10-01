export default function Page() {
  const yellowColor = "#f8d287";
  const blueColor = "#3f51b5";

  const cards = [
    {
      heading: "ARTS",
      content:
        "Self-help skills empower individuals to manage daily tasks independently, fostering confidence and personal growth through practical life skills development.",
    },
    {
      heading: "THEATRE",
      content:
        "Emotional wellbeing focuses on developing coping strategies, emotional regulation, and mental health awareness to maintain balanced psychological health.",
    },
    {
      heading: "BAKING",
      content:
        "Social skills training enhances communication, relationship building, and interpersonal interactions for successful community integration and meaningful connections.",
    },
    {
      heading: "SUBLIMATION",
      content:
        "Home management teaches essential domestic skills including cleaning, organization, budgeting, and maintenance for independent living and household responsibility.",
    },
    {
      heading: "DANCE & MUSIC",
      content:
        "Leisure skills development encourages recreational activities, hobbies, and interests that promote enjoyment, relaxation, and personal fulfillment during free time.",
    },
    {
      heading: "FUN SPORTS",
      content:
        "Residential independent living programs provide comprehensive training for managing personal care, household tasks, and community navigation autonomously.",
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
