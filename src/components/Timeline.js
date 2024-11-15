import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  { year: "2022", event: "Started my journey in Enseirb-Matmeca in Bordeaux",image: "https://enseirb-matmeca.bordeaux-inp.fr/sites/default/files/styles/image_droite/public/bordeaux_inp_batiment_0.jpg?itok=_vZtg5YA" ,link: null },
  { year: "2023", event: "Built school projects in C, Java and HTML like a Motus like game (in Java)",image: "https://images.javatpoint.com/core/images/difference-between-c-and-java.png", link: null },
  { year: "2024", event: "Discovery of Javascript and Database managment with a wonderfull project 'Dataviz4car'. An eight person group project which lasted 6 months. We built in a cooperative way an application to simulate intelligent vehicles data for researchers. This project was mentored by Thales industries.",image: "https://miro.medium.com/v2/resize:fit:1400/1*NIGv7EioqogQwIN_RWV7zw.png", link: "https://github.com/Hakiba/backend-data4viz.git" },
  { year: "2024", event: "Made a new design for the Bordeaux-inp internationnal web site ",image: "https://moodle.bordeaux-inp.fr/pluginfile.php/1/theme_boost_union/logocompact/300x300/1725870902/logo_bxinp_blanccouleur_fondnoir_redim-removebg-preview.png", link: "https://www.bordeaux-inp.fr/fr" },
  { year: "2024", event: "Internship in Melbourne University for three months. Start a project from scratch, this project dealt with problem researchers on electric vehicles had. I built an user-friendly application in Javascript (Front-end) and Python (Back-end) to test new algorithm on either travel models or charging/discharging models for EVs",image: "https://www.lendlease.com/siteassets/lendlease/australia/projects/melbourneconnect_400x400.jpg", link: "https://github.com/disnetlab/EV-SmartSim.git" },
];

const Timeline = () => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>
      <div className="flex flex-col items-center space-y-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-2/3 flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={`Event ${item.year}`}
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-4 md:mb-0 md:mr-6"
            />
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-bold">{item.year}</h3>
              <p>
                {item.event}{" "}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline hover:text-blue-600"
                  >
                    Learn more
                  </a>
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



export default Timeline;
