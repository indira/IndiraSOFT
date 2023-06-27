import React, { useEffect } from "react"
import Page from "./Page"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <Page title="Not Found">
      <div className="generic-content-container mt-3 mb-3">
        <div className="text-center">
          <h2>Woops, we cannot find that page.</h2>
          <p className="lead text-muted">
            You can always visit the <Link to="/"> homepage</Link> to get a fresh start.
          </p>
        </div>
      </div>
    </Page>
  )
}

export default NotFound
