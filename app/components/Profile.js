import React, { useEffect, useContext, useState } from "react"
import Page from "./Page"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Axios from "axios"
import StateContext from "../StateContext"
import ProfilePosts from "./ProfilePost"

function Profile() {
  const { username } = useParams() //This will get the username from the url
  const appState = useContext(StateContext)
  const [profileData, setProfileData] = useState({
    profileUsername: "...",
    profileAvatar: "https://gravatar.com/avatar/placeholder?s=128",
    isFollowing: false,
    counts: { postCount: "", followerCount: "", followingCount: "" }
  })
  useEffect(() => {
    const ourRequest = Axios.CancelToken.source()
    async function fetchData() {
      try {
        const response = await Axios.post(`/profile/${username}`, { token: appState.user.token }, { cancelToken: ourRequest.token })
        setProfileData(response.data)
      } catch (e) {
        console.log("There was a problem.")
      }
    }
    fetchData()
    return () => {
      ourRequest.cancel()
    }
  }, [])

  return (
    <Page title="Profile Screen">
      <div className="generic-content-container mt-5 mb-5 ml-3 mr-3">
        <h2>
          <img className="header-avatar-small" src={profileData.profileAvatar} />
          {profileData.profileUsername}
          <button className="btn btn-primary btn-sm ml-2">
            Follow <i className="fas fa-user-plus"></i>
          </button>
        </h2>

        <div className="profile-nav nav nav-tabs pt-2 mb-4">
          <Link to="#" className="active nav-item nav-link">
            Posts: {profileData.counts.postCount}
          </Link>
          <Link to="#" className="nav-item nav-link">
            Followers: {profileData.counts.followerCount}
          </Link>
          <Link to="#" className="nav-item nav-link">
            Following: {profileData.counts.followingCount}
          </Link>
        </div>
        <ProfilePosts />
      </div>
    </Page>
  )
}
export default Profile
