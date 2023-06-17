import React, { useEffect } from "react"
import Page from "./Page"

function About() {
  return (
    <Page title="About Us">
      <div className="generic-content-container mt-3 mb-3 ml-3 mr-3">
        <h2>About Me</h2>
        <p>Hi, my name is Indira Pandey. I have over 5 years of experience in the software and web development field.</p>
        <p className="lead text-muted">After being a stay at home mom with my baby boy for five years I now want to go back to work which I enjoy a lot. I left my part time job as a web master for Canadian Association in September last year. Since then I have been taking courses in the Web Development field and working as a Freelancer. Please visit my Portfolio page for more details.</p>
      </div>
    </Page>
  )
}

export default About
