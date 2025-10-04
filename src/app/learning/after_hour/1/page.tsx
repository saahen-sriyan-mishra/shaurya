export default function Page() {
  const yellowColor = "#f8d287";
  const blueColor = "#3f51b5";

  const cards = [
    {
      heading: "ARTS",
      content:
        "At Shaurya Foundation Trust, trainees explore creativity through a variety of art forms that nurture imagination and fine motor skills. Activities include vibrant canvas art, engaging mud art painting, crafting with decorative materials, and practicing intricate Mandala art. Each session allows trainees to express themselves freely, build confidence, and experience the joy of creating something beautiful.",
    },
    {
      heading: "THEATRE",
      content:
        "Theatre is a lively part of our extracurricular program, welcoming both verbal and non-verbal trainees. Participants present knowledge-rich stories through acts, drama, and the expressive art of mime. These activities foster communication, teamwork, and self-confidence, creating a stage where every individual’s talents are recognized and celebrated.",
    },
    {
      heading: "BAKING",
      content:
        "Our kitchen becomes a place of excitement and learning as trainees engage in hands-on baking activities. Guided by instructors, they master the art of making multi-flavour cookies, decadent brownies, muffins, and a range of delicious mathis. These sessions support independence, develop life skills, and spark genuine moments of happiness.",
    },
    {
      heading: "SUBLIMATION",
      content:
        "Trainees turn digital creativity into tangible products by designing artwork using software like Canva and Photoshop. Their unique creations are then sublimated onto cups, coasters, tote bags, and more. This process builds digital literacy, technical skills, and a sense of accomplishment as trainees see their digital art come to life.",
    },
    {
      heading: "DANCE & MUSIC",
      content:
        "Music and dance enrich our community with energy and expression. Trainees practice regularly with professional instructors, learning to play musical instruments, sing, and dance across a blend of genres including contemporary and Indian-Western fusion. This encourages coordination, rhythm, and joyful connections among peers.",
    },
    {
      heading: "FUN SPORTS",
      content:
        "Our fun sports program features both indoor and outdoor games to ensure everyone stays active and engaged. Activities include carrom board, basketball, ball throw, balloon run, and water-filling games, providing healthy competition, teamwork, and plenty of laughter each day.",
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
