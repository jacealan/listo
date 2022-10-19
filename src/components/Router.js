import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Auth from "../routes/Auth"
import Home from "../routes/Home"
import Profile from "../routes/Profile"
import Nav from "./Nav"

const AppRouter = ({ refreshUser, isLoggedIn, userObj, viewSize, swipe }) => {
  return (
    <Router>
      {isLoggedIn && <Nav userObj={userObj} viewSize={viewSize} swipe={swipe} />}
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
  )
}

export default AppRouter
