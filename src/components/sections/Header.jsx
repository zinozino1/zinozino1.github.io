import React, { useEffect, useRef } from "react"
import styled from "styled-components"
// import Profile from "../../images/profile_color_image_removebg.png"
import Profile from "../../images/profile_dark_image_removebg.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const HeaderWrapper = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .header-top {
  }
  .header-middle {
  }
  .header-bottom {
  }
`

const HeaderTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  /* border: 1px solid #fff; */
  font-family: "S-CoreDream-3Light", sans-serif;
  font-size: 12px;
  .header-name {
  }
  .header-copyright {
  }
`

const HeaderMiddleWrapper = styled.div`
  position: relative;
`

const HeaderBottomWrapper = styled.div``

const ProfileImageWrapper = styled.div`
  text-align: center;
  .profile-image {
    transition: 0.5s;
    width: 450px;
    border-bottom: 3px solid white;
  }
`
const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  overflow: hidden;
  transform: translateY(-50%);
  white-space: nowrap;
  font-size: 6vw;
  z-index: -1;
  /* @media ${({ theme }) => theme.device.mobile} {
    font-size: 10vw;
  } */
`

const TopFlowText = styled.div`
  font-family: "Anton", sans-serif;
  color: #60e1d4;
`

const BottomFlowText = styled.div`
  font-family: "Anton", sans-serif;
  color: transparent;
  -webkit-text-stroke: 0.02em #fff;
`

const Header = () => {
  const startTrigger = useRef(null)
  const leftToRightText = useRef(null)
  const rightToLeftText = useRef(null)

  useEffect(() => {
    const config = {
      scrollTrigger: {
        trigger: startTrigger.current,
        start: "top top",
        toggleActions: "play play play play",
        scrub: 1,
      },
      x: 200,
      duration: 1,
    }

    gsap.to(leftToRightText.current, config)
    gsap.to(rightToLeftText.current, {
      ...config,
      x: -200,
    })
  }, [])

  return (
    <HeaderWrapper ref={startTrigger}>
      <HeaderTopWrapper className="header-top">
        <span className="header-name">{`<JINHO PARK />`}</span>
        <span className="header-copyright">
          Copyright &copy; {new Date().getFullYear()} | All rights reserved.
        </span>
      </HeaderTopWrapper>
      <HeaderMiddleWrapper className="header-middle" maxWidth="auto">
        <ProfileImageWrapper>
          <img
            src={Profile}
            alt="profile"
            className="profile-image"
            align="center"
          ></img>
          <TextContainer>
            <TopFlowText ref={leftToRightText}>
              DEVELOPER PARK JINHO
            </TopFlowText>
            <BottomFlowText ref={rightToLeftText}>
              WHO HAS INNOVATIVE MINDSET.
            </BottomFlowText>
          </TextContainer>
        </ProfileImageWrapper>
      </HeaderMiddleWrapper>
      <HeaderBottomWrapper className="header-bottom"></HeaderBottomWrapper>
    </HeaderWrapper>
  )
}

export default Header
