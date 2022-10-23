import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Auth from "../routes/Auth"
import Bookmarks from "../routes/Bookmarks"
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
    <div>
      <Router>
        <Routes>
          <>
            <Route
              exact
              path="/"
              element={<>
                <Nav userObj={userObj} viewSize={viewSize} swipe={swipe} />
                <Bookmarks userObj={userObj} viewSize={viewSize} swipe={swipe} /></>
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
            <Route
              exact
              path="/auth"
              element={
                <Auth
                  // userObj={userObj}
                  refreshUser={refreshUser}
                  viewSize={viewSize}
                  swipe={swipe}
                />
              }
            />
          </>
        </Routes>
      </Router>
    </div>
  )
}

export default AppRouter
