import { useState, useEffect } from "react"

import {
  Flex,
  FlexColumn,
  Input,
  Submit,
  DivRound,
  ListPages,
  PageMarks,
  GroupMarks,
  Mark,
  Icon,
} from "../styled-components-jace"
// import styled from "styled-components"

import {
  Search,
  Grid,
  Film,
  List,
  Bookmark,
} from "@styled-icons/evaicons-solid"
import { Stock } from "@styled-icons/remix-fill"

import {
  userObj,
  dataObj,
  bookmarkObj,
  videomarkObj,
  financemarkObj,
  notemarkObj,
} from "../testdata"
// console.log(userObj, dataObj)

const Home = ({ viewSize, swipe }) => {
  const [word, setWord] = useState("")
  const onChange = (event) => {
    const {
      target: { value },
    } = event
    setWord(value)
  }
  const onSubmit = () => {
    if (dataObj.search === "naver") {
      window.open(`https://search.naver.com/search.naver?query=${word}`)
    } else if (dataObj.search === "google") {
      window.open(`https://www.google.com/search?q=${word}`)
    }
  }

  return (
    <>
      <DivRound
        bgColor={"#f5f5f5"}
        boxShadow={"1px 1px 6px -1px #bbb"}
        width={viewSize.width}
      >
        <form onSubmit={onSubmit}>
          <Search size="30" color="#aaa" />
          <Input
            type="text"
            placeholder="What do you want to search?"
            value={word}
            onChange={onChange}
            width={viewSize.width - 130}
            // width={document.documentElement.clientWidth - 70}
          />
          {dataObj.search === "naver" ? (
            // <Submit type="submit" value="N" width={50} bgColor={"#04CE5C"} />
            <Submit type="submit" value="N" width={50} bgColor={"#aaa"} />
          ) : null}
          {dataObj.search === "google" ? (
            <Submit type="submit" value="G" width={50} bgColor={"#aaa"} />
          ) : null}
        </form>
      </DivRound>

      <DivRound
        bgColor={"#eee"}
        boxShadow={"1px 1px 6px -1px #bbb"}
        width={viewSize.width}
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

        <ListPages
          bgColor={"#e0e0e0"}
          page={viewSize.page}
          width={viewSize.contentWidth}
        >
          {dataObj.bookmarks.map((id, pageIdx) => (
            <PageMarks key={pageIdx} bgColor={"#fafafa"}>
              {bookmarkObj[id].page.map((group, groupIdx) => (
                <GroupMarks key={groupIdx} width={viewSize.pageWidth} item={viewSize.pageItem}>
                  {group.map((mark, markIdx) => (
                    <Mark key={markIdx}>
                      <a href={mark.url} target="_blank" rel="noreferrer">
                        {mark.thumbnail? (
                          <Icon src={mark.thumbnail} width="78" />
                        ) : (
                          <Icon bgColor={mark.bgColor} color={mark.color}>
                            {mark.title}
                          </Icon>
                        )}
                      </a>
                      <div>
                        {mark.title}
                      </div>
                    </Mark>
                  ))}
                </GroupMarks>
              ))}
            </PageMarks>
          ))}
        </ListPages>
      </DivRound>
    </>
  )
}
export default Home
