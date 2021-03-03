import React from "react"
import styled, { css } from "styled-components"

const StyledWrapper = styled.div`
  /* padding-top: 7vh; */
  width: 1200px;
  height: 100vh;
  /* border: 1px solid violet; */
  margin: 0 auto;
  @media (max-width: 1368px) {
    width: 100%;
  }
`

const ContentLayout = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default ContentLayout
