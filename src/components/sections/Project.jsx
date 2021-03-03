import React from "react"
import styled from "styled-components"
import ContentLayout from "../layout/ContentLayout"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Project1 from "../../images/project_image1.png"
import Project2 from "../../images/project_image2.png"

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`

const ProjectWrapper = styled.div`
  height: 100vh;
`

const ProjectHeader = styled.div`
  height: 20%;
  font-size: 7rem;
  font-weight: 600;
  text-align: right;

  /* color: transparent; */
  padding: 30px;
  -webkit-text-stroke: 0.02em #fff;
`

const ProjectSection = styled.div`
  height: 80%;
  /* border: 1px solid #fff; */
  .slider-content-wrapper {
    height: 100%;
    /* border: 1px solid orange; */
    padding: 0 30px;
    .slider-content-image {
      /* border: 1px solid #fff; */
    }
    .slider-content-desc {
      /* border: 1px solid #fff; */
      font-size: 13px;
      display: flex;

      .desc-info {
        padding: 40px 40px 40px 0;
        flex: 1;
        /* border: 1px solid #fff; */
        .desc-info-subtitle {
          text-decoration: underline;
        }
        .desc-info-text {
          padding-bottom: 10px;
        }
      }
      .desc-paragraph {
        padding: 40px 0 40px 40px;
        flex: 1;
        /* border: 1px solid #fff; */
        line-height: 1.75rem;

        .desc-paragraph-btn {
          margin-top: 30px;
          background: #3aa9f8;
          color: #fff;
          border: 1px solid #3aa9f8;
          outline: none;
          font-size: 12px;
          padding: 10px 30px;
          cursor: pointer;
          transition: 0.7s;
          a {
            transition: 0.7s;
          }
          &:hover {
            background: #fff;
            border: 1px solid #fff;
            transition: 0.7s;
            a {
              color: #3aa9f8;
              transition: 0.7s;
            }
          }
        }
      }
    }
  }
  .slick-prev,
  .slick-next {
    color: #fff;

    width: 20px;
    height: 20px;
    &:before {
      font-size: 20px;
      color: #fff;
    }
  }
`

const Project = () => {
  const config = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <ProjectWrapper>
      <ContentLayout>
        <ProjectHeader>
          <span>PROJECT</span>
        </ProjectHeader>
        <ProjectSection>
          <StyledSlider
            {...config}
            style={{
              height: "100%",
              width: "70%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="slider-content-wrapper">
              <div className="slider-content-image">
                <img src={Project2} alt="project2" />
              </div>
              <div className="slider-content-desc">
                <div className="desc-info">
                  <div className="desc-info-subtitle">PERIOD</div>
                  <div className="desc-info-text">2021.1 - 2021.2 </div>
                  <div className="desc-info-subtitle">ROLE</div>
                  <div className="desc-info-text">Web Frontend</div>
                </div>
                <div className="desc-paragraph">
                  <div>
                    CodePlat은 2명의 팀원이 겨울방학 약 50여일 간 개발한 사이드
                    프로젝트로, 학생, 직장인, 프리랜서, 디자이너 등에게 프로젝트
                    혹은 스터디 구인, 참여 및 커뮤니티 기능을 제공하는 서비스
                    플랫폼입니다. 사용자는 스터디 및 프로젝트 모집, 구인 뿐
                    아니라 커뮤니티 및 채팅 기능을 활용하여 다른 사용자와의
                    원활한 교류를 할 수 있습니다.
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <button className="desc-paragraph-btn">
                      <a
                        href="https://github.com/zinozino1/CodePlat"
                        target="_blank"
                      >
                        MORE
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-content-wrapper">
              <div className="slider-content-image">
                <img src={Project1} alt="project1" />
              </div>
              <div className="slider-content-desc">
                <div className="desc-info">
                  <div className="desc-info-subtitle">PERIOD</div>
                  <div className="desc-info-text">2020.10 - 2020.12 </div>
                  <div className="desc-info-subtitle">ROLE</div>
                  <div className="desc-info-text">Web FullStack</div>
                </div>
                <div className="desc-paragraph">
                  <div>
                    2020 산업공학종합설계 과목에서 제작한 자소서 작성 가이드
                    플랫폼 "Clover"입니다. Clover는 합격 자소서 기반으로
                    사용자의 성공적인 자소서 작성을 돕는 플랫폼입니다.
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <button className="desc-paragraph-btn">
                      <a
                        href="https://github.com/zinozino1/IE-Comprehensive-design"
                        target="_blank"
                      >
                        MORE
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="slider-content-wrapper">
              <h3>3</h3>
            </div> */}
          </StyledSlider>
        </ProjectSection>
      </ContentLayout>
    </ProjectWrapper>
  )
}

export default Project
