import React from "react"
import { Link } from "react-router-dom"

import styled from "styled-components"

const Navigation = styled.div`
  display: flex;
  justify-content: space-around;
  align-contents: center;
`

const Nav = ({ userObj }) => {
  return (
    <>
      <Navigation>
        <Link to="/profile">
          {userObj ? userObj.displayName : "Anonymous"}
        </Link>
        <Link to="/">LiSTo</Link>
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
