import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { authService, dbService } from "../fbase"
import {
  collection,
  query,
  doc,
  setDoc,
  getDoc,
  addDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore"

import { Button } from "../styled-components-jace"
import styled, { css } from "styled-components"

import { Flex } from "../styled-components-jace"

import { Square, Grid } from "@styled-icons/evaicons-solid"
import { UserRectangle } from "@styled-icons/boxicons-solid"
import { Login, Logout } from "@styled-icons/heroicons-outline"
import { DownloadCloud, UploadCloud } from "@styled-icons/remix-fill"

import { usermarkObjTemplate } from "../testdata"

const Navigation = styled.div`
  // position: -webkit-sticky;
  // position: sticky;
  position: fixed;
  top: 0;
  padding: 10px;
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  border-radius: 0 0 10px 10px;
  background-color: #eee;
  color: #777;
  display: flex;
  justify-content: space-between;
`

const Nav = ({ userObj, viewSize, swipe }) => {
  const navigate = useNavigate()

  const [usermarkObj, setUsermarkObj] = useState(
    window.localStorage.getItem("usermark") !== null
      ? JSON.parse(window.localStorage.getItem("usermark"))
      : usermarkObjTemplate
  )
  const downloadCloud = async () => {
    const docRef = doc(dbService, "usermarks", userObj.uid)
    const docSnap = await getDoc(docRef)
    console.log(docSnap.data())
  }
  const uploadCloud = async () => {
    const docRef = doc(dbService, "usermarks", userObj.uid)
    await setDoc(docRef, usermarkObj)
    // const docRef = await addDoc(collection(dbService, "usermarks", userObj.uid), usermarkObj)
    // console.log("Document written with ID: ", docRef.id);
  }

  return (
    <>
      <Navigation width={viewSize.width}>
        <Link to="/">
          <Flex center>
            <Grid size="20" color="#777" />
            LiSTo&nbsp;&nbsp;|&nbsp;&nbsp;
            {usermarkObj ? usermarkObj.title : "Title"}
          </Flex>
        </Link>
        <Flex right>
          {userObj ? (
            <>
              <Flex>
                <Button>
                  <DownloadCloud
                    onClick={downloadCloud}
                    size="20"
                    color="#777"
                  />
                </Button>
                &nbsp;
                <Button>
                  <UploadCloud onClick={uploadCloud} size="20" color="#777" />
                </Button>
                &nbsp;
                <Link to="/profile">
                  <UserRectangle size="20" color="#777" />
                  &nbsp;{userObj.displayName}
                </Link>
                &nbsp;
              </Flex>
              <Link>
                <Flex>
                  <Logout
                    size="20"
                    onClick={async () => {
                      await authService.signOut()
                      navigate("/")
                      window.location.reload()
                    }}
                  />
                </Flex>
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth">
                Sign In&nbsp;
                <Login size="20" />
              </Link>
            </>
          )}
          &nbsp;&nbsp;
        </Flex>
      </Navigation>
    </>
  )
}

export default Nav
