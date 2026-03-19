import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let [changeNavTheme, setChangeNavTheme] = useState("")

    let nav = useNavigate()

    function nav2Theme() {
        nav("/Themes")
        setChangeNavTheme("active")


    }
    localStorage.setItem("navTheme", changeNavTheme)
    return (
        <>

            <div className='home-layout'>
                <aside className='sidebar' style={localStorage.getItem("currentTheme") == "light" ? { background: "rgba(255, 255, 255, 0.9)" } : { background: "rgba(0, 0, 0, 0.4)" }}>
                    <div className="logo-container">
                        <div className="star-logo"></div>
                        <span className="app-name">PORTFOLIO</span>
                    </div>
                    <nav className="side-nav">
                        <div className="nav-item active" onClick={() => { nav("/") }}>Home</div>
                        <div className="nav-item" onClick={nav2Theme}>Themes</div>
                    </nav>
                </aside>
                <h1 className='personal-project'>Personal Project</h1>
                <main className="main-content" style={localStorage.getItem("currentTheme") == "light" ? { background: "rgba(255, 255, 255, 0.9)" } : { background: "rgba(0, 0, 0, 0.4)" }}>
                    <div className="portfolio-container">
                        <section className="hero-section">
                            <div className='name-etc'>Hi, my name is <span className='span-name'>Talha</span> and I'm a <span className="highlight-text">Front-End Developer</span>.</div>
                            <div className='experience'>I have 3 months of experience building modern, responsive web experiences.</div>
                            <div className='documented'>I document my journey on social media, primarily on YouTube, where I share my progress and learnings.</div>
                        </section>

                        <section className="portfolio-grid">
                            <div className="portfolio-card skills-card">
                                <h3>Skills</h3>
                                <div className="skills-tags">
                                    <span className="tag">React</span>
                                    <span className="tag">JavaScript</span>
                                    <span className="tag">CSS3</span>
                                    <span className="tag">HTML5</span>
                                    <span className="tag">Vite</span>
                                    <span className="tag">Responsive Design</span>
                                    <span className="tag">Prompting AI</span>
                                </div>
                            </div>

                            <div className="portfolio-card projects-card">
                                <h3>More About Me</h3>
                                <div className="project-item">
                                    <span className="project-name">I am still improving</span>
                                    <span className="project-desc">My experience may be less, but i continue to get better everyday, regardless of how im feeling.</span>
                                </div>
                            </div>
                        </section>

                        <footer className="socials-section">
                            <h3>My Socials</h3>
                            <div className="social-links">
                                <a href="https://youtube.com/@caprarim" target="_blank" rel="noopener noreferrer" className="social-link yt">YouTube</a>
                                <a href="https://github.com/caprarim" target="_blank" rel="noopener noreferrer" className="social-link gh">GitHub</a>
                                <a href="https://instagram.com/caprarim.codes" target="_blank" rel="noopener noreferrer" className="social-link li">Instagram</a>
                            </div>
                        </footer>
                    </div>
                </main>
            </div>





        </>
    )
}

export default Home