import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({link, title, description }: Props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;
