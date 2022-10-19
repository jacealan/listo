import { useState, useEffect } from "react"

import { Flex } from "../styled-components-jace"
import { LogoVercel, LogoGithub } from "@styled-icons/ionicons-solid"

const Footer = ({viewSize, swipe }) => {
  return (
    <>
      <footer>
        <Flex spaceAround>
          <Flex>
            Hosting on  &nbsp;<LogoVercel size="16" />
            Vercel
          </Flex>
          <Flex>
            <LogoGithub size="16" />
            &nbsp;jacealan/listo
          </Flex>
        </Flex>
        <div>&copy; LiSTo {new Date().getFullYear()}</div>
      </footer>
      <style jsx>{`
        footer {
          width: ${viewSize.width}px;
          margin: 30px;
          border-top: solid 1px #aaa;
          padding-top: 10px;
          line-height: 1.5;
          color: #aaa;
        }
      `}</style>
    </>
  )
}
export default Footer
