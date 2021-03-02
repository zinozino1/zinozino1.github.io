import React from "react"
import styled from "styled-components"

const ResponsiveHeader = styled.div`
  height: 7vh;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  display: flex;
  padding-left: 40px;
`

const MenuButtonWrapper = styled.div`
  line-height: 7vh;
  padding: 0 15px;
  transition: 0.5s;
  .my-name {
    color: #60e1d4;
    transition: 0.5s;
  }
  span {
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      color: #60e1d4;
    }
  }
`

const AboutWrapper = styled.div``

const About = () => {
  return (
    <>
      <ResponsiveHeader>
        <MenuButtonWrapper>
          <span className="my-name">PARKJINHO</span>
        </MenuButtonWrapper>
        <MenuButtonWrapper>
          <span>ABOUT</span>
        </MenuButtonWrapper>
        <MenuButtonWrapper>
          <span>PROJECT</span>
        </MenuButtonWrapper>
        <MenuButtonWrapper>
          <span>STACKS</span>
        </MenuButtonWrapper>
        <MenuButtonWrapper>
          <span>CONTACT</span>
        </MenuButtonWrapper>
      </ResponsiveHeader>
      <AboutWrapper>하위</AboutWrapper>
    </>
  )
}

export default About
