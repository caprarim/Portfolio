import Portfolio from "./home.jsx";
import React from "react";
import SideBar from "./sidebar.jsx";
import Projects from "./projects.jsx";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
