import { authService } from "../fbase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth"

import React, { useState } from "react"

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
// import styled from "styled-components"

import { Square, Grid } from "@styled-icons/evaicons-solid"
import { LogIn } from "@styled-icons/boxicons-solid"

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newAccount, setNewAccount] = useState(true)
  const [error, setError] = useState("")
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event
    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      let data
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        )
      } else {
        data = await signInWithEmailAndPassword(authService, email, password)
      }
      // console.log(data)
    } catch (error) {
      setError(error.message)
    }
  }
  const toggleAccount = () => setNewAccount((prev) => !prev)
  const onSocialClick = async (event) => {
    // console.log(event.target.name)
    const {
      target: { name },
    } = event
    let provider
    if (name === "google") {
      provider = new GoogleAuthProvider()
    } else if (name === "github") {
      provider = new GithubAuthProvider()
    }
    const data = await signInWithPopup(authService, provider)
  }

  return (
    <div>
      <Flex center style={{ margin: "30px 0" }}>
        <Grid size="50" color="#444" />
        <span style={{ fontSize: "40px", fontWeight: 700 }}>LiSTo</span>
      </Flex>
      <DivRound bgColor={"#eee"}>
        <form onSubmit={onSubmit}>
          <div className="auth_email">
            <Input
              style={{ margin: "5px 0 5px 15px" }}
              name="email"
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={onChange}
            />
            <Flex center style={{ gridArea: "sign" }} onClick={onSubmit}>
              <LogIn color="#777" />
              {/* <Submit type="submit" value="SIGN" bgColor="#eee" color="#777" style={{ fontSize: "30px"}} /> */}
            </Flex>
            {/* <input type="submit" value={newAccount ? "Create Account" : "Log In"} /> */}
            <Input
              style={{ margin: "5px 0 5px 15px" }}
              name="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={onChange}
            />
          </div>
        </form>
      </DivRound>
      {/* <div>{error}</div>
      <div onClick={toggleAccount}>
        {newAccount ? "Sing In" : "Create Account"}
      </div> */}
      <div>
        <DivRound
          button
          onClick={onSocialClick}
          name="google"
          bgColor={"#777"}
          color={"#ddd"}
          boxShadow={"1px 1px 6px -1px #bbb"}
        >
          Continue with Google
        </DivRound>
        <DivRound
          button
          onClick={onSocialClick}
          name="github"
          bgColor={"#444"}
          color={"#ddd"}
          boxShadow={"1px 1px 6px -1px #bbb"}
        >
          Continue with Github
        </DivRound>
      </div>
      <style jsx>{`
        .auth_email {
          width: 360px;
          display: grid;
          grid-template:
            "email sign" 50px
            "password sign" 50px
            / 1fr 100px;
        }
      `}</style>
    </div>
  )
}
export default Auth
