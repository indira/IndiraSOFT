import React, { useState, useContext } from "react"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"
import StateContext from "../StateContext.js"

function Header(props) {
  const appState = useContext(StateContext)
  return (
    <header className="bg-dark">
      <div className="container d-flex flex-column flex-md-row align-items-center p-4">
        <h4 className="my-10 mr-md-auto ">
          <a href="/" className="header__logo ">
            IndiraSOFT
          </a>
        </h4>
        {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      </div>
    </header>
  )
}

export default Header
