import React from "react"
import { Link } from "react-router-dom"

import styled, { css } from "styled-components"

import { Flex } from "../styled-components-jace"

// import { SquareRounded as Square } from "@styled-icons/boxicons-solid"
import { Square, Grid } from "@styled-icons/evaicons-solid"
import { UserRectangle } from "@styled-icons/boxicons-solid"

import { userObj, dataObj } from "../testdata"

const Navigation = styled.div`
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
  align-contents: center;
`

const Nav = ({ userObj, viewSize, swipe }) => {
  return (
    <>
      <Navigation width={viewSize.width}>
        <Flex>
          <Link to="/">
            <Square size="24" color="#777" />
            &nbsp;
            {dataObj ? dataObj.title : "Title"}
          </Link>
        </Flex>
        <Flex right>
          <Link to="/profile">
            <UserRectangle size="20" color="#777" />
            {userObj ? userObj.displayName : "Anonymous"}
          </Link>
          &nbsp;&nbsp;
          <Grid size="20" color="#777" />
          LiSTo
        </Flex>
      </Navigation>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">{userObj ? userObj.displayName : "Anonymous"}'s Profile</Link></li>
      </ul>
      <style jsx>{`

      `}</style> */}
    </>
  )
}

export default Nav
