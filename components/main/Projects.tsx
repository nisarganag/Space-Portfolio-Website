import React from "react";

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

        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
          <div className="relative p-4">
            <h1 className="text-2xl font-semibold text-white">
              Publication Management System
            </h1>
            <p className="mt-2 text-gray-300">
              • Engineered and deployed back-end systems for a web application
              in Spring Boot, integrating microservices architecture and RESTful
              APIs; enhanced system scalability, supporting an increase in
              user traffic and transactions per second.
              <br></br>• Engineered a Docker-based solution to containerize
              modules, optimizing for faster updates and more efficient
              dependency management; decreased server downtime and
              improved scalability for increased user load.
              <br></br>• Implemented JWT for secure authentication and
              authorization, ensuring data integrity and user privacy.
              <br></br>• Developed comprehensive unit test cases using JUnit for
              robust code coverage and reliability validation.
              <br></br>• Automated web test cases using Selenium to validate the
              functionality and performance of web applications, ensuring a
              seamless user experience.
              <br></br>
              <br></br>
            </p>
            <p className="mt-2 text-gray-300">
              <ul className="h-full w-full flex md:flex-row gap-10">
                <li>Spring Boot</li>
                <li>JWT</li>
                <li>MongoDB</li>
                <li>MySql</li>
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Selenium</li>
                <li>JUnit</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
          <div className="relative p-4">
            <h1 className="text-2xl font-semibold text-white">
              Library Management System
            </h1>
            <p className="mt-2 text-gray-300">
              • Utilized Java Swing to develop a user-friendly UI and
              implemented a Java Server Client Architecture for seamless
              communication with the server.
              <br></br>• Employed JDBC and MySQL Connector to establish
              connections and interact with the MySQL database, facilitating
              efficient retrieval of necessary information.
              <br></br>• Designed and implemented algorithms along with
              encryption techniques to enable multi-search functionality and
              data filtering based on various fields, enhancing data management
              capabilities.
              <br></br>• Published project code and documentation to GitHub,
              enabling collaboration and version control among team members.
            </p>
            <br></br>
            <br></br>
            <p className="mt-2 text-gray-300">
              <ul className="h-full w-full flex md:flex-row gap-10">
                <li>Java/Java Swing</li>
                <li>MySql</li>
                <li>JDBC</li>
                <li>Git/Github</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
