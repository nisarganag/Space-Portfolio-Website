import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          link="https://github.com/nisarganag/PMS"
          title="Publication Management System"
          description="Engineered and deployed back-end systems for a web application for Publication Management in Spring Boot, integrating microservices
          architecture and RESTful APIs to enhance system performance."
        />
        <ProjectCard
          link="https://github.com/nisarganag/PMS"
          title="Library Management System"
          description=" Utilized Java Swing to develop a user-friendly UI and implemented a Java Server Client Architecture for seamless
          communication with the server to create a Library Management System."
        />
      </div>
    </div>
  );
};

export default Projects;
