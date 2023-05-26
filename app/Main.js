import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Calling the stylesheet
import "./styles/main.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import HomeGuest from "./components/HomeGuest"
import About from "./components/About"
import Terms from "./components/Terms"
import RegisterHome from "./components/RegisterHome"

function Main() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("IndiraSOFTToken")))
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/registerhome" element={loggedIn ? <Home /> : <RegisterHome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
