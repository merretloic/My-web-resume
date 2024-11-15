import React from "react";
import { motion } from "framer-motion";

const sportsActivities = [
  {
    name: "Handball",
    description: "Nationnal level handball player. Played around 16 years in various teams. It creates a strong competitive spirit and team spirit",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1F2FIKjMpzI5HfcByJDSnHC4gmUsB6U80w&s",
    type: "Team spirit",
  },
  {
    name: "Basketball",
    description: "University level basketball player. It brings agility and versatily",
    image: "https://static.owayo-cdn.com/newhp/img/magazin/basketballregles/regles-basketball-contact-abusif-interdit.jpg",
    type: "Flexibility",
  },
  {
    name: "Athletics",
    description: "Region champion in javelin throw and third in high jump",
    image: "https://dicodusport.fr/wp-content/uploads/2016/02/Definition-Lancer-du-javelot.png",
    type: "Discipline",
  },
];


const SportsSection = () => {
  return (
    <section className="py-16 px-8 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Sports Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sportsActivities.map((activity, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Image */}
            <img
              src={activity.image}
              alt={activity.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            {/* Name */}
            <h3 className="text-2xl font-bold text-white mb-2">{activity.name}</h3>
            {/* Description */}
            <p className="text-gray-300">{activity.description}</p>
            {/* Type */}
            <span className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded-full">
              {activity.type}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SportsSection;
