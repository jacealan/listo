import { useState, useEffect } from "react"
import { Flex } from "../styled-components-jace"
import { LogoVercel, LogoGithub } from "@styled-icons/ionicons-solid"

const Footer = () => {
  return (
    <>
      <footer>
        <Flex spaceAround>
          <div>
            Hosting on <LogoVercel size="16" />
            Vercel
          </div>
          <div>
            <LogoGithub size="16" />
            jacealan/listo
          </div>
        </Flex>
        <div>&copy; LiSTo {new Date().getFullYear()}</div>
      </footer>
      <style jsx>{`
        footer {
          margin: 10px;
          border-top: solid 1px #aaa;
          padding-top: 10px;
          line-height: 1.5;
        }
      `}</style>
    </>
  )
}
export default Footer
