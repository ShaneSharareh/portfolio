"use client";
import React, { useState, useRef } from "react";
import ProjectItem from "./ProjectItem";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TBDeveloped",
    description: "TBDeveloped is an open-source platform developed by a team of four, utilizing React/Redux, MongoDB, HTML5, and CSS3. It enables dreamers and developers to connect and bring their ideas to life.",
    image: "/images/projects/tbd.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/oli223lopez/TBDeveloped",
    previewUrl: "https://tbdeveloped1.herokuapp.com/#/",
  },
  {
    id: 2,
    title: "Piano Hero",
    description: "Piano Hero is a web game loosely inspired by Guitar Hero, created using JavaScript, HTML5, and CSS3. Players use a virtual piano and a music tablature sheet, aiming to correctly play at least 70% of the notes to win. The game is implemented with Tone.js and also features a free play mode, allowing users to play the piano freely without any competition.",
    image: "/images/projects/piano-hero.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShaneSharareh/piano-hero",
    previewUrl: "https://shanesharareh.github.io/piano-hero/",
  },
  {
    id: 3,
    title: "BetterCraft",
    description: "BetterCraft is an Etsy clone project built with React/Redux, Rails, HTML5, and CSS3. It functions as a marketing website where users can showcase their creativity and customizations. It offers a platform for users to discover unique gifts for themselves or others.",
    image: "/images/projects/better-craft.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShaneSharareh/bettercraft",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Quiz Blasters",
    description: "Quiz Blasters draws inspiration from Space Invaders, offering users a unique arcade-style quiz experience. Players start by creating their own quiz set and then engage in a space invader-themed game. They shoot at invaders holding answers to questions, all built using C# and Unity.",
    image: "/images/projects/quiz-blasters.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShaneSharareh/Quiz-Blasters",
    previewUrl: "/",
  },

  {
    id: 5,
    title: "7 Minute Workout App",
    description: "This Kotlin-based app offers a 7-minute workout experience. It guides users through 12 workouts in just 7 minutes, with each workout lasting 30 seconds. Additionally, the app includes a BMI calculator for users to calculate their Body Mass Index.",
    image: "/images/projects/seven-minute-workoutapp.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ShaneSharareh/7minuteWorkoutApp",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "MySpot",
    description: "MySpot is a location-saving app developed with Java and Android Studio. It enables users to save their current location or search for favorite spots using the Places API. Once a location is added, it is stored in the app's local database using SQLite.",
    image: "/images/projects/my-spot.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ShaneSharareh/MySpot",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };


  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectItem
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
            
          </motion.li>
           ))}
    </ul>
    </section>
  );
};

export default ProjectsSection;