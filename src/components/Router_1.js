import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Auth from "../routes/Auth"
import Home from "../routes/Home"
import Profile from "../routes/Profile"
import { financemarkObj } from "../testdata"
import Nav from "./Nav"

// Routing
// /
// /home/:id
// /bookmark
// /bookmark/:id
// /videomark
// /videomark/:id
// /financemark
// /financemark/:id
// /auth
// /profile

const AppRouter = ({ refreshUser, isLoggedIn, userObj, viewSize, swipe }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Router>
        {/* {isLoggedIn && (
          <Nav userObj={userObj} viewSize={viewSize} swipe={swipe} />
        )} */}
        <Nav userObj={userObj} viewSize={viewSize} swipe={swipe} />
        <Routes>
          {isLoggedIn ? (
            <>
              <Route
                exact
                path="/"
                element={
                  <Home userObj={userObj} viewSize={viewSize} swipe={swipe} />
                }
              />
              <Route
                exact
                path="/profile"
                element={
                  <Profile
                    userObj={userObj}
                    refreshUser={refreshUser}
                    viewSize={viewSize}
                    swipe={swipe}
                  />
                }
              />
            </>
          ) : (
            <Route exact path="/" element={<Auth />} />
          )}
        </Routes>
      </Router>
    </div>
  )
}

export default AppRouter
