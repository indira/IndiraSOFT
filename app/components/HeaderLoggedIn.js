import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function HeaderLoggedIn(props) {
  function handleLogout() {
    props.setLoggedIn(false)
    localStorage.removeItem("IndiraSOFTToken")
    localStorage.removeItem("IndiraSOFTUsername")
    localStorage.removeItem("IndiraSOFTAvatar")
  }
  return (
    <div className="flex-row my-3 my-md-0">
      <Link href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </Link>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <a href="#" className="mr-2">
        <img className="header-avatar-small" src={localStorage.getItem("IndiraSOFTAvatar")} />
      </a>
      <Link className="btn btn-sm btn-success mr-2" to="/create-post">
        Create Post
      </Link>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  )
}

export default HeaderLoggedIn
