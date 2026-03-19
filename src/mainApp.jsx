
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import ThemeChanger from './themes.jsx'
import Home from './myHome.jsx'

function MainApp() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Themes" element={<ThemeChanger />}></Route>
      </Routes>
    </>
  )
}





export default MainApp
