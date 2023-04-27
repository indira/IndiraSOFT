import React, { useState } from "react"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"

function Header(props) {
  return (
    <header className="bg-dark">
      <div className="container d-flex flex-column flex-md-row align-items-center p-4">
        <h4 className="my-10 mr-md-auto ">
          <a href="/" className="header__logo ">
            IndiraSOFT
          </a>
        </h4>
        {props.loggedIn ? <HeaderLoggedIn setLoggedIn={props.setLoggedIn} /> : <HeaderLoggedOut setLoggedIn={props.setLoggedIn} />}
      </div>
    </header>
  )
}

export default Header
