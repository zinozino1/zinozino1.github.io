import React from "react"
import styled from "styled-components"
import ContentLayout from "../layout/ContentLayout"

const ContactWrapper = styled.div`
  height: 100vh;
`

const ContactContent = styled.div`
  display: flex;
  height: 100%;
`

const ContactLeft = styled.div`
  flex: 1;
  /* border: 1px solid #fff; */

  font-size: 7rem;
  font-weight: 600;
  /* color: transparent; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .sub-title1 {
    /* border: 1px solid blue; */
    -webkit-text-stroke: 0.02em #fff;
    padding: 0;
  }
  .sub-title2 {
    /* border: 1px solid blue; */
    color: transparent;
    -webkit-text-stroke: 0.04em #fdfe6c;
    padding: 0;
    transform: translateY(-25px);
  }
`

const ContactRight = styled.div`
  flex: 1;
  /* border: 1px solid #fff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  .contact-content-wrapper {
    padding-left: 20%;
    /* border: 1px solid #fff; */
    .contact-content-subtitle {
      margin-bottom: 2px;
    }
    .contact-content-text {
      font-size: 1.25rem;
      font-weight: 300;
      margin-bottom: 15px;
    }
  }
`

const Contact = () => {
  return (
    <ContactWrapper>
      <ContentLayout>
        <ContactContent>
          <ContactLeft>
            <div className="sub-title-wrapper">
              <div className="sub-title1">CONTACT</div>
              <div className="sub-title2">CONTACT</div>
            </div>
          </ContactLeft>
          <ContactRight>
            <div className="contact-content-wrapper">
              <div className="contact-content-subtitle">
                <span>GITHUB</span>
              </div>
              <div className="contact-content-text">
                <span>
                  <a href="https://github.com/zinozino1">
                    github.com/zinozino1
                  </a>
                </span>
              </div>
              <div className="contact-content-subtitle">
                <span>EMAIL</span>
              </div>
              <div className="contact-content-text">
                <span>gogod23@ajou.ac.kr</span>
              </div>
            </div>
          </ContactRight>
        </ContactContent>
      </ContentLayout>
    </ContactWrapper>
  )
}

export default Contact
