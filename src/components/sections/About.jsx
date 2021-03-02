import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import InnerHeader from "../commons/InnerHeader"
import ContentLayout from "../layout/ContentLayout"

const AboutWrapper = styled.div`
  height: 100vh;
`

const AboutHeader = styled.div`
  border: 1px solid red;
  height: 20%;
  font-size: 7rem;
  font-weight: 600;
  /* color: transparent; */
  padding: 30px;
  -webkit-text-stroke: 0.02em #fff;
`

const AboutSection = styled.div`
  border: 1px solid red;
  height: 80%;
  display: flex;
`

const SectionLeft = styled.div`
  border: 1px solid #fff;
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 30px;
  strong {
    text-decoration: underline;
    font-size: 16px;
  }
  .education {
    /* border: 1px solid blue; */
    flex: 3;
    font-weight: 400;
    font-size: 14px;
    .education-content {
      /* border: 1px solid orange; */
      padding: 10px 0;
    }
  }
  .awards {
    /* border: 1px solid blue; */
    flex: 2;
    font-weight: 400;
    font-size: 14px;
    .awards-content {
      /* border: 1px solid orange; */
      padding: 10px 0;
    }
  }
  .career {
    /* border: 1px solid blue; */
    flex: 2;
    font-weight: 400;
    font-size: 14px;
    .career-content {
      /* border: 1px solid orange; */
      padding: 10px 0;
    }
  }
`

const SectionRight = styled.div`
  border: 1px solid red;
  flex: 3;
  .name-wrapper {
    border: 1px solid #fff;
    font-size: 5rem;
    text-align: right;
    padding: 30px;
    background: #ffb704;
  }
  .content {
    border: 1px solid #fff;
    padding: 30px;
  }
`

const About = () => {
  const [isOutOfHeader, setIsOutOfHeader] = useState(false)

  const onClickUpTo = number => {
    window.scrollTo({
      top: (document.documentElement.scrollHeight / 5) * number,
      behavior: "smooth",
    })
  }

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    if (scrollTop > clientHeight - 100) {
      setIsOutOfHeader(true)
    } else {
      setIsOutOfHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <AboutWrapper>
      {isOutOfHeader && <InnerHeader onClickUpTo={onClickUpTo} />}
      <ContentLayout>
        <AboutHeader>
          <span>ABOUT ME</span>
        </AboutHeader>
        <AboutSection>
          <SectionLeft>
            <div className="education">
              <div className="education-content">
                <strong>EDUCATION</strong>
              </div>
              <div className="education-content">
                <span>2019 교내 프로그래밍 동아리 ANSI 활동</span>
              </div>
              <div className="education-content">
                <span>2019 아주대학교 ICT융합전공 복수전공</span>
              </div>
              <div className="education-content">
                <span>2015 아주대학교 산업공학과 입학</span>
              </div>
              <div className="education-content">
                <span>2013 경기 우성고등학교 졸업</span>
              </div>
            </div>
            <div className="awards">
              <div className="awards-content">
                <strong>AWARDS</strong>
              </div>
              <div className="awards-content">
                <span>2019 교내 SW 빅데이터 공모전 우수상</span>
              </div>
            </div>
            <div className="career">
              <div className="career-content">
                <strong>CAREER</strong>
              </div>
              <div className="career-content">
                <span>2019 미디어 플랫폼 기업 JUNGLE 17 개발팀장</span>
              </div>
            </div>
          </SectionLeft>
          <SectionRight>
            <div className="name-wrapper">PARK JINHO</div>
            <p className="content">
              다양한 사람들과 협업을 통해서 함께 공동의 목표를 성취해 나가는
              것에 관심이 많습니다. 나아가 실패를 겁내지 않고 도전하는 것이
              행복합니다.
            </p>
          </SectionRight>
        </AboutSection>
      </ContentLayout>
    </AboutWrapper>
  )
}

export default About
