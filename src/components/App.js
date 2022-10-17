import { useEffect, useState } from "react"
import { authService } from "../fbase"
import { onAuthStateChanged, updateProfile } from "firebase/auth"

import AppRouter from "./Router"
import Footer from "./Footer"
import "./App.css"

function App() {
  const [init, setInit] = useState(false)
  const [userObj, setUserObj] = useState(null)
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => updateProfile(authService.currentUser, args),
        })
      }
      setInit(true)
    })
  }, [])

  const refreshUser = () => {
    const user = authService.currentUser
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => updateProfile(authService.currentUser, args),
    })
  }

  return (
    <div className="App">
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Initializing..."
      )}
      
      <Footer />
    </div>
  )
}

export default App
