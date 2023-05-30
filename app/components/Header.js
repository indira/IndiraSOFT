import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"
import StateContext from "../StateContext"

function Header(props) {
  const appState = useContext(StateContext)

  return (
    <header className="bg-dark">
      <div className="container d-flex flex-column flex-md-row align-items-center p-4">
        <h4 className="my-10 mr-md-auto ">
          <Link to="/" className="header__logo ">
            IndiraSOFT
          </Link>
        </h4>
        {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      </div>
    </header>
  )
}

export default Header
