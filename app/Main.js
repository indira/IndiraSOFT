import { createRoot } from "react-dom/client"
import React, { useState, useReducer, useEffect } from "react"

import ReactDOM from "react-dom/client"
import { useImmerReducer } from "use-immer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import Axios from "axios"
Axios.defaults.baseURL = "http://localhost:8080"

import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

//Calling the stylesheet
import "./styles/main.css"

//My Components
import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import CreatePost from "./components/CreatePost"
import ViewSinglePost from "./components/ViewSinglePost"
import FlashMessages from "./components/FlashMessages"
import RegisterHome from "./components/RegisterHome"
import Profile from "./components/Profile"
import EditPost from "./components/EditPost"
import NotFound from "./components/NotFound"
import Search from "./components/Search"

function Main() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("IndiraSOFTToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("IndiraSOFTToken"),
      username: localStorage.getItem("IndiraSOFTUsername"),
      avatar: localStorage.getItem("IndiraSOFTAvatar")
    },
    isSearchOpen: false
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        return
      case "logout":
        draft.loggedIn = false
        return
      case "flashMessage":
        draft.flashMessages.push(action.value)
        return
      case "openSearch":
        draft.isSearchOpen = true
        return
      case "closeSearch":
        draft.isSearchOpen = false
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("IndiraSOFTToken", state.user.token)
      localStorage.setItem("IndiraSOFTUsername", state.user.username)
      localStorage.setItem("IndiraSOFTAvatar", state.user.avatar)
    } else {
      localStorage.removeItem("IndiraSOFTToken")
      localStorage.removeItem("IndiraSOFTUsername")
      localStorage.removeItem("IndiraSOFTAvatar")
    }
  }, [state.loggedIn])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Header />
          <Routes>
            <Route path="/" element={state.loggedIn ? <Home /> : <HomeGuest />} />
            <Route path="/post/:id" element={<ViewSinglePost />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/post/:id/edit" element={<EditPost />} />
            <Route path="/profile/:username/*" element={<Profile />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/registerhome" element={state.loggedIn ? <Home /> : <RegisterHome />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CSSTransition timeout={330} in={state.isSearchOpen} classNames={"search-overlay"} unmountOnExit>
            <Search />
          </CSSTransition>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
