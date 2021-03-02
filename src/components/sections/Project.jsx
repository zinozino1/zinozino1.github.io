import React from "react"
import styled from "styled-components"
import ContentLayout from "../layout/ContentLayout"

const ProjectWrapper = styled.div`
  height: 100vh;
`

const Project = () => {
  return (
    <ProjectWrapper>
      <ContentLayout>
        <div>project</div>
      </ContentLayout>
    </ProjectWrapper>
  )
}

export default Project
