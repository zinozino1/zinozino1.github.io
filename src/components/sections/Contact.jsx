import React from "react"
import styled from "styled-components"
import ContentLayout from "../layout/ContentLayout"

const ContactWrapper = styled.div`
  height: 100vh;
`

const Contact = () => {
  return (
    <ContactWrapper>
      <ContentLayout>
        <div>contact</div>
      </ContentLayout>
    </ContactWrapper>
  )
}

export default Contact
