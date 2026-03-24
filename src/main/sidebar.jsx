import React from "react";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  let nav = useNavigate();
  const nav2Projects = () => {
    nav("/projects");
  };
  return (
    <header className="top-bar">
      <nav className="top-nav left-nav" aria-label="Primary">
        <div className="top-nav-link" onClick={() => nav("/")}>
          Home
        </div>
      </nav>

      <div className="top-bar-brand" aria-label="Back to top">
        <img
          src="/jiji.jpg"
          className="top-bar-image"
          alt="Portfolio logo"
          onClick={() => nav("/")}
        />
      </div>

      <nav className="top-nav right-nav" aria-label="Secondary">
        <div className="top-nav-link" onClick={nav2Projects}>
          Projects
        </div>
      </nav>
    </header>
  );
};

export default SideBar;
