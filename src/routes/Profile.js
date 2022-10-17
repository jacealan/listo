import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { authService, dbService } from "../fbase"
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore"

const Profile = ({ refreshUser, userObj }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName)

  const navigate = useNavigate()
  const onLogOutClick = async () => {
    await authService.signOut()
    navigate("/")
    window.location.reload()
  }

  const onChange = (event) => {
    const {
      target: {value}
    } = event
    setNewDisplayName(value)
  }
  const onSubmit = async (event) => {
    event.preventDefault()
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      })
      refreshUser()
    }
  }


  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} />
        <input type="submit" value="Update Profile" />
      </form>
      {/* <span>Profile</span> */}
      <button onClick={onLogOutClick}>Log Out</button>
      
    </>
  )
}
export default Profile