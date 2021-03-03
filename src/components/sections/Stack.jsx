import React from "react"
import styled from "styled-components"
import ContentLayout from "../layout/ContentLayout"

const StackWrapper = styled.div`
  height: 100vh;
`

const StackContentWrapper = styled.div`
  display: flex;
  height: 100%;
`

const StackLeft = styled.div`
  flex: 1;
  /* border: 1px solid #fff; */

  font-size: 7rem;
  font-weight: 600;
  position: relative;

  -webkit-text-stroke: 0.02em #fff;
  .stack-title {
    position: absolute;
    top: 10%;
    left: -40%;
    font-size: 7rem;
    font-weight: 600;
    /* border: 1px solid red; */
    margin-top: 50%;
    -webkit-text-stroke: 0.02em #fff;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
`

const StackRight = styled.div`
  flex: 5;
  /* border: 1px solid #fff; */
  padding: 30px;
  .subtitle {
    padding: 30px 0;
    /* border: 1px solid red; */
    span {
      font-size: 3rem;
    }
  }
  .stack-item-wrapper {
    padding: 30px 0;
    /* border: 1px solid blue; */
    span {
      padding: 10px 15px;
      margin-right: 15px;
      background: #31c46e;
      color: #fff;
    }
  }
`

const Stack = () => {
  return (
    <StackWrapper>
      <ContentLayout>
        <StackContentWrapper>
          <StackLeft>
            <div className="stack-title">STACKS</div>
          </StackLeft>
          <StackRight>
            <div className="subtitle">
              <span>LANGUAGE</span>
            </div>
            <div className="stack-item-wrapper">
              <span>Javascript ★★★★</span>
              <span>Java ★★★</span>
              <span>Python ★★★</span>
              <span>C ★★</span>
            </div>
            <div className="subtitle">
              <span>FRAMEWORK</span>
            </div>
            <div className="stack-item-wrapper">
              <span>React ★★★★★</span>
              <span>NextJS ★★★</span>
              <span>Express ★★★</span>
              <span>Android ★★</span>
            </div>
            <div className="subtitle">
              <span>DBMS</span>
            </div>
            <div className="stack-item-wrapper">
              <span>MySQL ★★★</span>
              <span>MongoDB ★★★★</span>
              <span>Firebase ★★★</span>
            </div>
            <div className="subtitle">
              <span>DEVOPS & CLOUD</span>
            </div>
            <div className="stack-item-wrapper">
              <span>GITHUB ★★★</span>
              <span>AWS EC2 ★★</span>
              <span>AWS LAMBDA ★</span>
            </div>
          </StackRight>
        </StackContentWrapper>
      </ContentLayout>
    </StackWrapper>
  )
}

export default Stack
