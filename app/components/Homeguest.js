import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "./Page"

function HomeGuest() {
  return (
    <Page title="Welcome!" home={true} wide={true}>
      <div className="generic-content-container">
        <div className="border-bottom row align-items-center bg-white">
          <div className="col-lg-7 bg-white  py-3 py-md-5 section-title section-title--black">
            <h1>Hello, I'm Indira Pandey.</h1>
            <h3 className="headline headline--centered  headline--small headline--narrow headline--light ">I'm a full-stack web developer based in beautiful city of Vancouver Canada.</h3>
            <div className="col-md-auto btn--martop">
              <button type="button" className="btn btn-lg btn-outline-dark mx-1 btn--marbot">
                <Link to="/registerhome">Register Here</Link>
              </button>
              <button type="button" className="btn btn-lg btn-outline-dark mx-1 btn--marbot">
                <Link to="/about-us">About Me</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-5 bg-dark py-3 py-md-50  ">
            <div className="page-section--profile rounded-circle"></div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default HomeGuest
