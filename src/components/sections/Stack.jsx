import React from "react"
import styled from "styled-components"
import ContentLayout from "../layout/ContentLayout"

const StackWrapper = styled.div`
  height: 100vh;
`
const Stack = () => {
  return (
    <StackWrapper>
      <ContentLayout>
        <div>stack</div>
      </ContentLayout>
    </StackWrapper>
  )
}

export default Stack
