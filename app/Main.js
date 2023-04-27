import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Axios from "axios"
Axios.defaults.baseURL = "http://localhost:8080"

//Calling the stylesheet
import "./styles/main.css"
//My Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeGuest from "./components/Homeguest"
import Home from "./components/Home"
import About from "./components/About"
import Terms from "./components/Terms"
import RegisterHome from "./components/RegisterHome"
import CreatePost from "./components/CreatePost"
import ViewSinglePost from "./components/ViewSinglePost"
import FlashMessages from "./components/FlashMessages"

function Main() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("IndiraSOFTToken")))
  const [flashMessages, setFlashMessages] = useState([])

  function addFlashMessage(msg) {
    setFlashMessages(prev => prev.concat(msg))
  }

  return (
    <BrowserRouter>
      <FlashMessages messages={flashMessages} />
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
        <Route path="/post/:id" element={<ViewSinglePost />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/create-post" element={<CreatePost addFlashMessage={addFlashMessage} />} />
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
