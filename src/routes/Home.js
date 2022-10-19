import { useState, useEffect } from "react"
import {
  Flex,
  FlexColumn,
  Input,
  Submit,
  DivRound,
  ListMarks,
  Mark,
  Icon,
} from "../styled-components-jace"
import styled from "styled-components"
import {
  Search,
  Grid,
  Film,
  List,
  Bookmark,
} from "@styled-icons/evaicons-solid"
import { Stock } from "@styled-icons/remix-fill"

import dataObj from "../testdata"
console.log(dataObj)

const Home = () => {
  const [word, setWord] = useState("")
  const onChange = (event) => {
    const {
      target: { value },
    } = event
    setWord(value)
  }
  const onSubmit = () => {
    window.open(`https://search.naver.com/search.naver?query=${word}`)
    // window.open(`https://www.google.com/search?q=${word}`)
  }

  // Window Size
  const [windowSize, setWindowSize] = useState({ x: 960, y: 960 })
  const onChangeSize = () => {
    const contentWidth =
      document.documentElement.clientWidth < 960
        ? document.documentElement.clientWidth
        : 960
    setWindowSize({
      x: contentWidth,
      y: window.innerHeight,
      listX: contentWidth > 480 ? 480 : contentWidth,
      listY: window.innerHeight,
    })
  }

  // Swipe
  let initX, initY
  const [swipe, setSwipe] = useState(null)
  const onPointerMove = (event) => {
    const diffX = initX - event.clientX
    const diffY = initY - event.clientY
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 100) {
        console.log("left")
        setSwipe("left")
      } else if (diffX < -100) {
        console.log("right")
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
    <>
      <DivRound
        bgColor={"#f5f5f5"}
        boxShadow={"1px 1px 6px -1px #bbb"}
        width={windowSize.listX}
      >
        <form onSubmit={onSubmit}>
          <Search size="30" color="#aaa" />
          <Input
            type="text"
            placeholder="What do you want to search?"
            value={word}
            onChange={onChange}
            width={windowSize.listX - 170}
            // width={document.documentElement.clientWidth - 70}
          />
          <Submit type="submit" value="NAVER" width={90} bgColor={"#04CE5C"} />
        </form>
      </DivRound>
      <DivRound
        bgColor={"#eee"}
        boxShadow={"1px 1px 6px -1px #bbb"}
        width={windowSize.listX}
      >
        <Flex spaceAround>
          <div>
            <div>
              <Grid size="20" color="#777" />
            </div>
            <div>
              <Bookmark size="6" color="#aaa" />
              <Bookmark size="6" color="#ccc" />
              <Bookmark size="6" color="#ccc" />
              <Bookmark size="6" color="#ccc" />
            </div>
          </div>
          <div>
            <div>
              <Film size="20" color="#aaa" />
            </div>
            <div>
              <Bookmark size="6" color="#ccc" />
              <Bookmark size="6" color="#ccc" />
              <Bookmark size="6" color="#ccc" />
              <Bookmark size="6" color="#ccc" />
            </div>
          </div>
          <div>
            <div>
              <Stock size="20" color="#aaa" />
            </div>
            <div>
              <Bookmark size="6" color="#ccc" />
              <Bookmark size="6" color="#ccc" />
              <Bookmark size="6" color="#ccc" />
              <Bookmark size="6" color="#ccc" />
            </div>
          </div>
          <div>
            <div>
              <List size="20" color="#aaa" />
            </div>
            <div>
              <Bookmark size="6" color="#ccc" />
              <Bookmark size="6" color="#ccc" />
              <Bookmark size="6" color="#ccc" />
              <Bookmark size="6" color="#ccc" />
            </div>
          </div>
        </Flex>
        <DivRound bgColor={"#fff"}>
          <FlexColumn center>
            <ListMarks width={windowSize.listX}>
              <Mark>
                <Icon>1</Icon>
                <div>icon 1</div>
              </Mark>
              <Mark>
                <Icon>2</Icon>
                <div>icon 2 2354 21345</div>
              </Mark>
              <Mark>
                <Icon>3</Icon>
                <div>icon 3</div>
              </Mark>
              <Mark>
                <Icon>4</Icon>
                <div>icon 4</div>
              </Mark>
              <Mark>
                <Icon>5</Icon>
                <div>icon 5</div>
              </Mark>
              <Mark>
                <Icon>6</Icon>
                <div>icon 6</div>
              </Mark>
              <Mark>
                <Icon>7</Icon>
                <div>icon 7</div>
              </Mark>
              <Mark>
                <Icon>8</Icon>
                <div>icon 8</div>
              </Mark>
              <Mark>
                <Icon>9</Icon>
                <div>icon 9</div>
              </Mark>
            </ListMarks>
            <ListMarks width={windowSize.listX}>
              <Mark>
                <Icon>1</Icon>
                <div>icon 1</div>
              </Mark>
              <Mark>
                <Icon>2</Icon>
                <div>icon 2 2354 21345</div>
              </Mark>
              <Mark>
                <Icon>3</Icon>
                <div>icon 3</div>
              </Mark>
              <Mark>
                <Icon>4</Icon>
                <div>icon 4</div>
              </Mark>
              <Mark>
                <Icon>5</Icon>
                <div>icon 5</div>
              </Mark>
              <Mark>
                <Icon>6</Icon>
                <div>icon 6</div>
              </Mark>
              <Mark>
                <Icon>7</Icon>
                <div>icon 7</div>
              </Mark>
              <Mark>
                <Icon>8</Icon>
                <div>icon 8</div>
              </Mark>
              <Mark>
                <Icon>9</Icon>
                <div>icon 9</div>
              </Mark>
            </ListMarks>
          </FlexColumn>
        </DivRound>
      </DivRound>
    </>
  )
}
export default Home
