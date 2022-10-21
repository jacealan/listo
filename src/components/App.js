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
        console.log(user)
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

  // Window Size
  const [viewSize, setViewSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    page: 2,
    pageWidth: 540,
    pageItem: 6,
  })
  const onChangeSize = () => {
    const contentWidth =
      document.documentElement.clientWidth < 1110
        ? document.documentElement.clientWidth
        : 1110
    // console.log(contentWidth)
    if (contentWidth === 1110) {
      setViewSize({
        width: 1110,
        height: document.documentElement.clientHeight,
        page: 2,
        pageWidth: 540,
        pageItem: 6,
      })
    } else if (contentWidth >= 730) {
      setViewSize({
        width: contentWidth,
        height: document.documentElement.clientHeight,
        page: 2,
        pageWidth: (contentWidth - 30) / 2,
        pageItem: 4,
      })
    } else if (contentWidth >= 540) {
      setViewSize({
        width: contentWidth,
        height: document.documentElement.clientHeight,
        page: 1,
        pageWidth: contentWidth,
        pageItem: 6,
      })
    } else if (contentWidth >= 360) {
      setViewSize({
        width: contentWidth,
        height: document.documentElement.clientHeight,
        page: 1,
        pageWidth: contentWidth,
        pageItem: 4,
      })
    }
    // console.log(`contentWidth: ${contentWidth}`)
    // console.log(`viewSize: ${viewSize}`)
  }

  // Swipe
  let initX, initY
  const [swipe, setSwipe] = useState(null)
  const onPointerMove = (event) => {
    const diffX = initX - event.clientX
    const diffY = initY - event.clientY
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 100) {
        // console.log("left")
        setSwipe("left")
      } else if (diffX < -100) {
        // console.log("right")
        setSwipe("right")
      }
    }
  }
  const onSwipe = (event) => {
    initX = event.clientX
    initY = event.clientY
    window.addEventListener("pointerup", onPointerMove)
  }

  useEffect(() => {
    onChangeSize()
    window.addEventListener("resize", onChangeSize)
    window.addEventListener("orientationchange", onChangeSize)
    window.addEventListener("pointerdown", onSwipe)
  }, [])

  return (
    <div className="App">
      {init ? (
        // <AppRouter
        //   refreshUser={refreshUser}
        //   isLoggedIn={Boolean(userObj)}
        //   userObj={userObj}
        //   viewSize={viewSize}
        //   swipe={swipe}
        // />
        <div>test</div>
      ) : (
        "Initializing..."
      )}

      <Footer viewSize={viewSize} swipe={swipe} />
    </div>
  )
}

export default App
