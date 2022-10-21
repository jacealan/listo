import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { authService, dbService } from "../fbase"
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore"

import {
  Flex,
  FlexColumn,
  Input,
  Submit,
  DivRound,
  ListPages,
  PageMarks,
  GroupMarks,
  Mark,
  Icon,
} from "../styled-components-jace"

import { Square, Grid } from "@styled-icons/evaicons-solid"
import { LogIn } from "@styled-icons/boxicons-solid"

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
      target: { value },
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
    <div className="profile">
      <Flex center style={{ margin: "30px 0" }}>
        <Grid size="50" color="#444" />
        <span style={{ fontSize: "40px", fontWeight: 700 }}>LiSTo</span>
      </Flex>
      <form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
          width={360}
        />
        <input className="round" type="submit" value="Update Display Name" />
      </form>
      {/* <span>Profile</span> */}
      <button className="round" onClick={onLogOutClick}>
        Log Out
      </button></div>
      <style jsx>{`
        .profile {
          width: 360px;
          // display: grid;
          // grid-template:
          //   "email sign" 50px
          //   "password sign" 50px
          //   / 1fr 100px;
        }
        .round {
          cursor: pointer;
          width: 100%;
          margin: 10px auto 0 auto;
          border: none;
          border-radius: 20px;
          padding: 10px 0;
          box-shadow: 1px 1px 6px -1px #bbb;
          background-color: #444;
          color: white;
          font-size: 18px;
        }
      `}</style>
    </>
  )
}
export default Profile
