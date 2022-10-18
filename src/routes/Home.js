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
import { Search } from "@styled-icons/evaicons-solid"

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
  useEffect(() => {
    onChangeSize()
    window.addEventListener("resize", onChangeSize)
    window.addEventListener("orientationchange", onChangeSize)
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
            width={windowSize.listX - 150}
            // width={document.documentElement.clientWidth - 70}
          />
          <Submit type="submit" value="NAVER" width={70} bgColor={"#04CE5C"} />
        </form>
      </DivRound>
      <DivRound bgColor={"#eee"} width={windowSize.listX}>
        <Flex spaceAround>
          <div>BookMark</div>
          <div>VideoMark</div>
          <div>FinanceMark</div>
          <div>ReadingMark</div>
        </Flex>
        <DivRound bgColor={"#ddd"}>
          <Flex spaceAround>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
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
      </DivRound>
    </>
  )
}
export default Home
