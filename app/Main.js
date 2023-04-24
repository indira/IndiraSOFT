import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Calling the stylesheet
import "./styles/main.css"
//My Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeGuest from "./components/Homeguest"
import About from "./components/About"
import Terms from "./components/Terms"
import RegisterHome from "./components/RegisterHome"

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeGuest />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/registerhome" element={<RegisterHome />} />
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
