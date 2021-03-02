import React, { useEffect } from "react"
import styled from "styled-components"
import Header from "../components/sections/Header"
import About from "../components/sections/About"

const MainWrapper = styled.div``

const UpButton = styled.div`
  cursor: pointer;
  width: 45px;
  height: 45px;
  background: #60e1d4;
  position: fixed;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 45px;
  font-weight: bold;
`

const index = () => {
  const onClickUpTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <MainWrapper>
      <Header />
      <About />
      <div style={{ height: "100vh" }}>1</div>
      <UpButton onClick={onClickUpTo}>⌃</UpButton>
    </MainWrapper>
  )
}

export default index
