import React from "react";
import SideBar from "./sidebar.jsx";
import ProjectCard from "./project-card.jsx";

const Projects = () => {
  return (
    <main className="portfolio-page">
      <SideBar></SideBar>

      <section className="projects-section">
        <div className="projects-heading">
          <div className="eyebrow">Selected work</div>
          <h1 className="projects-title">Projects</h1>
          <p className="projects-copy">
            A cleaner showcase of my work, laid out in a way that is easier to
            scan and update.
          </p>
        </div>

        <div className="projects-container">
          <ProjectCard
            title="Personal Hub"
            desc="A focused workspace that brings notes, daily planning, and habit tracking into one clean interface."
            languages="Javascript, HTML, CSS, React"
            link1={" https://caprarim.github.io/personalHub/"}
            imgSrc={"public/projects/1.PNG"}
          />
          <ProjectCard
            title="Habit Tracker"
            desc="A minimal tracker built to make daily progress easier to read, update, and stay consistent with."
            languages="Javascript, HTML, CSS, React"
            link1={" https://caprarim.github.io/personalHub/"}
            imgSrc={"public/projects/2.PNG"}
          />
          <ProjectCard
            title="Gym Website"
            desc="A modern landing page for a gym brand with bold sections, clear hierarchy, and strong visual structure."
            languages="Javascript, HTML, CSS, React"
            link1={"https://muscle-lab-azure.vercel.app/"}
            imgSrc={"public/projects/3.png"}
          />
          <ProjectCard
            title="To Do List"
            desc="A straightforward task manager designed for quick input, clear priorities, and a cleaner daily workflow."
            languages="Javascript, HTML, CSS"
            link1={"https://caprarim.github.io/to-do-list-project/"}
            imgSrc={"public/projects/4.png"}
          />
          <ProjectCard
            title="Online Store"
            desc="An ecommerce-style interface with a cleaner product layout, structured sections, and easy browsing."
            languages="Javascript, HTML, CSS, React"
            link1={"https://caprarim.github.io/perfumes/"}
            imgSrc={"public/projects/5.png"}
          />
          <ProjectCard
            title="Instagram Replica"
            desc="A social-style UI recreation focused on feed layout, spacing, and a more polished visual rhythm."
            languages="Javascript, HTML, CSS, React"
            link1={"https://caprarim.github.io/commentSection/"}
            imgSrc={"public/projects/6.png"}
          />
          <ProjectCard
            title="Password Strength Analyzer"
            desc="A simple utility page that checks password strength with clear feedback and a straightforward layout."
            languages="Javascript, HTML, CSS"
            link1={"https://caprarim.github.io/Password-Strength-Analyzer/"}
            imgSrc={"public/projects/7.png"}
          />
          <ProjectCard
            title="Digital Clock"
            desc="A clean digital clock interface focused on readability, spacing, and a minimal presentation."
            languages="Javascript and HTML"
            link1={"https://caprarim.github.io/digitalclockapp/"}
            imgSrc={"public/projects/8.png"}
          />
        </div>
      </section>
    </main>
  );
};

export default Projects;
