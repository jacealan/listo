import { useState, useEffect } from "react"
import { authService, dbService } from "../fbase"
import {
  collection,
  query,
  doc,
  setDoc,
  getDoc,
  addDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore"
import { v4 as uuid } from "uuid"

import {
  Flex,
  FlexColumn,
  Input,
  Submit,
  DivRound,
  Button,
  ListPages,
  PageMarks,
  GroupMarks,
  Mark,
  Icon,
} from "../styled-components-jace"
// import styled from "styled-components"

import { Search, Grid, Film, List } from "@styled-icons/evaicons-solid"
import {
  Stock,
  DownloadCloud,
  UploadCloud,
  AddBox,
} from "@styled-icons/remix-fill"
import {
  TableEdit,
  CheckboxChecked,
} from "@styled-icons/fluentui-system-filled"

import {
  userObjTemplate,
  dataObjTempalte,
  usermarkObjTemplate,
  bookmarkObjTemplate,
  videomarkObjTemplate,
  financemarkObjTemplate,
  notemarkObjTemplate,
} from "../testdata"
import { uuidv4 } from "@firebase/util"
// console.log(userObj, dataObj)

const Bookmarks = ({ userObj, viewSize, swipe }) => {
  const [changed, setChanged] = useState(
    window.localStorage.getItem("changed") !== null ||
      window.localStorage.getItem("changed") !== false
      ? JSON.parse(window.localStorage.getItem("changed"))
      : false
  )

  const [usermarkObj, setUsermarkObj] = useState(
    window.localStorage.getItem("usermark") !== null
      ? JSON.parse(window.localStorage.getItem("usermark"))
      : usermarkObjTemplate
  )
  const [bookmarkObj, setBookmarkObj] = useState(
    window.localStorage.getItem("bookmark") !== null
      ? JSON.parse(window.localStorage.getItem("bookmark"))
      : bookmarkObjTemplate
  )
  const [videomarkObj, setVideomarkObj] = useState(
    window.localStorage.getItem("videomark") !== null
      ? JSON.parse(window.localStorage.getItem("videomark"))
      : videomarkObjTemplate
  )
  const [financeObj, setFinancemarkObj] = useState(
    window.localStorage.getItem("financemark") !== null
      ? JSON.parse(window.localStorage.getItem("financemark"))
      : financemarkObjTemplate
  )
  const [notemarkObj, setNotemarkObj] = useState(
    window.localStorage.getItem("notemark") !== null
      ? JSON.parse(window.localStorage.getItem("notemark"))
      : notemarkObjTemplate
  )
  console.log(usermarkObj)
  console.log(bookmarkObj)

  const [editPage, setEditPage] = useState(null)
  const [editIndex, setEditIndex] = useState({
    isEdit: false,
    pageIdx: null,
    groupIdx: null,
    markIdx: null,
    url: "",
    title: "",
    thumbnail: "",
    bgColor: "#aaa",
    color: "#444",
  })
  const addMark = () => {
    const tempObj = bookmarkObj
    // console.log(tempObj[editIndex.pageIdx].page)
    tempObj[editIndex.pageIdx][editIndex.groupIdx].push({
      url: editIndex.url,
      title: editIndex.title,
      thumbnail: editIndex.thumbnail,
      bgColor: editIndex.bgColor,
      color: editIndex.color,
    })
    console.log(tempObj)
    setEditIndex({ ...editIndex, isEdit: false })
    // setBookmarkObj()
  }
  const editCancle = () => {
    setEditIndex({ ...editIndex, isEdit: false })
    setEditPage(null)
  }

  const downloadCloud = async () => {
    const docRef = doc(dbService, "bookmarks", editIndex.pagdIdx)
    const docSnap = await getDoc(docRef)
    console.log(docSnap.data())
  }
  const uploadCloud = async (bookmarkId) => {
    console.log(bookmarkId)
    console.log(bookmarkObj[bookmarkId])
    console.log(usermarkObj)
    const docRef = doc(dbService, "bookmarks", bookmarkId)
    await setDoc(docRef, bookmarkObj[bookmarkId])
    // const docRef = await addDoc(collection(dbService, "usermarks", userObj.uid), usermarkObj)
    // console.log("Document written with ID: ", docRef.id);
  }

  const addPage = () => {
    const createdAt = new Date()
    const newUuid = uuid()
    const newBookmarkObj = bookmarkObj
    newBookmarkObj[newUuid] = {
      modifiedId: userObj.uid,
      authorId: userObj.uid,
      createdAt: createdAt,
      modifiedAt: createdAt,
      updatedAt: createdAt,
      pages: ["group0", "group1", "group2", "group3"],
      group0: [
        {
          url: "https://naver.com/",
          title: "네이버",
          thumbnail:
            "https://user-images.githubusercontent.com/69343830/102716411-1c227700-431f-11eb-86e6-dd389b690681.png",
          bgColor: "#aaa",
          color: "#444",
        },  
      ],
      group1: [],
      group2: [],
      group3: [],
    }
    setBookmarkObj(JSON.parse(JSON.stringify(newBookmarkObj)))
    const newUsermarkObj = usermarkObj
    newUsermarkObj.bookmarks.push(newUuid)
    setUsermarkObj(JSON.parse(JSON.stringify(newUsermarkObj)))
  }

  const [word, setWord] = useState("")
  const onChange = (event) => {
    const {
      target: { value },
    } = event
    setWord(value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if (usermarkObj.search === "naver") {
      window.open(`https://search.naver.com/search.naver?query=${word}`)
    } else if (usermarkObj.search === "google") {
      window.open(`https://www.google.com/search?q=${word}`)
    }
  }

  return (
    <div style={{ marginTop: "54px" }}>
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
          {usermarkObj.search === "naver" ? (
            // <Submit type="submit" value="N" width={50} bgColor={"#04CE5C"} />
            <Submit type="submit" value="N" width={50} bgColor={"#aaa"} />
          ) : null}
          {usermarkObj.search === "google" ? (
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
          </div>
          <div>
            <div>
              <Film size="20" color="#aaa" />
            </div>
          </div>
          <div>
            <div>
              <Stock size="20" color="#aaa" />
            </div>
          </div>
          <div>
            <div>
              <List size="20" color="#aaa" />
            </div>
          </div>
        </Flex>

        <ListPages
          bgColor={"#e0e0e0"}
          page={viewSize.page}
          width={viewSize.contentWidth}
        >
          {usermarkObj.bookmarks.map((id, pageIdx) => (
            <>
              {pageIdx !== editPage ? (
                <>
                  <PageMarks key={pageIdx} bgColor={"#fafafa"}>
                    {bookmarkObj[id].pages.map((group, groupIdx) => (
                      <>
                        <GroupMarks
                          key={groupIdx}
                          width={viewSize.pageWidth}
                          item={viewSize.pageItem}
                        >
                          {bookmarkObj[id][group].map((mark, markIdx) => (
                            <Mark key={markIdx}>
                              <a
                                href={mark.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {mark.thumbnail ? (
                                  <Icon src={mark.thumbnail} width="78" />
                                ) : (
                                  <Icon
                                    bgColor={mark.bgColor}
                                    color={mark.color}
                                  >
                                    {mark.title}
                                  </Icon>
                                )}
                              </a>
                              <div>{mark.title}</div>
                            </Mark>
                          ))}
                        </GroupMarks>
                      </>
                    ))}
                    <Flex center>
                      <Button>
                        <UploadCloud
                          onClick={() => uploadCloud(id)}
                          size="20"
                          color="#aaa"
                        />
                      </Button>
                      &nbsp;&nbsp;&nbsp;
                      <Button>
                        <TableEdit
                          onClick={() => setEditPage(pageIdx)}
                          size="20"
                          color="#aaa"
                        />
                      </Button>
                    </Flex>
                  </PageMarks>
                </>
              ) : (
                <>
                  <PageMarks key={pageIdx} bgColor={"#fafafa"}>
                    {bookmarkObj[id].pages.map((group, groupIdx) => (
                      <GroupMarks
                        key={groupIdx}
                        width={viewSize.pageWidth}
                        item={viewSize.pageItem}
                      >
                        {bookmarkObj[id][group].map((mark, markIdx) => (
                          <Mark key={markIdx}>
                            <a href={mark.url} target="_blank" rel="noreferrer">
                              {mark.thumbnail ? (
                                <Icon src={mark.thumbnail} width="78" />
                              ) : (
                                <Icon bgColor={mark.bgColor} color={mark.color}>
                                  {mark.title}
                                </Icon>
                              )}
                            </a>
                            <div>{mark.title}</div>
                          </Mark>
                        ))}
                        {group.length < 12 && (
                          <Mark
                            key="add"
                            onClick={() => {
                              setEditIndex({
                                isEdit: true,
                                pageIdx: id,
                                groupIdx: group,
                                markIdx: bookmarkObj[id][group].length,
                                url: "",
                                title: "",
                                thumbnail: "",
                                bgColor: "#fff",
                                color: "#444",
                              })
                              console.log(editIndex)
                            }}
                          >
                            <AddBox size="64" color="#ddd" />
                          </Mark>
                        )}
                      </GroupMarks>
                    ))}
                    <Button>
                      <CheckboxChecked
                        onClick={() => {
                          window.localStorage.setItem(
                            "bookmark",
                            JSON.stringify(bookmarkObj)
                          )
                          setEditPage(null)
                        }}
                        size="24"
                        color="#aaa"
                      />
                    </Button>
                  </PageMarks>
                </>
              )}
            </>
          ))}
          <Flex
            center
            style={viewSize.page === 2 ? { gridColumn: "1 / 3" } : null}
          >
            <Button><AddBox size="20" onClick={addPage} /></Button>
          </Flex>
        </ListPages>
      </DivRound>

      {/* ---- */}
      {/* EDIT */}
      {/* ---- */}
      <div className="edit">
        <div className="cancel" onClick={editCancle} />
        <div className="cancel" onClick={editCancle} />
        <div className="cancel" onClick={editCancle} />
        <div className="cancel" onClick={editCancle} />
        <div className="edit-content">
          <div className="edit-icon">
            <Flex center width="340">
              <Mark>
                {/* {editIndex !== null ? (
                <>
                  {editIndex.pageIdx},{editIndex.groupIdx},{editIndex.markIdx}
                </>
              ) : null} */}
                {editIndex.thumbnail ? (
                  <Icon src={editIndex.thumbnail} width="78" />
                ) : (
                  <Icon bgColor={editIndex.bgColor} color={editIndex.color}>
                    {editIndex.title}
                  </Icon>
                )}
              </Mark>
            </Flex>
          </div>
          <form className="edit-form">
            <div>URL</div>
            <div>
              <Input
                type="text"
                placeholder="https://listo-jace.vercel.app"
                value={editIndex.url}
                width={230}
                onChange={(event) => {
                  const {
                    target: { value },
                  } = event
                  setEditIndex({ ...editIndex, url: value })
                }}
              />
            </div>
            <div>TITLE</div>
            <div>
              <Input
                type="text"
                placeholder="Input Title"
                value={editIndex.title}
                width={230}
                onChange={(event) => {
                  const {
                    target: { value },
                  } = event
                  setEditIndex({ ...editIndex, title: value })
                }}
              />
            </div>
            <div>IMAGE</div>
            <div>
              <Input
                type="text"
                placeholder="Input Image Url"
                value={editIndex.thumbnail}
                width={230}
                onChange={(event) => {
                  const {
                    target: { value },
                  } = event
                  setEditIndex({ ...editIndex, thumbnail: value })
                }}
              />
            </div>
            <div>BGCLR</div>
            <div>
              <Input
                type="text"
                placeholder="Input Icon Background Color(#RRGGBB)"
                value={editIndex.bgColor}
                width={230}
                onChange={(event) => {
                  const {
                    target: { value },
                  } = event
                  setEditIndex({ ...editIndex, bgColor: value })
                }}
              />
            </div>
            <div>COLOR</div>
            <div>
              <Input
                type="text"
                placeholder="Input Icon Text Color(#RRGGBB)"
                value={editIndex.color}
                width={230}
                onChange={(event) => {
                  const {
                    target: { value },
                  } = event
                  setEditIndex({ ...editIndex, color: value })
                }}
              />
            </div>
            <DivRound
              button
              onClick={addMark}
              type="submit"
              value="Add Mark"
              bgColor="#777"
              color="#ccc"
              width="300"
            >
              ADD
            </DivRound>
          </form>
        </div>
        <div className="cancel" onClick={editCancle} />
        <div className="cancel" onClick={editCancle} />
        <div className="cancel" onClick={editCancle} />
        <div className="cancel" onClick={editCancle} />
      </div>
      <style jsx>{`
        .edit {
          display: ${editIndex.isEdit ? "grid" : "none"};
          grid-template-columns: 1fr 340px 1fr;
          grid-template-rows: 1fr 360px 1fr;
          z-index: 10;
          position: fixed;
          top: 0;
          left: 0;
          width: ${document.documentElement.clientWidth}px;
          height: ${document.documentElement.clientHeight}px;
          border-radius: 10px;
          box-shadow: 1px 1px 6px 3px #bbb;
          background-color: rgba(100, 100, 100, 0.8);
        }
        .edit-icon {
          height: 90px;
        }
        .edit-content {
          display: ${editIndex.isEdit ? "block" : "none"};
          // justify-content: center;
          // align-items: center;
          width: 340px;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 1px 1px 6px 3px #bbb;
          background-color: #fff;
        }
        .edit-form {
          // width: 340px;
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 5px;
        }
        .cancel {
          width: 100%;
          heigth: 100%;
        }
      `}</style>
    </div>
  )
}
export default Bookmarks
