import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="text-center large p-5 site-footer">
      <div className="generic-content-container">
        <Link to="/" className="mx-1">
          Home
        </Link>{" "}
        |{" "}
        <Link className="mx-1" to="/about-us">
          About Us
        </Link>{" "}
        |{" "}
        <Link className="mx-1" to="/terms">
          Terms
        </Link>
        <p>
          Copyright &copy; {new Date().getFullYear()}
          <Link to="/" className="text-muted">
            <strong> IndiraSOFT </strong>
          </Link>
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
