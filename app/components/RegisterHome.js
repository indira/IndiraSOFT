import React, { useState, useEffect } from "react"
import Page from "./Page"
import Axios from "axios"

function RegisterHome() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await Axios.post("http://localhost:8080/register", { username, email, password })
      console.log("User was successfully created.")
    } catch (e) {
      console.log("There was an error")
    }
  }
  return (
    <Page title="RegisterHome" wide={true}>
      <div className="generic-content-container">
        <div className="row ">
          <div className="col-lg-7  section-title section-title--black">
            <h1>Remember Writing?</h1>
            <p className="lead text-muted">Are you sick of short tweets and impersonal &ldquo;shared&rdquo; posts that are reminiscent of the late 90&rsquo;s email forwards? We believe getting back to actually writing is the key to enjoying the internet again.</p>
          </div>
          <div className="col-lg-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username-register" className="text-muted mb-1">
                  <small>Username</small>
                </label>
                <input onChange={e => setUsername(e.target.value)} id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
              </div>
              <div className="form-group">
                <label htmlFor="email-register" className="text-muted mb-1">
                  <small>Email</small>
                </label>
                <input onChange={e => setEmail(e.target.value)} id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
              </div>
              <div className="form-group">
                <label htmlFor="password-register" className="text-muted mb-1">
                  <small>Password</small>
                </label>
                <input onChange={e => setPassword(e.target.value)} id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
              </div>
              <button type="submit" className="py-3 mt-4 btn btn-lg btn-outline-dark btn-block">
                Sign up for IndiraSOFT
              </button>
            </form>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default RegisterHome
