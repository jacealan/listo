import { useState, useEffect } from "react"
import { Flex, Input, Submit, DivRound } from "../styled-components-jace"

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

  return (
    <>
      <h4>HOME</h4>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          value={word}
          onChange={onChange}
          width={document.documentElement.clientWidth - 100}
        />
        <Submit type="submit" value="Naver" width={70} bgColor={"#04CE5C"} />
      </form>
      <DivRound bgColor={"#eee"}>
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
          <DivRound bgColor={"#ccc"}>
            button
          </DivRound>
        </DivRound>
      </DivRound>
    </>
  )
}
export default Home
