import React, { useEffect, useState } from "react"
import Axios from "axios"

function HeaderLoggedOut(props) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("/login", { username, password })
      if (response.data) {
        localStorage.setItem("IndiraSOFTToken", response.data.token)
        localStorage.setItem("IndiraSOFTUsername", response.data.username)
        localStorage.setItem("IndiraSOFTAvatar", response.data.avatar)
        props.setLoggedIn(true)
      } else {
        console.log("Incorrect username / password.")
      }
    } catch (e) {
      console.log("Incorrect username and password.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-0 pt-3 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input onChange={e => setUsername(e.target.value)} name="username" className="form-control form-control input-dark" type="text" placeholder="Username" autoComplete="off" />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input onChange={e => setPassword(e.target.value)} name="password" className="form-control form-control input-dark" type="password" placeholder="Password" />
        </div>
        <div className="col-md-auto">
          <button className="btn bg-dark btn-outline-light text-white">Sign In</button>
        </div>
      </div>
    </form>
  )
}

export default HeaderLoggedOut
