import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ThemeChanger = () => {
    let nav = useNavigate()
    let [value, setValue] = useState("")
    let [newVal, setNewVal] = useState(JSON.parse(localStorage.getItem("saved")) || [])

    let [changeTheme, setChangeTheme] = useState(localStorage.getItem("currentTheme"))

    let [inputTheme, setInputTheme] = useState(localStorage.getItem("currentInputTheme"))

    const [homeTheme, setHomeTheme] = useState("")

    function handleThemeChange(e) {
        setValue(e.target.value)
    }

    function submitTheme() {

        setNewVal((prev) => [...prev, value])

        if (value == "dark") {
            setChangeTheme("dark")
            setInputTheme("dark")
        }

        else if (value == "light") {
            setChangeTheme("light")
            setInputTheme("light")
        }

        else if (value == "" || value !== "dark" || value !== "light") {
            window.alert("Not a valid theme!")
            setValue("")
            return
        }
        localStorage.setItem("currentTheme", value)
        localStorage.setItem("currentInputTheme", value)


    }

    localStorage.setItem("saved", JSON.stringify(newVal))

    function nav2Home() {
        setHomeTheme("active")
        nav("/")

    }
    localStorage.setItem("navTheme2", homeTheme)

    return (
        <div className="home-layout">
            <aside
                className="sidebar"
                style={changeTheme == "light" ? { '--sidebar-dynamic-bg': 'rgba(255, 255, 255, 0.9)' } : { '--sidebar-dynamic-bg': 'rgba(0, 0, 0, 0.9)' }}
            >
                <div className="logo-container">
                    <div className="star-logo"></div>
                    <span className="app-name">PORTFOLIO</span>
                </div>
                <nav className="side-nav">
                    <div className="nav-item" onClick={nav2Home}>Home</div>
                    <div className="nav-item active">Themes</div>
                </nav>
            </aside>
            <main className="main-content" style={changeTheme == "light" ? { background: "rgba(255, 255, 255, 0.9)" } : { background: "rgba(0, 0, 0, 0.4)" }}>
                <div
                    className="glass-card"
                    style={changeTheme == "light" ? { '--card-dynamic-bg': 'rgba(255, 255, 255, 0.75)' } : { '--card-dynamic-bg': 'rgba(0, 0, 0, 0.75)' }}
                >
                    <header className="card-header">
                        <h1 className="gold-text">PREMIUM EXPERIENCE</h1>
                        <p>ELEVATE YOUR WORKSPACE</p>
                    </header>
                    <div className="interaction-area">
                        <input
                            placeholder="Enter the theme you'd like (light/dark)"
                            value={value}
                            onChange={handleThemeChange}
                            style={inputTheme == "light" ? { background: "rgba(255, 255, 255, 0.9)", color: "black" } : { background: "rgba(0, 0, 0, 0.4)", color: "white" }}
                            className='Theme-input'
                        />
                        <button className='premium-button gold-btn' onClick={submitTheme}>
                            Change Theme
                        </button>
                    </div>
                    <footer className="card-footer">
                        <div className='current-theme-display gold-border'>
                            <span className="label">Current theme:</span>
                            <span className="value gold-text">{localStorage.getItem("currentTheme")}</span>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    )
}

export default ThemeChanger