import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { authService, dbService } from "../fbase"

import styled, { css } from "styled-components"

import { Flex } from "../styled-components-jace"

// import { SquareRounded as Square } from "@styled-icons/boxicons-solid"
import { Square, Grid } from "@styled-icons/evaicons-solid"
import { UserRectangle } from "@styled-icons/boxicons-solid"
import { Login, Logout } from "@styled-icons/heroicons-outline"

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
  display: grid;
  grid-template-columns: 1fr 150px 1fr;
  // align-contents: center;
`

const Nav = ({ userObj, viewSize, swipe }) => {
  const navigate = useNavigate()

  return (
    <>
      <Navigation width={viewSize.width}>
        <Link to="/">
          <Flex>
            <Square size="24" color="#777" />
            &nbsp;
            {dataObj ? dataObj.title : "Title"}
          </Flex>
        </Link>
        <Link to="/">
          <Flex center>
            <Grid size="20" color="#777" />
            LiSTo
          </Flex>
        </Link>
        <Flex right>
          {userObj ? (
            <>
              <Link to="/profile">
                <Flex>
                  <UserRectangle size="20" color="#777" />
                  &nbsp;
                  {userObj.displayName}&nbsp;
                </Flex>
              </Link>
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
              "Anonymous "<Login size="20" />
            </>
          )}
          &nbsp;&nbsp;
        </Flex>
      </Navigation>
    </>
  )
}

export default Nav
