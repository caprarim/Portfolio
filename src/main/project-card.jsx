import React from "react";

const ProjectCard = ({ title, desc, languages, link1, imgSrc }) => {
  return (
    <article className="project-card">
      <h2 className="project-card-title">{title}</h2>
      <img
        src={imgSrc}
        alt="Project preview"
        className="my-projects"
        onClick={() => {
          if (link1) {
            window.open(link1, "_blank", "noopener,noreferrer");
          }
        }}
     
      />
      <p className="project-card-copy">{desc}</p>
      <div className="project-stack">{languages}</div>
      <div className="project-actions">
        <a
          href={link1 || "#"}
          className="project-link"
          target="_blank"
          rel="noreferrer"
        >
          Showcase
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
