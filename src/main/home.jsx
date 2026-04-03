import React from "react";
import SideBar from "./sidebar.jsx";
const Portfolio = () => {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <main className="portfolio-page">
      <SideBar></SideBar>
      <section className="hero-panel" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <div className="eyebrow">Portfolio | About me</div>
            <h1 className="hero-title">
              Hello, my name is <span className="name-highlight">caprarim</span>{" "}
              and I build{" "}
              <span className="role-highlight">
                clean front-end experiences
              </span>
              .
            </h1>
            <p className="hero-copy">
              I build responsive layouts with clear structure, thoughtful
              detail, and a style that feels refined from the first look.
            </p>
          </div>
          <div className="hero-image-shell">
            <img
              src={`${assetBase}jiji.jpg`}
              className="hero-image"
              alt="Portfolio visual"
            />
          </div>
        </div>
      </section>

      <section className="about-copy" id="about">
        <div className="about-label">More about me</div>
        <p>
          I am still early in the journey, and I care deeply about polish,
          spacing, readability, and the small design decisions that make a page
          feel clean, intentional, and <b>well built.</b>
        </p>
      </section>

      <section className="portfolio-grid">
        <div className="info-card skills-card" id="skills">
          <div className="section-title">Skills</div>
          <div className="skills-list">
            <span className="skill-pill">HTML</span>
            <span className="skill-pill">JavaScript</span>
            <span className="skill-pill">CSS</span>
            <span className="skill-pill">React</span>
            <span className="skill-pill">AI Prompting</span>
          </div>
        </div>

        <div className="info-card social-card" id="socials">
          <div className="section-header">
            <div className="section-title">My socials</div>
            <div className="section-title2">
              Where I document my journey, projects, and progress.
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://www.youtube.com/@caprarim"
              className="social-link youtube-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${assetBase}yt.png`}
                className="social-icon yt"
                alt="YouTube"
              />
              <span>YouTube</span>
            </a>
            <a
              href="https://www.instagram.com/caprarim.codes/"
              className="social-link instagram-link"
              target="_blank"
            >
              <img
                src={`${assetBase}ig.png`}
                className="social-icon ig"
                alt="Instagram"
              />
              <span>Instagram</span>
            </a>
            <a
              href="https://github.com/caprarim"
              className="social-link github-link"
              target="_blank"
            >
              <img
                src={`${assetBase}git.png`}
                className="social-icon git"
                alt="GitHub"
              />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
